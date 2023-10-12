import { Button, Grid, TextField, Link } from "@mui/material"
import { styled } from '@mui/material/styles';
import { PolizasLayout } from "../../layout/PolizasLayout"
import Checkbox from '@mui/material/Checkbox';
import { Link as RouLink} from "react-router-dom"
import Autocomplete from '@mui/material/Autocomplete';

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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const InformationPage = () => {
  return (
    <PolizasLayout title="">
        <Grid container  spacing={3}>
            <Grid item xs={ 12 } md={12} lg={12}>
            <p>Jose Pedro Gomez, por favor ingresa la siguiente información: </p>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Fecha">Fecha de Nacimiento: *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3} >
            <CssTextField fullWidth  type="date" sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                size="small" />
            </Grid>
            
            <Grid item xs={ 12 } md={2} lg={2}>
            <label htmlFor="RFC">RFC: *</label>
            </Grid>
            <Grid item xs={ 12 } md={4} lg={4} >
            <CssTextField  label="Rfc" type="text"   sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}} size="small"/>
            </Grid>

            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Peso">Peso(Kg.): *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3} >
            <CssTextField fullWidth label="Peso"  type="number"   sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}} size="small"/> 
            </Grid>

            <Grid item xs={ 12 } md={2} lg={2}>
            <label htmlFor="Estatura">Estatura (M): *</label>
            </Grid>
            <Grid item xs={ 12 } md={4} lg={4} >
            <CssTextField label="Estatura" type="number"   sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}   size="small"/> 
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Peso">Género: *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
        <Autocomplete
          disablePortal
          sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
          size="small"
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <CssTextField {...params} label="Género" InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}} />}
        />
        </Grid>
        </Grid>

        <Grid container sx={{ mt: 4 }} justifyContent='center'>
            <Checkbox {...label} />
            <Link sx={{ mt: 1, fontSize:15, fontFamily:'Gilam Book'}} component={RouLink} to='/terms'>Acepto los terminos y condiciones</Link>
            <Grid item xs={ 12} md={12} lg={12}  textAlign='center' sx={{ mt: 3, color: 'error.main' }} >
            <p className="text-font-book">Es necesario que acepte los términos y condiciones para continuar.</p>
            </Grid>
        </Grid>
      
       
        <Grid container spacing={ 4 } sx={{ mt: 2 }}>
        <Grid item xs={ 12 } md={12} lg={11}textAlign='end'>
                <Button sx={{ fontFamily:'Gilam Regular' }} variant='contained' component={RouLink}  to='/membershi'>
                 Continuar
                </Button>
            </Grid>
        </Grid>        
    </PolizasLayout>
  )
  
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Masculino' },
  { label: 'Femenino' }
];
