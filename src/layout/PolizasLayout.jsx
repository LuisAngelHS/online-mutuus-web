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
      className='text-font-book-form'
      sx={{ color: '#fff', padding: 15,}}
    >
      {/* <NavBar/> */}
      <Grid item sx={{ width: { xs:200, sm: 400, md:500, lg:950},}}>
      <Typography variant='h4' sx={{ fontFamily:'Gilam Bold'}} align='center'>{ title }</Typography>
            <br />
            <br />
            { children }
      </Grid>
    </Grid>
  )
}