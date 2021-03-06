export const setSelectedDate = date => ({
	type: 'SET_SELECTED_DATE',
	date: date
})

export const openMenuDrawer = () => ({
	type: 'OPEN_MENU_DRAWER'
})

export const closeMenuDrawer = () => ({
	type: 'CLOSE_MENU_DRAWER'
})

export const finishOperationPhase = (operationId, time) => ({
	type: 'FINISH_OPERATION_PHASE',
	operationId: operationId,
	time: time
})

export const startNextOperationPhase = (operationId, time) => ({
	type: 'START_NEXT_OPERATION_PHASE',
	operationId: operationId,
	time: time
})

export const setSelectedPlan = plan => ({
	type: 'SET_SELECTED_PLAN',
	plan: plan
})

export const fetchBegin = () => ({
	type: 'FETCH_BEGIN'
})

export const fetchSuccess = products => ({
	type: 'FETCH_SUCCESS',
	payload: { products }
})

export const fetchFailure = error => ({
	type: 'FETCH_FAILURE',
	payload: { error }
})