import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
	options: {
		primary: '#054d94', // hemit colors
		secondary: '#74b4ea',
		error: red,
	},
})

export default theme