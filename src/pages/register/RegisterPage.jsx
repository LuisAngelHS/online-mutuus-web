import { useState, useEffect  } from 'react';
import { Grid, Alert } from '@mui/material';
import {CssTextField} from "../../components/TextFieldContent"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import { MenuLayout } from "../../layout/MenuLayout"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore, useForm } from '../../hooks';
import { ProgressCircular } from '../../components/ProgressCircular';
import Swal from 'sweetalert2';


const RegisterForm = {
  first_name:'',
  last_name:'',
  middle_name: '',
  email:'',
  password: '',
  password2:'',
  phone_number:''
}

let EmaExpres =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/;
const letrasRegex = /^[A-Za-z]+$/
const formValidations ={
  first_name:[(value)=> value.length >=1 && letrasRegex.test(value) , 'El nombre es obligatorio.'],
  last_name:[(value)=> value.length >=1 && letrasRegex.test(value), 'El apellido es obligatorio.'],
  middle_name:[(value)=> value.length >=1 && letrasRegex.test(value), 'El apellido es obligatorio.'],
  email:[(value)=> EmaExpres.test(value), 'El correo es obligatorio.'],
  password:[(value)=> regex.test(value), 'La contraseña requiere al menos una letra mayúscula, una letra minúscula y un número.'],
  password2:[(value)=> value.length >=1, 'Confirmar la contraseña es obligatoria.'],
  phone_number:[(value)=> value.length >=1, 'El celular es obligatorio.'],
}

export const RegisterPage = () => {

  let contraseniaEfect = '';
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Permite solo caracteres numéricos
  };

  const handleInputChange  = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, ''); // Permite solo letras
  };

  const history = useNavigate();
  
  const {startRegister, status, errorMessage} = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState,first_name, last_name, middle_name,email, password, password2, phone_number, onInputChange,
    isFormValid, first_nameValid, last_nameValid,middle_nameValid, emailValid, passwordValid, password2Valid, phone_numberValid} = useForm(RegisterForm, formValidations)
  const onSubmit = (event) =>{
    event.preventDefault();
    if(formState.password !== formState.password2) {
      contraseniaEfect = 'La Contraseña no son iguales'
      console.log(contraseniaEfect);
    } 
    setFormSubmitted(true);
    const {first_name,
    last_name,
    email,
    password,
    phone_number} = formState;
    const result = {
      'customer': {
        first_name:first_name,
        last_name:last_name,
        middle_name: middle_name,
        email:email,
        password: password,
        phone_number:phone_number
      }
    }
    if ( password !== password2 ) {
      Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
      return;
  } else if(!isFormValid ) return;
 
    startRegister(result).then(succ=>{
      console.log(succ);
    })
   
  }
  useEffect(() => {
    if ( status === 'authenticated' ) {
      history('/code');
    }    
  }, [status])

  return (
    <MenuLayout title="Ingresa tus datos">
        <form onSubmit={onSubmit}>
          <Grid container spacing={ 2 } alignItems='center' justifyContent='center'>
            <Grid item xs={ 12 } md={9} lg={4}>
            <label htmlFor="Nombre">Nombres</label>
              <CssTextField
                placeholder='Ingresa tus nombres aquí' 
                fullWidth
                name='first_name'
                value={first_name}
                onChange={onInputChange}
                inputProps={{  inputMode: 'Text' }}
                onInput={handleInputChange}
                error={!!first_nameValid && formSubmitted}
                helperText={ formSubmitted ? first_nameValid : ''}
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={4}>
            <label htmlFor="apellidos">Apellido Paterno</label>
              <CssTextField
                placeholder='Ingresa tus apellidos aquí' 
                fullWidth
                name='last_name'
                value={last_name}
                onChange={onInputChange}
                inputProps={{  inputMode: 'Text' }}
                onInput={handleInputChange}
                error={!!last_nameValid && formSubmitted}
                helperText={ formSubmitted ? last_nameValid : ''}
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book'} }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={4}>
            <label htmlFor="apellidos">Apellido Materno</label>
              <CssTextField
                placeholder='Ingresa tus apellidos aquí' 
                fullWidth
                name='middle_name'
                value={middle_name}
                onChange={onInputChange}
                inputProps={{  inputMode: 'Text' }}
                onInput={handleInputChange}
                error={!!middle_nameValid && formSubmitted}
                helperText={ formSubmitted ? middle_nameValid : ''}
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={12} className='format-in'>
            <label htmlFor="Email">Email</label>
              <CssTextField 
                type="email" 
                placeholder='Ingresa tu correo electrónico aquí' 
                fullWidth
                size="small"
                name='email'
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={formSubmitted ? emailValid : ''}
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid  item xs={ 12 } md={9} lg={12}>
            <label htmlFor="celular">Teléfono o celular</label>
              <CssTextField 
                placeholder='Ingresa tu número de celular o teléfono' 
                fullWidth
                size="small"
                name='phone_number'
                value={phone_number}
                onChange={onInputChange}
                error={!!phone_numberValid && formSubmitted}
                helperText={formSubmitted ? phone_numberValid : ''}
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                inputProps={{ maxLength: 10, inputMode: 'numeric' }}
                onInput={handleInput}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={12}>
            <label htmlFor="Contraseña">Contraseña</label>
            <CssTextField
                type="password" 
                placeholder='Ingresa una contraseña aquí' 
                fullWidth
                size="small"
                name='password'
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                inputProps={{ maxLength: 8 }}
                helperText={formSubmitted ? passwordValid : ''}
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={12}>
            <label htmlFor="Contraseña">Confirmar Contraseña</label>
            <CssTextField
                type="password" 
                placeholder='Ingresa una contraseña aquí' 
                fullWidth
                size="small"
                name='password2'
                value={password2}
                inputProps={{ maxLength: 8 }}
                onChange={onInputChange}
                error={!!password2Valid && formSubmitted}
                helperText={formSubmitted ? password2Valid : ''}
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
              <span></span>
            </Grid>
            <Grid 
              container
              display={ !!errorMessage ? '': 'none' }
              sx={{ mt: 1 }}>
              <Grid 
                  item 
                  xs={ 12 }
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            </Grid>
            <Grid container spacing={3  } sx={{ mb: 0, mt: 3 }}>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <SecundaryButton variant='contained' component={Link} to='/login'>
                  Cancelar
                </SecundaryButton>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <PrimaryButton type='submit' variant='contained'>
                 Crear Cuenta
                </PrimaryButton>
              </Grid>
            </Grid>
            </Grid>
        </form>
    </MenuLayout>
  )
}