import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import isNil from 'lodash/isNil'
import TextField from '@material-ui/core/TextField'

import moment from 'moment'

import './OperationDrawer.css'

import { activePhase, nextPhase, lastOperationEventTime, hasOperationFinished } from 'utils/operationUtils'

class OperationDrawer extends Component {
	constructor(props) {
		super(props)

		this.onEndPhase = this.onEndPhase.bind(this)
		this.onStartNextPhase = this.onStartNextPhase.bind(this)
		this.onTimeChange = this.onTimeChange.bind(this)
		this.resetState = this.resetState.bind(this)

		this.state = {
			time: moment(),
			isTimeValid: true
		}
	}

	resetState() {
		this.setState({time: moment()})
	}

	onStartNextPhase() {
		this.props.onStartNextPhase(this.props.operation.id, this.state.time)
		this.props.onRequestClose()
	}

	onEndPhase() {
		this.props.onEndPhase(this.props.operation.id, this.state.time)
		this.props.onRequestClose()
	}

	onTimeChange(target) {
		const min = lastOperationEventTime(this.props.operation) || moment().startOf('day')
		const max = moment()
		const [hours, minutes] = target.value.split(':')
		let newTime = moment().clone(this.state.time)
			.startOf('day')
			.add(hours, 'hours')
			.add(minutes, 'minutes')
		
		this.setState({
			time: newTime,
			isTimeValid: newTime.isBetween(min, max)
		})
	}

	render () {
		const operation = this.props.operation
		if(!operation) return null

		const active = activePhase(operation)
		const next = nextPhase(operation)
		const hasActive = !isNil(active)
		const hasNext = !isNil(next)

		const isFinished = hasOperationFinished(operation)

		return (
			<Drawer
				open={this.props.open}
				anchor="bottom"
				onClose={this.props.onRequestClose}
				SlideProps={{
					onExited: this.resetState
				}}
			>
				<div 
					className="OperationDrawer-container" 
					style={!this.props.showDetails ? {gridAutoColumns: 'max-content', gridColumnGap: '0px'} : {}}
				>
					{this.props.showDetails && 
						<Typography type="headline" style={{gridArea: 'details-header'}} >
							Detaljer
						</Typography>
					}
					{this.props.showDetails && 
						<div style={{gridArea: 'details'}}>
							<Typography type="body1">
								Pasient: {operation.patientName}
							</Typography>
							<Typography type="body1">
								{operation.diagnoseTypeFreeText}
							</Typography>
							<Typography type="body1">
								{operation.procedureTypeFreeText}
							</Typography>
						</div>
					}
					{this.props.showDetails && 					
						<Button
							style={{gridArea: 'goto'}}
							variant={'raised'}
							onClick={() => this.props.redirect('/operations/' + operation.id)}
							//dense
						>
								Flere detaljer
						</Button>
					}

					<Typography type="headline" style={{gridArea: 'phase-header'}} >
						Endre faser
					</Typography>

					{isFinished &&
						<Typography type="body2" style={{gridArea: 'phase-at'}} >
							Operasjonen er ferdig!
						</Typography>
					}

					{!isFinished &&
						<Typography type="body2" style={{gridArea: 'phase-at'}} >
							klokken
						</Typography>
					}
					
					{!isFinished &&
						<TextField
							style={{gridArea: 'phase-time'}}
							type="time"
							InputLabelProps={{ shrink: true }}
							value={this.state.time.format('HH:mm')}
							onChange={event => this.onTimeChange(event.target)}
						/>
					}

					{!isFinished && hasActive && 
						<Button
							style={{gridArea: 'phase-primary'}}
							color="primary" 
							onClick={this.onEndPhase}
							disabled={!this.state.isTimeValid}
							variant={'raised'}
							//dense
						>
							Avslutt {active.name}
						</Button> 
					}

					{!isFinished && hasActive && hasNext && 
						<Typography type="body2" style={{gridArea: 'phase-or'}}>
							eller
						</Typography>
					}
					
					{!isFinished && hasNext && 
						<Button
							style={{gridArea: hasActive ? 'phase-secondary' : 'phase-primary'}}
							color="primary"
							onClick={this.onStartNextPhase}
							disabled={!this.state.isTimeValid}
							variant={'raised'}
							//raised={!hasActive}
							//dense
						>
							Start {next.name}
						</Button>
					}
				</div>
			</Drawer>
		)
	}
}

OperationDrawer.propTypes = {
	operation: PropTypes.object,
	showDetails: PropTypes.bool,
	onRequestClose: PropTypes.func,
	onStartNextPhase: PropTypes.func,
	onEndPhase: PropTypes.func
}

export default OperationDrawer