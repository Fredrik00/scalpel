import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import theme from './theme/theme'
import LoginForm from './components/LoginForm/LoginForm'
import MenuDrawer from './containers/MenuDrawer'
import TodayTimeline from './containers/TodayTimeline'
import OperationList from './containers/OperationList'
import MyPlan from './containers/MyPlan'
import OperationDetails from './containers/OperationDetails'

import './styles/App.css'

const App = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<Router basename="/scalpel">
				<div>
					
					<LoginForm name="loginForm"/>
				</div>
				{/*
				<div>
					<MenuDrawer />
						
					<div className="App-content">
						<Switch>
							<Route exact path="/" render={props =>
								<TodayTimeline {...props} />
							} />
							<Route exact path="/operations" render={props =>
								<OperationList {...props} />
							} />
							<Route exact path="/operations/:operationId" render={props =>
								<OperationDetails {...props} />
							} />
							<Route exact path="/plan" render={props =>
								<MyPlan {...props} openMenu={this.openMenu} />
							} />
							<Redirect from="*" to="/" />
						</Switch>
					</div>
				</div>
			*/}
			</Router>
		</MuiThemeProvider>
	)
}

export default App
