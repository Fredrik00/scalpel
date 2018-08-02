import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon' 
import ListItemText from '@material-ui/core/ListItemText'

import Divider from '@material-ui/core/Divider'

import StopIcon from '@material-ui/icons/Stop'
import ViewList from '@material-ui/icons/ViewList'
import ViewWeek from '@material-ui/icons/ViewWeek'
import PermContactCalendar from '@material-ui/icons/PermContactCalendar'
import './MenuDrawer.css'
import {Background, Logo} from '../../assets'

const menuOptions = [
	{
		text: 'Min plan',
		icon: <PermContactCalendar/>,
		link: '/plan'
	},
	{
		text: 'Tidslinje',
		icon: <ViewWeek/>,
		link: '/'
	},
	{
		text: 'Listevisning',
		icon: <ViewList/>,
		link: '/operations'
	}
]


class MenuDrawer extends Component {
	render() {
		return (
			<Drawer
				open={this.props.open}
				onClose={this.props.onRequestClose}
			>
				<div onClick={this.props.onRequestClose}>
					<div id="top-content">
						<img id="drawer-top-background" alt="background" src={Background}/>
						<img id="drawer-logo" alt="logo" src={Logo}/>
						<List dense id="account-name">
							<ListItem>
								<ListItemText primary={this.props.user.fullName} disableTypography style={{color: 'white'}}/>
							</ListItem>
						</List>
					</div>
					<List>
						{this.props.plans.map((plan, index) =>
							<ListItem button key={index} onClick={() => this.props.onSelectPlan(plan)}>
								<ListItemIcon>
									<div style={{color: plan.id === this.props.selectedPlan.id ?  '#054d94' : '#74b4ea'}}>
										<StopIcon size={32}/>
									</div>
								</ListItemIcon>
								<ListItemText primary={plan.name}/>
							</ListItem>
						)}
						<Divider />
						{menuOptions.map((item, index) =>
							<Link to={item.link} key={index}>
								<ListItem button>
									<ListItemIcon>
										{item.icon}
									</ListItemIcon>
									<ListItemText primary={item.text}/>
								</ListItem>
							</Link>
						)}
					</List>
				</div>
			</Drawer>
		)
	}
}

MenuDrawer.propTypes = {
	open: PropTypes.bool,
	plans: PropTypes.array,
	selectedPlan: PropTypes.object,
	onSelectPlan: PropTypes.func,
	onRequestClose: PropTypes.func,
	user: PropTypes.object
}

export default MenuDrawer