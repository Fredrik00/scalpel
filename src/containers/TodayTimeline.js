import Timeline from '../components/Timeline/Timeline'
import { connect } from 'react-redux'

import last from 'lodash/last'

import { startTime, endTime } from '../utils/operationUtils'

import moment from 'moment'

/**
 * Selects as many non-overlapping operations as possible
 * @param {*} operations 
 * @returns an object containing the selected operations and the rest
 */
const selectNonOverlappingOperations = operations => {
	const sorted = operations.sort((op1, op2) => endTime(op1) > endTime(op2))
	const nonOverlapping = [sorted[0]]
	const rest = []

	sorted.slice(1).forEach(op => {
		if(startTime(op) > endTime(last(nonOverlapping))) {
			nonOverlapping.push(op)
		}else{
			rest.push(op)
		}
	})
	return {
		selected: nonOverlapping, 
		rest: rest
	}
}

/**
 * Distributes operations into as many columns as needed so none overlap
 * @param {*} operations 
 * @returns An object that contains of the operations with added column prop and the number of columns needed
 */
const distributeOperations = (operations, state) => {
	const result = []
	let column = 0
	let rest = operations
	while(rest.length > 0) {
		const overlap = selectNonOverlappingOperations(rest)
		rest = overlap.rest
		result.push(...overlap.selected.map(op => {
			const phases = op.phases.map(phase => {
				const opPhase = state.operationPhases.find(opPhase => opPhase.id === phase.id)
				return {
					...phase,
					...opPhase,
					column: column
				}
			})
			return {
				...op,
				phases: phases,
				column: column
			}
		}))
		column++
	}
	return {
		operations: result, 
		columns: column
	}
}

const mapStateToProps = (state, ownProps) => {
	const date = moment(state.date)
	const operationsToday = state.operations.filter(op => moment(op.phases[0].start).isSame(date, 'day'))

	let numColumns = 0

	const theaters = state.theaters
		.filter(theater => operationsToday.some(op => op.theater === theater.id))
		.map((theater, i) => {
			const dist = distributeOperations(operationsToday.filter(op => op.theater === theater.id), state)
			
			numColumns += dist.columns
			return {
				...theater,
				operations: dist.operations,
				startColumn: numColumns - dist.columns,
				columns: dist.columns,
				index: i
			}
		})
	return {
		date: date,
		theaters: theaters,
		numColumns: numColumns,
		...ownProps
	}
}

const TodayTimeline = connect(mapStateToProps, null)(Timeline)

export default TodayTimeline