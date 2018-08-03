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
		for (let i = 1; i < operationsToday.length; i++) {
			if (moment(operationsToday[i].phases[0].start) < firstOp) {
				firstOp = moment(operationsToday[i].phases[0].start)
			}

			if (moment(operationsToday[i].phases[operationsToday[i].phases.length-1].end) > lastOp) {
				lastOp = moment(operationsToday[i].phases[operationsToday[i].phases.length-1].end)
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