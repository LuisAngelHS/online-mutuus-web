import { Grid, Typography } from '@mui/material';
import {  SideBar, SideBarRegister } from '../components';

const drawerWidth = 600;
const drawerWidth2 = 600;
export const MenuLayout = ({ children, title = '', }) => {

  return (

    <Grid
      container
      spacing={ 0 }
      alignItems="center"
      justifyContent="center"
      className='text-font-book-form fondoColor'
      sx={{ color: 'primary.main', minHeight: '100vh'}}
    >
      {title === "Iniciar Sesión" || title ==="Cambio de contraseña"
        ?  <SideBar drawerWidth={ drawerWidth } />
        : <SideBarRegister drawerWidth2={ drawerWidth2 } />
      }

      {title === "Iniciar Sesión" || title ==="Cambio de contraseña"
        ?  <Grid item xs={ 9 } md={10} lg={3} sx={{
          backgroundColor: 'white', 
          padding: 3, 
          borderRadius: 8
      }}>
        
        <Typography variant='h5' sx={{ fontFamily:'Gilam Bold'}}>{ title }</Typography>
          <br />
          <br />
          { children }

      </Grid>
        :  <Grid item xs={ 9 } md={10} lg={4} sx={{
          backgroundColor: 'white', 
          padding: 6, 
          borderRadius: 8
      }}>
        
        <Typography variant='h5' sx={{ fontFamily:'Gilam Bold'}}>{ title }</Typography>
          <br />
          <br />
          { children }

      </Grid>
      }
    </Grid>
  )
}