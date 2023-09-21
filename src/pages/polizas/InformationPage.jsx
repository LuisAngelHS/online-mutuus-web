import { Button, Grid, TextField, Link } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import Checkbox from '@mui/material/Checkbox';
import { Link as RouLink} from "react-router-dom"

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
            <TextField type="number"  size="small"/>
            </Grid>
            
            <Grid item xs={ 12 } md={2} lg={2}>
            <label htmlFor="RFC">RFC: *</label>
            </Grid>
            <Grid item xs={ 12 } md={4} lg={4} >
            <TextField type="number"  size="small"/>
            </Grid>

            <Grid item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Peso">Peso (Kg.): *</label>
            </Grid>
            <Grid item xs={ 12 } md={3} lg={3} >
            <TextField type="number"  size="small"/> 
            </Grid>


            <Grid item xs={ 12 } md={2} lg={2}>
            <label htmlFor="Estatura">Estatura (M): *</label>
            </Grid>
            <Grid item xs={ 12 } md={4} lg={4} >
            <TextField type="number"  size="small"/> 
            </Grid>
        </Grid>

        <Grid container sx={{ mt: 8 }} justifyContent='center'>
            <Checkbox {...label} />
            <Link sx={{ mt: 1 }} component={RouLink} to='/terms'>Acepto los terminos y condiciones</Link>
            <Grid item xs={ 12} md={12} lg={12}  textAlign='center' sx={{ mt: 3, color: 'error.main' }} >
            <p>Es necesario que acepte los términos y condiciones para continuar.</p>
            </Grid>
        </Grid>
      
       
        <Grid container spacing={ 5 } sx={{ mt: 5 }}>
        <Grid item xs={ 12 } md={12} lg={12}textAlign='end'>
                <Button variant='contained' component={RouLink}  to='/membershi'>
                 Continuar
                </Button>
            </Grid>
        </Grid>        
    </PolizasLayout>
  )
}
