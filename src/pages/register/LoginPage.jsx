import { Grid,Link } from '@mui/material';
import { useState, useEffect } from 'react';
import { MenuLayout } from "../../layout/MenuLayout"
import {LoginButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"
import { Link as RouLink, useNavigate  } from "react-router-dom"
import Radio from '@mui/material/Radio';
import { useAuthStore, useForm } from '../../hooks';
import { ProgressCircular } from '../../components/ProgressCircular';

const LoginForm = {
    email:'',
    password: ''
}

let EmaExpres =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const formValidations ={
  email:[(value)=> EmaExpres.test(value), 'El correo es obligatorio.'],
  password:[(value)=> value.length >=6, 'La contraseña es obligatoria.'],
}

export const LoginPage = () => {
  const { status } = useAuthStore();
  const history = useNavigate();

  const {startLogin} = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {email, password,isFormValid, emailValid,passwordValid,onInputChange} = useForm(LoginForm, formValidations)

  const onSubmit = (event) =>{
    event.preventDefault();
    setFormSubmitted(true);
  
    if ( !isFormValid ) return;
    startLogin({email, password}).then(succ =>{
      console.log(succ);
      if(succ.ok === 'error'){
        history('code');
      }
    })
  }

  // useEffect(() => {
  //   console.log(status);
  //   if ( status === 'checking' ) {
  //    return <ProgressCircular />
  //   }    
  // }, [status])


  return (
    <MenuLayout title="Iniciar Sesión">
       <form onSubmit={onSubmit} className='text-form-acceso'>
       <Grid container justifyContent='center' spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } md={10} lg={10}>
              <LoginButton type='submit' variant='contained' fullWidth >
                Iniciar sesión con google
              </LoginButton>
            </Grid>
          </Grid>
        <Grid container justifyContent='center'>
          <Grid item xs={ 10 } md={10} lg={10} sx={{ mt: 2 }} > 
            <label htmlFor="">Email</label>
            <CssTextField 
              type="email" 
              placeholder='Ingresa tu correo electrónico aquí'
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={ formSubmitted ? emailValid : ''}
              sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          </Grid>
          </Grid>
          <Grid container justifyContent='center'>
          <Grid item xs={ 10 } md={10} lg={10} sx={{ mt: 2 }}>
          <label htmlFor="">Password</label>
          <CssTextField 
              type="password" 
              placeholder='Ingresa tu contraseña aquí' 
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={ formSubmitted ? passwordValid : ''}
              sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
              InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              fullWidth
            />
          </Grid>
          </Grid>
      
          <Grid container  sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
              <Radio
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
              />
                <label style={{  fontSize:15, fontFamily:'Gilam Book', color:'#C0C0C0' }}>Recordarme</label> 
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
              <Link sx={{ mt: 1, fontSize:15, fontFamily:'Gilam Bold', color:'#C0C0C0' }} component={RouLink} to='/password'>Olvide mi contraseña.</Link>
              </Grid>
            </Grid>
            <Grid container  sx={{ mb: 2, mt: 5 }}>
            <Grid item xs={ 12 } sm={ 6 } lg={5} textAlign='center'>
              <LoginButton type='submit' variant='contained'>
                Ingresar
              </LoginButton>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 } lg={7} textAlign='center'>
             <p style={{  fontSize:14, fontFamily:'Gilam Book', color:'#C0C0C0' }}>No tienes una cuenta? <Link sx={{  fontSize:14, fontFamily:'Gilam Bold', color:'#AED43A' }} component={RouLink} to='/register'>Crear Cuenta</Link></p>
             
            </Grid>
            </Grid>
      </form>
    </MenuLayout>
  )
}