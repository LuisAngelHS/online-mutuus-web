import { Button, Grid, TextField } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import { styled } from '@mui/material/styles';
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
      borderColor: '#183B91',
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


export const CodePage = () => {
  return (
    <PolizasLayout title="Contratación en línea">
        <Grid item xs={ 12 } md={6} lg={6}>
            <p className="text-font-book">Se he enviado un código por SMS a su celular.</p>
            <p className="text-font-book">Por favor capture el código recibido:</p>
        </Grid>
        <Grid container sx={{ mt: 10 }}>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <CssTextField className="input-code"  sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}  sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }} textAlign='center'>
            <CssTextField className="input-code"/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3} sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }} textAlign='center'>
            <CssTextField className="input-code"/>
            </Grid>
            <Grid  item xs={ 6} md={3} lg={3}  sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }} textAlign='center'>
            <CssTextField className="input-code"/>
            </Grid>
            <Grid item xs={ 12} md={12} lg={12} sx={{ mt: 3, color: 'error.main' }} textAlign='center' >
            <p className="text-font-book">Código incorrector favor de Verificar.</p>
            </Grid>
            
        </Grid>
       
        <Grid container spacing={ 5 } sx={{ mb: 2, mt: 5 }}>
            <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button sx={{ backgroundColor: 'secondary.main', fontFamily:'Gilam Regular' }} variant='contained' >
                  Reenviar código
                </Button>
            </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button sx={{fontFamily:'Gilam Regular' }} variant='contained' component={Link} to='/information'>
                 Continuar
                </Button>
            </Grid>
        </Grid>
    </PolizasLayout>
  )
}
