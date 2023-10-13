import { Grid } from '@mui/material';
import {CssTextField} from "../../components/TextFieldContent"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import { MenuLayout } from "../../layout/MenuLayout"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <MenuLayout title="Contratación en línea">
        <form>
          <Grid container spacing={ 3 } alignItems='center' justifyContent='center'>
            <Grid  item xs={ 12 } md={3} lg={3} justifyContent='center'>
            <label htmlFor="Nombre">Nombre: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={7}>
              <CssTextField
              label="Nombre" 
                type="text" 
                placeholder='Nombre' 
                fullWidth
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Correo">Correo electrónico: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={7} className='format-in'>
              <CssTextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Contraseña">Contraseña: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={7}>
            <CssTextField
              label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Contraseña">Confirmar Contraseña: </label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={7}>
            <CssTextField
              label="Confirmar Contraseña" 
                type="password" 
                placeholder='Confirmar Contraseña' 
                fullWidth
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="celular">Número celular: * </label>
            </Grid>
            <Grid  item xs={ 12 } md={9} lg={7}>
              <CssTextField 
                label="Número celular" 
                type="number" 
                placeholder='5556968596' 
                fullWidth
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid container spacing={ 5 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <SecundaryButton variant='contained' component={Link} to='/login'>
                  Cancelar
                </SecundaryButton>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <PrimaryButton  variant='contained' component={Link} to='/code'>
                 Continuar
                </PrimaryButton>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}
