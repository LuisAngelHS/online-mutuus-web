import { Button, Grid,TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MenuLayout } from "../../layout/MenuLayout"
import { Link } from "react-router-dom"

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

const PasswordButton = styled(Button)({
  textTransform: 'none',
  fontSize: 20,
  lineHeight: 1.5,
  backgroundColor: '#AED43A',
  color: '#fff',
  fontFamily: 'Gilam Bold',
  borderRadius:12,
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

const PasswordButton2 = styled(Button)({
  textTransform: 'none',
  fontSize: 20,
  lineHeight: 1.5,
  backgroundColor: '#fff',
  color: '#AED43A',
  fontFamily: 'Gilam Bold',
  borderRadius:12,
  '&:hover': {
    backgroundColor: '#AED43A',
    borderColor: '#AED43A',
    boxShadow: 'none',
    color:'#fff'
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

export const RegisterPage = () => {
  return (
    <MenuLayout title="">
        <form>
          <Grid container spacing={ 3 } alignItems='center' justifyContent='center'>
            <Grid  item xs={ 12 } md={3} lg={3} justifyContent='center'>
            <label htmlFor="Nombre">Nombre: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={7}>
              <CssTextField
              label="Nombre" 
                type="text" 
                placeholder='Nombre' 
                fullWidth
                size="small"
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              />
            </Grid>
    
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Correo">Correo electrónico: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={7} className='format-in'>
              <CssTextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                size="small"
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Contraseña">Contraseña: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={7}>
            <CssTextField
              label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                size="small"
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              />
        
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Contraseña">Confirmar Contraseña: </label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={7}>
            <CssTextField
              label="Confirmar Contraseña" 
                type="password" 
                placeholder='Confirmar Contraseña' 
                fullWidth
                size="small"
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              />
    
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="celular">Número celular: * </label>
            </Grid>
            <Grid  item xs={ 12 } md={9} lg={7}>
              <CssTextField 
                label="Número celular" 
                type="number" 
                placeholder='5556968596' 
                fullWidth
                size="small"
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid container spacing={ 5 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <PasswordButton variant='contained' component={Link} to='/login'>
                  Cancelar
                </PasswordButton>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <PasswordButton2  variant='contained' component={Link} to='/code'>
                 Continuar
                </PasswordButton2>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}
