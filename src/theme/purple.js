import {createTheme} from '@mui/material';
import {red} from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
      primary: {
        main: '#183B91',
      },
      secondary: {
        main: '#AED43A',
      },
      error: {
        main: red.A400,
      },
    },
  })
