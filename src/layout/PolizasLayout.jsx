import {  Grid } from '@mui/material';
import Logo2 from '../assets/img/mutuus-1/Logo2.png';
import { Footer } from '../components';

export const PolizasLayout = ({ children, title = ''   }) => {
  return (
    <Grid
     container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      className='text-font-book-form fondoColor2'
      sx={{ color: 'primary.main',  marginTop:7}}
    >
    
      <Grid textAlign='center'>
      <img src={Logo2} alt="Mutuus" width="230" height="85" align='center'/>
      </Grid>
      <Grid item sx={{ width: { xs:300, sm: 400, md:500, lg:950}, height: { xs:1050, sm: 500, md:500, lg:500},}} >
            <br />
            <br />
            { children }
            
      </Grid>
      <Footer/>
    </Grid>
  )
}