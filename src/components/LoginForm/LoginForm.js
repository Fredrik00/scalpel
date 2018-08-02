import React, { Component } from 'react'

import Button from 'material-ui/core/Button'
import TextField from 'material-ui/core/TextField'
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	withMobileDialog
} from 'material-ui/core/Dialog'
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
		<Dialog
			open
			onRequestClose={this.props.toggleLogin}
			fullScreen={this.props.fullScreen}>
			<DialogTitle>Subscribe</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To subscribe to this website, please enter your email address here. We will send
					updates occationally.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email Address"
					type="email"
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={this.props.toggleLogin} color="primary">
					Cancel
				</Button>
				<Button onClick={this.props.toggleLogin} color="primary">
					Subscribe
				</Button>
			</DialogActions>
		</Dialog>

	}
}
export default LoginForm