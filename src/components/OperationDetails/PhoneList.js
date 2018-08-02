import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Phone from '@material-ui/icons/Phone'

const Staff = (props) => {
	return (
		<div>
			<List>
				{props.operation['crew'] ? props.operation['crew'].map((person, index) =>
					<ListItem key={index}> <ListItemText primary={person['fullName']} secondary={person['position']}/>
						<ListItemSecondaryAction>
							<IconButton aria-label='Call' href={'tel:' + person['phone']}>
								<Phone />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				) : 'Ingen personell er registrert'}
			</List>
		</div>)
}

export default Staff