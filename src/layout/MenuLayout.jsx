import { Box } from '@mui/system'
import { NavBar } from '../components';
import { Toolbar, Grid, Typography } from '@mui/material';

export const MenuLayout = ({ children, title = ''  }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{  padding: 16}}
    >
      <NavBar/>
      <Grid item sx={{ width: { xs:200, sm: 400, md:500, lg:750},}}>
          <Typography variant='h4' sx={{ mb: 1 }} align='center'>{ title }</Typography>
            <br />
            <br />
            { children }
      </Grid>
    </Grid>
  )
}