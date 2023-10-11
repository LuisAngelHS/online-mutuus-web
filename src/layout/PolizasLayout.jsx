import {  Grid, Typography } from '@mui/material';
import { SideBar } from '../components';

const drawerWidth = 200;
export const PolizasLayout = ({ children, title = ''   }) => {
  return (
    <Grid
     container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      className='text-font-book-form'
      sx={{ color: 'primary.main', padding: 15,}}
    >
      {/* <SideBar drawerWidth={ drawerWidth } /> */}
      {/* <NavBar/> */}
      <Grid item sx={{ width: { xs:200, sm: 400, md:500, lg:950},}}>
      <Typography variant='h5' sx={{ fontFamily:'Gilam Bold'}} align='center'>{ title }</Typography>
            <br />
            <br />
            { children }
      </Grid>
    </Grid>
  )
}