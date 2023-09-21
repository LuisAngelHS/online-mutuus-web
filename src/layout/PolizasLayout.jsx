import {  Grid, Typography } from '@mui/material';
import { NavBar } from '../components';

export const PolizasLayout = ({ children, title = ''   }) => {
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
      <Grid item sx={{ width: { xs:200, sm: 400, md:500, lg:950},}}>
      <Typography variant='h4' sx={{ mb: 1 }} align='center'>{ title }</Typography>
            <br />
            <br />
            { children }
      </Grid>
    </Grid>
  )
}