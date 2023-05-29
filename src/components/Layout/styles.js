import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: cyan,
    secondary: cyan,
  },
});

theme = responsiveFontSizes(theme);

/*
const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  }
}));
*/
export { theme };
