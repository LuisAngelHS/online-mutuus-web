import {createTheme} from '@mui/material';
import {red} from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
      primary: {
        main: '#FFF',
        
      },
      secondary: {
        main: '#AED43A',
        dark: '#444343',
        contrastText: '#ffff',
      },
      error: {
        main: red.A400,
      },
    },
  })
