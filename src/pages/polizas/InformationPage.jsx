import { Grid, Link } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import Checkbox from '@mui/material/Checkbox';
import { Link as RouLink} from "react-router-dom"
import Autocomplete from '@mui/material/Autocomplete';
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const InformationPage = () => {
  return (
    <PolizasLayout title="">
        <Grid container  spacing={2}>
            <Grid item xs={ 12 } md={12} lg={12}>
            <p>Jose Pedro Gomez, por favor ingresa la siguiente información: </p>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Fecha">Fecha de Nacimiento: *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3} >
            <CssTextField fullWidth  type="date" sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                size="small" />
            </Grid>
            
            <Grid item xs={ 12 } md={2} lg={2}>
            <label htmlFor="RFC">RFC: *</label>
            </Grid>
            <Grid item xs={ 12 } md={4} lg={4} >
            <CssTextField  label="Rfc" type="text" sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}} size="small"/>
            </Grid>

            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Peso">Peso(Kg.): *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3} >
            <CssTextField fullWidth label="Peso"  type="number" sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}} size="small"/> 
            </Grid>

            <Grid item xs={ 12 } md={2} lg={2}>
            <label htmlFor="Estatura">Estatura (M): *</label>
            </Grid>
            <Grid item xs={ 12 } md={4} lg={4} >
            <CssTextField label="Estatura" type="number" sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}   size="small"/> 
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Peso">Género: *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3}>
        <Autocomplete
          disablePortal
          sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
          size="small"
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <CssTextField {...params} label="Género" InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}} />}
        />
        </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }} justifyContent='center'>
            <Checkbox {...label} />
            <Link sx={{ mt: 1, fontSize:15, fontFamily:'Gilam Book'}} component={RouLink} to='/terms'>Acepto los terminos y condiciones</Link>
            <Grid item xs={ 12} md={12} lg={12}  textAlign='center' sx={{ mt: 3, color: 'error.main' }} >
            <p className="text-font-book">Es necesario que acepte los términos y condiciones para continuar.</p>
            </Grid>
        </Grid>
        <Grid container spacing={ 2 } sx={{ mt: 1 }}>
        <Grid item xs={ 12 } md={6} lg={6} >
                <SecundaryButton variant='contained' component={RouLink}  to='/code'>
                Regresar
                </SecundaryButton>
            </Grid>
        <Grid item xs={ 12 } md={6} lg={6} textAlign='end'>
                <PrimaryButton variant='contained' component={RouLink}  to='/membershi'>
                 Continuar
                </PrimaryButton>
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
