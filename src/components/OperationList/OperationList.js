import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import List, { ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List'
import SwipeableViews from 'react-swipeable-views'
import { Link } from 'react-router-dom'
import { Pencil, GreenBall } from 'assets'
import './OperationList.css'

function TabContainer(props) {
	return <div style={{ padding: 20 }}>{props.children}</div>
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
}

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		marginTop: 0,
		backgroundColor: theme.palette.background.paper,
	}
})

class OperationList extends React.Component {

	constructor(props) {
		super(props)
		this.props.setHeaderItems(['calendar'])
		this.theaters = props.theaters
		this.state = {
			value: 0
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleChangeIndex = this.handleChangeIndex.bind(this)
	}

	componentWillReceiveProps (newProps) { //Set to first tab on change plan
		if (this.props.plan != newProps.plan) {
			this.handleChange(undefined, 0)
		}
	}

	handleChange(_, value) {
		this.setState({value})
	}

	handleChangeIndex(index) {
		this.setState({value: index})
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<AppBar position='static' color='default'>
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor='primary'
						textColor='primary'
						scrollable
						scrollButtons='auto'
					>
						{this.props.theaters.map((theatre, tIndex) => {
							return <Tab label={theatre.name} key={tIndex}/>
						})}
					</Tabs>
				</AppBar>
				<SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
					{this.props.theaters.map((theatre, tIndex) =>
						tIndex === this.state.value ?
							<TabContainer key={tIndex}>
								<List>
									{theatre.operations.map((operation, oIndex) =>
										<div key={oIndex}>
											<Link to={'/operations/'+operation.id} style={{color:'black'}}>
												<ListItem button style={{paddingTop:'0px'}}>
													<img src={Pencil} height='20px' alt='Status icon'/>
													<img src={GreenBall} alt='Status icon'/>
													<ListItemText primary={operation.procedure} secondary={operation.diagnosis}/>
													<ListItemSecondaryAction style="color:black">{operation.genderAge}</ListItemSecondaryAction>
												</ListItem>
											</Link>
										</div>
									)}
								</List>
							</TabContainer> : <div key={tIndex}></div>)}
				</SwipeableViews>
				{this.props.theaters.length > 0 ? '' : <p>Ingen operasjoner i dag!</p>}
			</div>
		)
	}
}

OperationList.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OperationList)
