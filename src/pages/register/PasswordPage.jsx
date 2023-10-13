import { Grid } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"
import { Link as RouLink} from "react-router-dom"

export const PasswordPage = () => {
  return (
    <MenuLayout title="Cambio de contraseña">
        <form>
          <Grid container > 
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            <Grid item xs={ 12 } md={7} lg={7}>
            <CssTextField 
              label="Contraseña" 
              type="password" 
              placeholder='correo@google.com' 
              sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              fullWidth
            />
            </Grid>
            </Grid>
            
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            <Grid item xs={ 12 } md={7} lg={7}>
            <CssTextField 
              label="Confirmar Contraseña" 
              type="password" 
              placeholder='correo@google.com' 
              sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              fullWidth
            />
            </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 2, mt: 3}} justifyContent='center'>
            <Grid  item xs={ 12 } sm={ 5 } textAlign='center'>
            <SecundaryButton variant='contained' component={RouLink} to='/login'>
                 Cancelar
                </SecundaryButton>
            </Grid>
              <Grid item xs={ 12 } sm={ 5 } textAlign='center'>
                <PrimaryButton variant='contained' component={RouLink} to='/register'>
                 Continuar
                </PrimaryButton>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}
