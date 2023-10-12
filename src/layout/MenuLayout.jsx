import { Box } from '@mui/system'

import { Toolbar, Grid, Typography } from '@mui/material';
import {  Footer } from '../components';
import { Link as RouLink} from "react-router-dom"
import images from '../assets/img/mutuus-logo.png';

const drawerWidth = 200;
export const MenuLayout = ({ children, title = ''  }) => {
  return (

    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      className='p-pantalla'
      sx={{ color: 'primary.main', marginTop: 15}}
    >
       {/* <SideBar drawerWidth={ drawerWidth } /> */}
      {/* <NavBar/> */}
      {/* <Grid item sx={{ width: { xs:200, sm: 400, md:500, lg:750},}}>
          <Typography variant='h4' sx={{ fontFamily:'Gilam Bold'}} align='center'>{ title }</Typography>
            <br />
            <br />
            { children }
      </Grid> */}

 <Grid item xs={ 12 } md={9} lg={12} component={RouLink} to='/login' >
        <img src={images} width="230" height="85" align='center' />
        </Grid>

      <Grid item sx={{ width: { xs:300, sm: 400, md:500, lg:750},}}>
       
     
          
          <Typography variant='h5' sx={{ fontFamily:'Gilam Bold'}} align='center'>{ title }</Typography>
            <br />
            <br />
            { children }

        </Grid>
        {/* <Footer/> */}
  
    </Grid>
    
    
  )
}