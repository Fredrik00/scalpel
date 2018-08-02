import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './Login.css'

export default class Login extends Component {
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

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}
}