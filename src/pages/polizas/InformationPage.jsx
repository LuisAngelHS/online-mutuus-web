import { Button, Grid, TextField, Link } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import Checkbox from '@mui/material/Checkbox';
import { Link as RouLink} from "react-router-dom"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const InformationPage = () => {
  return (
    <PolizasLayout >
        <Grid container  spacing={2}>
            <Grid item xs={ 12 } md={12} lg={12}>
            <p>Jose Pedro Gomez, por favor ingresa la siguiente información: </p>
            </Grid>
           
            <Grid className="container-internal_users" item xs={ 12 } md={6} lg={6} sx={{ mt: 5 }}>
            <p>Fecha de Nacimiento: * </p>
            <TextField sx={{ ml: 2 }} type="number"  size="small"/>
            </Grid>
            
            <Grid className="container-internal_users" item xs={ 12 } md={6} lg={6} sx={{ mt: 5 }}>
            <p>RFC: * </p>
            <TextField sx={{ ml: 2 }} type="number"  size="small"/>
            </Grid>

              
            <Grid className="container-internal_users" item xs={ 12 } md={6} lg={6}>
            <p>Peso: * </p>
            <TextField sx={{ ml: 2 }} type="number"  size="small"/>
            </Grid>
              
            <Grid className="container-internal_users" item xs={ 12 } md={6} lg={6}>
            <p>Estatura: * </p>
            <TextField sx={{ ml: 2 }} type="number"  size="small"/>
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
                <Button variant='contained' >
                 Continuar
                </Button>
            </Grid>
        </Grid>        
    </PolizasLayout>
  )
}
