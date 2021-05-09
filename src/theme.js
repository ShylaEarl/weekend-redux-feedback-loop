import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    //Trying to figure out margin and padding spacing in MUI
    spacing: 8,
    root: {
        margin: '2rem',
    },
    //creates theme override for colors
    palette: {
        primary: {
            light: '#e5ffff',
            main: '#b2ebf2',
            dark: '#81b9bf',
        },
        secondary: {
            light: '#ffc2b4',
            main: '#FF6666',
            dark: '#ff9999',
        },
        tertiary: purple,
    },
});

export default theme;

