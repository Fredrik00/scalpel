import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme/theme'
import Header from './components/Header/Header'
import MenuDrawer from './components/MenuDrawer/MenuDrawer'
import Timeline from './components/Timeline/Timeline'
import Patients from './components/Patients/Patients'

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			menuOpen: false
		}

		this.openMenu = this.openMenu.bind(this)
		this.closeMenu = this.closeMenu.bind(this)
	}

	openMenu() {
		if (this.state.menuOpen) return
		this.setState(() => ({menuOpen: true}))
	}

	closeMenu() {
		if (!this.state.menuOpen) return	
		this.setState(() => ({menuOpen: false}))
	}

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Router>
					<div>
						<MenuDrawer open={this.state.menuOpen} onRequestClose={this.closeMenu}/>
						<Header onMenuButtonClick={this.openMenu}  />

						<Route exact path="/" component={Timeline}/>
						<Route path="/patients" component={Patients}/>
					</div>
				</Router>
			</MuiThemeProvider>
		)
	}
}

export default App
