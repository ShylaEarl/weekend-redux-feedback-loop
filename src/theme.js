import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
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
        tertiary: {
            light: '#efdcd5',
            main: '#725b53',
            dark: '#8c7b75',
        }
    },
    status: {
        danger: 'red',
    }
});

export default theme;

