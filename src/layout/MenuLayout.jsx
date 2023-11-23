import { Grid, Typography } from '@mui/material';
import {  SideBar, SideBarRegister } from '../components';

export const MenuLayout = ({ children, title = '', }) => {

  return (

    <Grid
      container
      spacing={ 0 }
      alignItems="center"
      justifyContent="space-around"
      className='text-font-book-form fondoColor'
      sx={{ color: 'primary.main', minHeight: '100vh'}}
    >
      
      {title === "Iniciar Sesión" || title ==="Cambio de contraseña"
        ?  <SideBar/>
        : <SideBarRegister />
      }
      {title === "Iniciar Sesión" || title ==="Cambio de contraseña"
        ? <Grid  item  sx={{ width: { xs:350, sm: 380, md:390, lg:450},
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 8
          }}
          >
            <Typography variant='h5' sx={{ fontFamily:'Gilam Bold'}}>{ title }</Typography>
              <br />
              { children }
          </Grid>  
        : <Grid  item  sx={{width: { xs:350, sm: 380, md:400, lg:590},
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 8
          }}
          >
            <Typography variant='h5' sx={{ fontFamily:'Gilam Bold'}}>{ title }</Typography>
              <br />
              { children }
          </Grid>  
      }
    </Grid>
  )
}