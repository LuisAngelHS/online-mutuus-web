import { Grid } from '@mui/material';
import {CssTextField} from "../../components/TextFieldContent"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import { MenuLayout } from "../../layout/MenuLayout"
import { Link } from "react-router-dom"
import { useAuthStore, useForm } from '../../hooks';
import { useState } from 'react';

const RegisterForm = {
  first_name:'',
  last_name:'',
  // middle_name: '',
  email:'',
  password: '',
  password2:'',
  phone_number:''
}

const formValidations ={
  first_name:[(value)=> value.length >=1, 'El nombre es obligatorio.'],
  last_name:[(value)=> value.length >=1, 'El apellido es obligatorio.'],
  // middle_name:[(value)=> value.length >=1, 'El apellido es obligatorio.'],
  email:[(value)=> value.includes('@'), 'El correo es obligatorio.'],
  password:[(value)=> value.length >=6, 'La contraseña es obligatoria.'],
  password2:[(value)=> value.length >=6, 'Confirmar la contraseña es obligatoria.'],
  phone_number:[(value)=> value.length >=1, 'El celular es obligatorio.'],
}

export const RegisterPage = () => {
  
  
  const {startRegister} = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState,first_name, last_name,email, password, password2, phone_number, onInputChange,
    isFormValid, first_nameValid, last_nameValid, emailValid, passwordValid, password2Valid, phone_numberValid} = useForm(RegisterForm, formValidations)
  const onSubmit = (event) =>{
    console.log(event);
    event.preventDefault();
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
        middle_name: 'middle_name',
        email:email,
        password: password,
        phone_number:phone_number
      }
    }
    if ( !isFormValid ) return;
    startRegister(result);
   
  }

  return (
    <MenuLayout title="Ingresa tus datos">
        <form onSubmit={onSubmit}>
          <Grid container spacing={ 2 } alignItems='center' justifyContent='center'>
            <Grid item xs={ 12 } md={9} lg={5}>
            <label htmlFor="Nombre">Nombres</label>
              <CssTextField
                type="text" 
                placeholder='Ingresa tus nombres aquí' 
                fullWidth
                name='first_name'
                value={first_name}
                onChange={onInputChange}
                error={!!first_nameValid && formSubmitted}
                helperText={ formSubmitted ? first_nameValid : ''}
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={6}>
            <label htmlFor="apellidos">Apellidos</label>
              <CssTextField
                type="text" 
                placeholder='Ingresa tus apellidos aquí' 
                fullWidth
                name='last_name'
                value={last_name}
                onChange={onInputChange}
                error={!!last_nameValid && formSubmitted}
                helperText={ formSubmitted ? last_nameValid : ''}
                size="small"
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={11} className='format-in'>
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
            <Grid  item xs={ 12 } md={9} lg={11}>
            <label htmlFor="celular">Teléfono o celular</label>
              <CssTextField 
                type="number" 
                placeholder='Ingresa tu número de celular o teléfono' 
                fullWidth
                size="small"
                name='phone_number'
                value={phone_number}
                onChange={onInputChange}
                error={!!phone_numberValid && formSubmitted}
                helperText={formSubmitted ? phone_numberValid : ''}
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={11}>
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
                helperText={formSubmitted ? passwordValid : ''}
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
            </Grid>
            <Grid item xs={ 12 } md={9} lg={11}>
            <label htmlFor="Contraseña">Confirmar Contraseña</label>
            <CssTextField
                type="password" 
                placeholder='Ingresa una contraseña aquí' 
                fullWidth
                size="small"
                name='password2'
                value={password2}
                onChange={onInputChange}
                error={!!password2Valid && formSubmitted}
                helperText={formSubmitted ? password2Valid : ''}
                sx={{ input: { color: '#183B91', fontFamily:'Gilam Book' } }}
                InputLabelProps={{style:{color: '#183B91', fontFamily:'Gilam Book'}}}
              />
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
