import { Button, Grid, TextField } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import { styled } from '@mui/material/styles';
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

export const PasswordPage = () => {
  

  return (
    <MenuLayout title="">
        <form>
          <Grid container > 
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            <Grid item xs={ 12 } md={7} lg={7}>
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
            
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
         
            <Grid item xs={ 12 } md={7} lg={7}>
            <CssTextField 
              label="Confirmar Contraseña" 
              type="password" 
              placeholder='Confirmar Contraseña' 
              sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              fullWidth
            />
       
            </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 2, mt: 3}} justifyContent='center'>
            <Grid  item xs={ 12 } sm={ 5 } textAlign='center'>
            <PasswordButton variant='contained' component={RouLink} to='/login'>
                 Cancelar
                </PasswordButton>
            </Grid>
              <Grid item xs={ 12 } sm={ 5 } textAlign='center'>
                <PasswordButton2 variant='contained' component={RouLink} to='/register'>
                 Continuar
                </PasswordButton2>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}
