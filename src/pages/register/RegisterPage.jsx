import { Button, Grid,TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import { MenuLayout } from "../../layout/MenuLayout"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <MenuLayout title="Contratación en línea">
        <form>
          <Grid container spacing={ 3 } alignItems='center'>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Nombre">Nombre: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={9}>
              <TextField
              label="Nombre" 
                type="text" 
                placeholder='Nombre' 
                fullWidth
                size="small"
              />
            </Grid>
            {/* <Grid item xs={ 12 } md={9} lg={3}>
              <TextField
              label="Apellido Paterno" 
                type="text" 
                placeholder='Apellido Paterno' 
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={3}>
              <TextField
              label="Apellido Materno" 
                type="text" 
                placeholder='Apellido Materno' 
                fullWidth
                size="small"
              />
            </Grid> */}
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Correo">Correo electrónico: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={9} className='format-in'>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                size="small"
              />
            </Grid>
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Contraseña">Contraseña: *</label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={9}>
            <FormControl variant="outlined" size="small" fullWidth>
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
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="Contraseña">Confirmar Contraseña: </label>
            </Grid>
            <Grid item xs={ 12 } md={9} lg={9}>
            <FormControl variant="outlined" size="small" fullWidth>
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
            <Grid  item xs={ 12 } md={3} lg={3}>
            <label htmlFor="celular">Número celular: * </label>
            </Grid>
            <Grid  item xs={ 12 } md={9} lg={9}>
              <TextField 
                label="Número celular" 
                type="number" 
                placeholder='5556968596' 
                fullWidth
                size="small"
              />
            </Grid>
            <Grid container spacing={ 5 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button sx={{ backgroundColor: 'secondary.main', fontFamily:'Gilam Regular'  }} variant='contained' component={Link} to='/login'>
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button  sx={{fontFamily:'Gilam Regular' }} variant='contained' component={Link} to='/code'>
                 Continuar
                </Button>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}
