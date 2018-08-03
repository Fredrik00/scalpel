import { connect } from 'react-redux'

import moment from 'moment'

import { distributeOperations } from 'utils/operationTransform'
import Timeline from '../components/Timeline/Timeline'

const theaterInPlan = (theater, plan) => plan.theaters.includes(theater.id)
const theaterHasOperation = (theater, operations) => operations.some(op => op.theater === theater.id)

const mapStateToProps = (state, ownProps) => {
	const date = moment(state.date)
	const operationsToday = state.operations.filter(op => moment(op.operatingDate).isSame(date, 'day'))

	let firstOp
	let lastOp
	if (operationsToday.length > 0) {
		firstOp = moment(operationsToday[0].phases[0].start)
		lastOp = moment(operationsToday[0].phases[operationsToday[0].phases.length-1].end)
		for (let i = 0; i < operationsToday.length; i++) {
			let phases = operationsToday[i].phases
			let planned = operationsToday[i].plannedPhases
			let phasesStart = moment(phases[0].start)
			let plannedStart = moment(planned[0].start)
			let phasesEnd = moment(phases[phases.length -1].end)
			let plannedEnd = moment(planned[planned.length -1].end)
			
			operationsToday[i].start = phases[0].start
			operationsToday[i].end = phases[phases.length -1].end

			if (phasesStart < firstOp) {
				firstOp = phasesStart
			}

			if (plannedStart < firstOp) {
				firstOp = plannedStart
			}

			if (phasesEnd > lastOp) {
				lastOp = phasesEnd
			}

			if (plannedEnd > lastOp) {
				lastOp = plannedEnd
			}
		}
	}
	
	let numColumns = 0

	const theaters = state.theaters
		.filter(theater => theaterInPlan(theater, state.selectedPlan))
		.filter(theater => theaterHasOperation(theater, operationsToday))
		.map(theater => {
			const distribution = distributeOperations(
				operationsToday.filter(op => op.theater === theater.id), 
				state)
			
			numColumns += distribution.columns
			return {
				...theater,
				operations: distribution.operations,
				startColumn: numColumns - distribution.columns,
				columns: distribution.columns
			}
		})
	return {
		date: date,
		theaters: theaters,
		numColumns: numColumns,
		firstOp: firstOp,
		lastOp: lastOp,
		...ownProps
	}
}

const TodayTimeline = connect(mapStateToProps, null)(Timeline)

export default TodayTimeline