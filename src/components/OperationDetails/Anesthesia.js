import React from 'react'
import Grid from '@material-ui/core/List'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import './OperationDetails.css'

const fields1 = ([
	['Anest.kode på program', 'anesthesiaCode'],
	['Tilleggsinfo', 'anesthesiaCodeComment'],
	['Premedikasjon', 'premedication'],
	['Prepol dato', 'propolDate'],
])

const fields2 = ([
	['ASA', 'asa'],
	['Høyde (cm)', 'height'],
	['Vekt (kg)', 'weight'],
])

const fields3 = ([
	['Anestesitilsyn', 'Journaltilsyn uten pas. tilstede'],
	['Verifisert', 'Larsen, Tor']
])

const checkboxFields = ([
	['Screening utført', 'isScreeningCompleted'],
	['Epi. kat.', 'needsEpiduralAnesthetic'],
	['Art. kran.', 'needsArterialCatheter'],
	['CVK', 'needsCentralVenousCatheter']
])

const Anesthesia = (props) => {
	return (
		<div>
			<Grid>
				<Grid>
					<h4>Anestesiologiske forhold</h4>
					<p>{props.operation['anesthesiaInformation'] ? props.operation['anesthesiaInformation'] : '-'}</p>
				</Grid>
				<Divider />
				<Grid>
					{fields1.map((item, i) =>
						<ListItem key={i}>
							<ListItemText
								primary={props.operation[item[1]] ? props.operation[item[1]] : '-'}
								secondary={item[0]}
							/>
						</ListItem>)}
				</Grid>
				<Divider />
				<Grid>
					{checkboxFields.map((item, i) =>
						<ListItem key={i}>
							{item[0]}
							<ListItemSecondaryAction>
								<Checkbox
									checked={props.operation[item[1]]}
									tabIndex={-1}
									disabled
								/>
							</ListItemSecondaryAction>
						</ListItem>)}
				</Grid>
				<Divider />
				<Grid>
					{fields2.map((item, i) =>
						<ListItem key={i}>
							<ListItemText
								primary={props.operation[item[1]] ? props.operation[item[1]] : '-'}
								secondary={item[0]}
							/>
						</ListItem>)}
					<ListItem>
						<ListItemText
							primary={props.operation['weight'] && props.operation['height'] ? props.operation['weight']/((props.operation['height'])^2) : '-'}
							secondary='BMI'
						/>
					</ListItem>
				</Grid>
				<Divider />
				<Grid>
					<h4>Annet</h4>
					<p>{props.operation['otherInformation'] ? props.operation['otherInformation'] : '-'}</p>
				</Grid>
				<Divider />
				<Grid>
					{fields3.map((item, i) =>
						<ListItem key={i}>
							<ListItemText
								primary={item[1]}
								secondary={item[0]}
							/>
						</ListItem>)}
				</Grid>
			</Grid>
		</div>
	)
}

export default Anesthesia
