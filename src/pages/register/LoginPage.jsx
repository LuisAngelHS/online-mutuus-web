import { Button, Grid,TextField, Link } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import { Google, Facebook } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Link as RouLink} from "react-router-dom"

const CssTextField = styled(TextField)({
  //Cuando el input tenga el focus.....
  '& label.Mui-focused': {
    color: '#AED43A',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#183B91',
  },

  //Color inicial del border del input....
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFF',
      borderRadius: 15,
    },
    
  //Color del borde al pasar el mouse por encima...  
    '&:hover fieldset': {
      borderColor: '#AED43A',
    },

  //Color del borde al hacer click en el input...  
    '&.Mui-focused fieldset': {
      borderColor: '#AED43A',
    },

    // '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
    //   color: 'white'
    // },
  },
});

const LoginButton = styled(Button)({
  textTransform: 'none',
  fontSize: 20,
  lineHeight: 1.5,
  backgroundColor: '#AED43A',
  color: '#fff',
  fontFamily: 'Gilam Bold',
  borderRadius:15,
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color:'#AED43A'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const LoginPage = () => {
  return (
    <MenuLayout title="">
       <form>
        <Grid container justifyContent='center'>
          <Grid item xs={12} md={8} lg={7} sx={{ mt: 2 }} > 
            <CssTextField 
              label="Correo" 
              type="email" 
              placeholder='correo@google.com' 
              sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          </Grid>
          </Grid>
          <Grid container justifyContent='center'>
          <Grid item xs={12} md={8} lg={7} sx={{ mt: 2 }}>
          <CssTextField 
              label="Contraseña" 
              type="password" 
              placeholder='Contraseña' 
              sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          </Grid>
          </Grid>
      
          
          <Grid container justifyContent='center' spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={8} lg={7}>
              <LoginButton  variant='outlined' fullWidth component={RouLink} to='/register'>
                Continuar
              </LoginButton >
            </Grid>
            <Grid item xs={12} md={8} lg={7} textAlign='center'>
            <Google sx={{cursor:'pointer' }}/> &nbsp;&nbsp;
            <Facebook  sx={{cursor:'pointer' }}/>
            </Grid>
          </Grid>

          <Grid container justifyContent='center'>
          <Grid item xs={12} md={8} lg={7} justifyContent='center'>
          <Link sx={{ mt: 1, fontSize:15, fontFamily:'Gilam Book', color:'#AED43A' }} component={RouLink} to='/password'>Olvide mi contraseña.</Link>
          </Grid>
          </Grid>
          

       


      </form>
    </MenuLayout>
  )
}
