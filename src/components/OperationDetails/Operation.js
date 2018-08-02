import React from 'react'
import Grid from '@material-ui/core/List'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import './OperationDetails.css'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const shortFields = ([
	['Fastende', 'fasting'],
	['Knivtid', 'surgeonTime'],
	['Leie', 'position'],
	['Blod', 'bloodType'],
	['Anest. kode', 'anesthesiaCode'],
	['ASA', 'asa']
])

const longFields = ([
	['Beskjed til operasjonsstue', 'messageFromBedWard'],
	['Medisinsk informasjon', 'medicalInformation']
])

const checkboxFields = ([
	['Skal ikke ha anestesitilsyn', 'noAnesthesia'],
	['Tramue/Ulykke', 'trauma'],
	['Tromboseprofylakse', 'thrombosisProphylaxis'],
	['Smittefare', 'isContaminationDanger'],
	['Intensivplass', 'intensiveRoom'],
	['AB-profylakse', 'abProphylaxis'],
	['Overvåking', 'surveillance']
])

const Operation = (props) => {
	return (
		<div>
			<Grid>
				{longFields.map((item, i) =>
					<Grid key={i}>
						<h4>{item[0]}</h4>
						<p>{props.operation[item[1]] ? props.operation[item[1]] : 'Ingen informasjon tilgjengelig'}</p>
						<Divider/>
					</Grid>)}
				<Grid>
					{shortFields.map((item,i) =>
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
					<ListItem>
						<ListItemText
							primary='-'
							secondary='Verifisert'
						/>
					</ListItem>
				</Grid>
			</Grid>
		</div>
	)
}

export default Operation