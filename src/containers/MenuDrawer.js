import { connect } from 'react-redux'
import MenuDrawer from '../components/MenuDrawer/MenuDrawer'
import { setSelectedPlan, closeMenuDrawer  } from '../actions'
import { fetchTestData } from '../actions/testData'

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		plans: state.plans,
		selectedPlan: state.selectedPlan,
		user: state.persons.find(person => person.id === state.loggedInUser),
		open: state.menuDrawerOpen
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSelectPlan: plan => {
			dispatch(setSelectedPlan(plan))
		},
		onRequestClose: () => {
			dispatch(closeMenuDrawer())
			dispatch(fetchTestData())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)