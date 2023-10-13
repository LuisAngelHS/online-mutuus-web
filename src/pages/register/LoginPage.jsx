import { Grid,Link } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import {LoginButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"
import { Link as RouLink} from "react-router-dom"

export const LoginPage = () => {
  return (
    <MenuLayout title="Contratación en línea">
       <form>
        <Grid container justifyContent='center'>
          <Grid item xs={ 12 } md={7} lg={7} sx={{ mt: 2 }} > 
            <CssTextField 
              label="Correo" 
              type="email" 
              placeholder='correo@google.com' 
              sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          </Grid>
          </Grid>
          <Grid container justifyContent='center'>
          <Grid item xs={ 12 } md={7} lg={7} sx={{ mt: 2 }}>
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
      
          
          <Grid container justifyContent='center' spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } md={7} lg={7}>
              <LoginButton variant='contained' fullWidth component={RouLink} to='/register'>
                Continuar
              </LoginButton>
            </Grid>
          </Grid>

          <Grid container justifyContent='center'>
          <Grid item xs={ 12 } md={7} lg={7} justifyContent='center'>
          <Link sx={{ mt: 1, fontSize:15, fontFamily:'Gilam Book', color:'#AED43A' }} component={RouLink} to='/password'>Olvide mi contraseña.</Link>
          </Grid>
          </Grid>
      </form>
    </MenuLayout>
  )
}
