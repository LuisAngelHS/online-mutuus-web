import { Button, Grid,TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { MenuLayout } from "../../layout/MenuLayout"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <MenuLayout title="Contratación en línea">
        <form>
          <Grid container spacing={ 3 } >
            <Grid  item xs={ 12 } md={3} lg={3} sx={{ alignItems: 'center' }}>
            <label htmlFor="Nombre">Nombre completo: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={9}>
              <TextField
              label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}  sx={{ mb: 2, mt: 1 }}>
            <label htmlFor="Correo">Correo electrónico: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={9}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Contraseña">Contraseña: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={9}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Contraseña">Confirmar Contraseña: </label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={9}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="celular">Número celular: * </label>
            </Grid>
            <Grid  item xs={ 12 } md={9} lg={9}>
              <TextField 
                label="Número celular" 
                type="number" 
                placeholder='5556968596' 
                fullWidth
              />
            </Grid>
            <Grid container spacing={ 5 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button variant='contained' >
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button variant='contained' LinkComponent={Link} to='/code'>
                 Continuar
                </Button>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}
