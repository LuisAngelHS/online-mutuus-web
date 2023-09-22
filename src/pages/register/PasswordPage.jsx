import { Button, Grid,TextField } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import { Link as RouLink} from "react-router-dom"

export const PasswordPage = () => {
  return (
    <MenuLayout title="Cambio de contraseña">
        <form>
          <Grid container > 
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            <Grid  item xs={ 12 } md={4} lg={4}>
            <label htmlFor="Contraseña">Contraseña: *</label>
            </Grid>
            <Grid item xs={ 12 } md={8} lg={6}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                size="small"
              />
            </Grid>
            </Grid>
            
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            <Grid  item xs={ 12 } md={4} lg={4}>
            <label htmlFor="contraseña">Confirmar contraseña: *</label>
            </Grid>
            <Grid item xs={ 12 } md={8} lg={6}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                size="small"
              />
            </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 2, mt: 3}} justifyContent='center'>
            <Grid  item xs={ 12 } sm={ 6 } textAlign='center'>
            <Button sx={{ backgroundColor: 'secondary.main', fontFamily:'Gilam Regular'  }} variant='contained' component={RouLink} to='/login'>
                 Cancelar
                </Button>
            </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button sx={{fontFamily:'Gilam Regular' }} variant='contained' component={RouLink} to='/register'>
                 Continuar
                </Button>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}
