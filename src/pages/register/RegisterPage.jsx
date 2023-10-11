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
import { styled } from '@mui/material/styles';
import { MenuLayout } from "../../layout/MenuLayout"
import { Link } from "react-router-dom"

const CssTextField = styled(TextField)({
  //Cuando el input tenga el focus.....
  '& label.Mui-focused': {
    color: '#AED43A',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#183B91',
  },

  //Color inicial del border del input....
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFF',
      borderRadius: 15,
    },
    
  //Color del borde al pasar el mouse por encima...  
    '&:hover fieldset': {
      borderColor: '#AED43A',
    },

  //Color del borde al hacer click en el input...  
    '&.Mui-focused fieldset': {
      borderColor: '#AED43A',
    },

    // '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
    //   color: 'white'
    // },
  },
});

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
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
            <Grid item xs={ 12 } md={9} lg={7} className='format-in'>
              <CssTextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                size="small"
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
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
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              />
            {/* <FormControl variant="outlined" size="small" fullWidth>
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
        </FormControl> */}
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
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              />
            {/* <FormControl variant="outlined" size="small" fullWidth>
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
        </FormControl> */}
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
                sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
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
