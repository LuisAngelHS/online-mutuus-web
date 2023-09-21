import { Button, Grid,TextField, Link } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import { Link as RouLink} from "react-router-dom"

export const LoginPage = () => {
  return (
    <MenuLayout title="Contratación en línea">
        <form>
          <Grid container > 
            <Grid container spacing={ 3 }  sx={{ mb: 2, mt: 2 }} justifyContent='center' alignItems='center'>
            <Grid  item xs={ 12 } md={4} lg={3}>
            <label htmlFor="Correo">Correo electrónico: *</label>
            </Grid>
            <Grid item xs={ 12 } md={7} lg={5}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                size="small"
              />
            </Grid>
            </Grid>
            
            <Grid container spacing={ 3 } justifyContent='center' alignItems='center'>
            <Grid  item xs={ 12 } md={4} lg={3}>
            <label htmlFor="contraseña">Contraseña: *</label>
            </Grid>
            <Grid item xs={ 12 } md={7} lg={5}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                size="small"
              />
            </Grid>
            </Grid>

            <Grid container spacing={ 4 } sx={{ mb: 2, mt: 5 }} justifyContent='center' alignItems='center'>
            <Grid  item xs={ 12 } md={5} lg={3} >
            <Link sx={{ mt: 1 }} component={RouLink} to='/password'>Olvide mi contraseña.</Link>
            </Grid>
              <Grid item xs={ 12 } md={ 7 } lg={5} textAlign='end'>
                <Button variant='contained' component={RouLink} to='/register'>
                 Continuar
                </Button>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}
