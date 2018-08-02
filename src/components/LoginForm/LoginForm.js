import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

import './LoginForm.css'


class LoginForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: ''
		}
	}

	validateForm() {
		// TODO: Improve validations
		return this.state.email.length > 0 && this.state.password.length > 0
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
	}


	render() {
		return (
			<Paper className="box">
				<div className="top">
					<h1>Logg inn</h1>
					<img className="logo" src={ require('../../assets/scalpelapp.ico') } />
				</div>
				<TextField
					autoFocus = {true}
					margin = {'dense'}
					id = {'username'}
					label = {'Brukernavn'}
					type = {'username'}
					fullWidth = {true}
				/>
				<TextField
					autoFocus = {true}
					margin = {'dense'}
					id = {'password'}
					label = {'Passord'}
					type = {'password'}
					fullWidth = {true}
				/>
				<div className="select-container">
					<InputLabel htmlFor="domain-native-helper">Domene</InputLabel>
					<NativeSelect className="select">
						<option value="HELSEMN">HELSEMN</option>
						<option value="TEST">TEST</option>
					</NativeSelect>
					<FormHelperText>Velg din seksjon.</FormHelperText>
				</div>
				<div className="button-container">
					<Button color="primary"  variant="contained">
						Logg inn
					</Button>
				</div>
			</Paper>
		)
	}
}
export default LoginForm