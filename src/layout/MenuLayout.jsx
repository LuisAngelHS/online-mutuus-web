import { Box } from '@mui/system'
import { NavBar } from '../components';
import { Toolbar, Grid, Typography } from '@mui/material';
import {  SideBar } from '../components';


const drawerWidth = 200;
export const MenuLayout = ({ children, title = ''  }) => {
  return (

    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      className='text-font-book-form'
      sx={{ color: 'primary.main', padding: 30,}}
    >
       <SideBar drawerWidth={ drawerWidth } />
      {/* <NavBar/> */}
      {/* <Grid item sx={{ width: { xs:200, sm: 400, md:500, lg:750},}}>
          <Typography variant='h4' sx={{ fontFamily:'Gilam Bold'}} align='center'>{ title }</Typography>
            <br />
            <br />
            { children }
      </Grid> */}


      <Grid item
       
       xs={ 12 }
       md={ 12 }
       lg={ 12 }
       sx={{ 
            width: { sm: 500 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 
        }}>
          
          <Typography variant='h5' sx={{ fontFamily:'Gilam Bold'}} align='center'>{ title }</Typography>
            <br />
            
            { children }

        </Grid>
    </Grid>
  )
}