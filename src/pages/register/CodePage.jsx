import { Button, Grid, TextField } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom"

const CssTextField = styled(TextField)({
  //Cuando el input tenga el focus.....
  '& label.Mui-focused': {
    color: '#ffff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#183B91',
  },

  //Color inicial del border del input....
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#AED43A',
      borderRadius: 15,
    },
    
  //Color del borde al pasar el mouse por encima...  
    '&:hover fieldset': {
      borderColor: '#ffff',
    },

  //Color del borde al hacer click en el input...  
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
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


export const CodePage = () => {
  return (
    <PolizasLayout title="Contratación en línea">
        <Grid item xs={ 12 } md={6} lg={6}>
            <p className="text-font-book">Se he enviado un código por SMS a su celular.</p>
            <p className="text-font-book">Por favor capture el código recibido:</p>
        </Grid>
        <Grid container sx={{ mt: 10 }}>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <CssTextField className="input-code"  sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}  sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }} textAlign='center'>
            <CssTextField className="input-code"/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3} sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }} textAlign='center'>
            <CssTextField className="input-code"/>
            </Grid>
            <Grid  item xs={ 6} md={3} lg={3}  sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }} textAlign='center'>
            <CssTextField className="input-code"/>
            </Grid>
            <Grid item xs={ 12} md={12} lg={12} sx={{ mt: 3, color: 'error.main' }} textAlign='center' >
            <p className="text-font-book">Código incorrector favor de Verificar.</p>
            </Grid>
            
        </Grid>
       
        <Grid container spacing={ 5 } sx={{ mb: 2, mt: 5 }}>
            <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <PasswordButton variant='contained' >
                  Reenviar código
                </PasswordButton>
            </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <PasswordButton2 variant='contained' component={Link} to='/information'>
                 Continuar
                </PasswordButton2>
            </Grid>
        </Grid>
    </PolizasLayout>
  )
}
