import { Button, Grid,TextField, Link } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import { Link as RouLink} from "react-router-dom"

export const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <MenuLayout title="Contratación en línea">
       <form>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder='correo@google.com' 
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
          <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>




            {/* <TextField 
              label="Contraseña" 
              type="password" 
              placeholder='Contraseña' 
              fullWidth
            /> */}
          </Grid>
          
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 12 }>
              <Button variant='contained' fullWidth component={RouLink} to='/register'>
                Continuar
              </Button>
            </Grid>
            {/* <Grid item xs={ 12 } sm={ 6 }>
            <Button sx={{ fontFamily:'Gilam Regular' }} variant='contained' component={RouLink} to='/register'>
                 Continuar
                </Button>
            </Grid> */}
          </Grid>


          <Grid container direction='row' justifyContent='end'>
          <Link sx={{ mt: 1, fontSize:15, fontFamily:'Gilam Book' }} component={RouLink} to='/password'>Olvide mi contraseña.</Link>
          </Grid>

        </Grid>


      </form>
    </MenuLayout>
  )
}
