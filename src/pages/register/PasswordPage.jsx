import { Button, Grid, TextField } from '@mui/material';
import { MenuLayout } from "../../layout/MenuLayout"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Link as RouLink} from "react-router-dom"

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

export const PasswordPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <MenuLayout title="">
        <form>
          <Grid container > 
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            {/* <Grid  item xs={ 12 } md={4} lg={4}>
            <label htmlFor="Contraseña">Contraseña: *</label>
            </Grid> */}
            <Grid item xs={ 12 } md={7} lg={7}>
            <CssTextField 
              label="Contraseña" 
              type="password" 
              placeholder='correo@google.com' 
              sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              fullWidth
            />
            {/* <FormControl variant="outlined" fullWidth InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}>
          <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
          <OutlinedInput
          sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
          
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
            </Grid>
            
            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 0}} justifyContent='center' alignItems='center'>
            {/* <Grid  item xs={ 12 } md={4} lg={4}>
            <label htmlFor="contraseña">Confirmar contraseña: *</label>
            </Grid> */}
            <Grid item xs={ 12 } md={7} lg={7}>
            <CssTextField 
              label="Confirmar Contraseña" 
              type="password" 
              placeholder='correo@google.com' 
              sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              fullWidth
            />
            {/* <FormControl variant="outlined" fullWidth>
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
            </Grid>

            <Grid container spacing={3} sx={{ mb: 2, mt: 3}} justifyContent='center'>
            <Grid  item xs={ 12 } sm={ 5 } textAlign='center'>
            <Button sx={{ backgroundColor: 'secondary.main', fontFamily:'Gilam Regular'  }} variant='contained' component={RouLink} to='/login'>
                 Cancelar
                </Button>
            </Grid>
              <Grid item xs={ 12 } sm={ 5 } textAlign='center'>
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
