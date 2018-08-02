import React from 'react'
import PropTypes from 'prop-types'
import Dialog, { DialogContent, DialogActions, DialogTitle } from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ScheduleIcon from '@material-ui/icons/Schedule'
import Typography from '@material-ui/core/Typography'

import { lastOperationEventTime, activePhase, nextPhase } from 'utils/operationUtils'

import moment from 'moment'
import isNil from 'lodash/isNil'

import './PhaseDialog.css'

class PhaseDialog extends React.Component {
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

	render() {
		if(!this.props.operation) return null
		const operation = this.props.operation
		const active = activePhase(operation)
		const next = nextPhase(operation)
		const hasActive = !isNil(active)
		const hasNext = !isNil(next)
		return (
			<Dialog 
				onRequestClose={this.props.onRequestClose} 
				open={this.props.open}
				onExited={this.resetState} 
			>
				<DialogTitle>{'Operation ' + operation.id}</DialogTitle>
				<DialogContent>
					<form style={{display: 'flex', flexWrap: 'wrap', margin: 'auto', marginTop: 15}}>
						<ScheduleIcon style={{marginRight: 15, marginTop: 5}}/>
						<TextField
							id="time"
							type="time"
							InputLabelProps={{ shrink: true }}
							value={this.state.time.format('HH:mm')}
							onChange={event => this.onTimeChange(event.target)}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<div className='PhaseDialog-grid-container'>
						{hasActive && 
							<Button
								style={{gridArea: 'primary'}}
								color="primary" 
								onClick={this.onEndPhase}
								disabled={!this.state.isTimeValid}
								variant={'raised'}
								//dense
							>
								End {active.name}
							</Button> 
						}
						{hasNext && 
							<Button
								style={{gridArea: hasActive ? 'secondary' : 'primary'}}
								onClick={this.onStartNextPhase}
								disabled={!this.state.isTimeValid}
								color="primary"
								//variant={'raised'}
								raised={!hasActive}
								//dense
							>
								Start {next.name}
							</Button>
						}
						{hasActive && hasNext && 
							<Typography 
								style={{gridArea: 'or', textAlign: 'center'}} 
								type="body2"
							>
								or
							</Typography>
						}

						<Button
							style={{gridArea: 'cancel'}}
							onClick={this.props.onRequestClose}
							color="primary"
							//dense
						>
							Cancel
						</Button>
					</div>
				</DialogActions>
			</Dialog>
		)
	}
}

PhaseDialog.propTypes = {
	open: PropTypes.bool,
	operation: PropTypes.object,
	onRequestClose: PropTypes.func
}

export default PhaseDialog