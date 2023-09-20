import {  Grid } from '@mui/material';
import { NavBar } from '../components';

export const PolizasLayout = ({ children  }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{  padding: 12 }}
    >
      <NavBar/>
      <Grid item sx={{ width: { xs:200, sm: 400, md:500, lg:900},}}>
          
            <br />
            <br />
            { children }
      </Grid>
    </Grid>
  )
}