import { Button, Grid } from '@mui/material';
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

export const PasswordPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <MenuLayout title="Cambio de contraseña">
        <form>
          <Grid container > 
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            {/* <Grid  item xs={ 12 } md={4} lg={4}>
            <label htmlFor="Contraseña">Contraseña: *</label>
            </Grid> */}
            <Grid item xs={ 12 } md={12} lg={12}>
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
            label="Contraseña"
          />
        </FormControl>
            </Grid>
            </Grid>
            
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            {/* <Grid  item xs={ 12 } md={4} lg={4}>
            <label htmlFor="contraseña">Confirmar contraseña: *</label>
            </Grid> */}
            <Grid item xs={ 12 } md={12} lg={12}>
            <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Confirmar Contraseña</InputLabel>
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
            label="Confirmar Contraseña"
          />
        </FormControl>
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
