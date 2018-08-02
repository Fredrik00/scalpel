import { fetchBegin, fetchFailure, fetchSuccess  } from '../actions'

export function fetchTestData() {
	return dispatch => {
		// Fetch data
		dispatch(fetchBegin)
		console.log('Fetching')
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => {return response.json()})
			.then((json) => {
				dispatch(fetchSuccess(json.movies))
				console.log('Success')
				return json.movies
			})
			.catch((error) => {
				dispatch(fetchFailure(error))
				console.error(error)
			})
	}
}