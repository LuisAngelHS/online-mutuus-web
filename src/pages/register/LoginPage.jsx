import { Button, Grid,TextField, Link } from '@mui/material';
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

export const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <MenuLayout title="">
       <form>
        <Grid container justifyContent='center'>
          <Grid item xs={12} md={8} lg={7} sx={{ mt: 2 }} > 
            <CssTextField 
              label="Correo" 
              type="email" 
              placeholder='correo@google.com' 
              sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          </Grid>
          </Grid>
          <Grid container justifyContent='center'>
          <Grid item xs={12} md={8} lg={7} sx={{ mt: 2 }}>
          <CssTextField 
              label="Contraseña" 
              type="password" 
              placeholder='correo@google.com' 
              sx={{ input: { color: '#FFF', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#FFF', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          {/* <FormControl variant="outlined" fullWidth>
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
        </FormControl> */}
          </Grid>
          </Grid>
      
          
          <Grid container justifyContent='center' spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={8} lg={7}>
              <Button variant='contained' sx={{ backgroundColor:'#AED43A', color:'#fff' }} fullWidth component={RouLink} to='/register'>
                Continuar
              </Button>
            </Grid>
            {/* <Grid item xs={ 12 } sm={ 6 }>
            <Button sx={{ fontFamily:'Gilam Regular' }} variant='contained' component={RouLink} to='/register'>
                 Continuar
                </Button>
            </Grid> */}
          </Grid>

          <Grid container justifyContent='center'>
          <Grid item xs={12} md={8} lg={7} justifyContent='center'>
          <Link sx={{ mt: 1, fontSize:15, fontFamily:'Gilam Book', color:'#AED43A' }} component={RouLink} to='/password'>Olvide mi contraseña.</Link>
          </Grid>
          </Grid>
          

       


      </form>
    </MenuLayout>
  )
}
