import { Grid } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import { useNavigate } from "react-router-dom"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"
import { useAuthStore, useForm } from '../../hooks';
import { useState, useEffect } from 'react';

const CodeForm = {
  code1:'',
  code2:'',
  code3:'',
  code4: '',
}
const formValidations ={
  code1:[(value)=> value.length >=1, 'El Código es obligatorio.'],
  code2:[(value)=> value.length >=1, 'El Código es obligatorio.'],
  code3:[(value)=> value.length >=1, 'El Código es obligatorio.'],
  code4:[(value)=> value.length >=1, 'El Código es obligatorio.'],
}

export const CodePage = () => {
  const history = useNavigate();
  const {startCode, user, code, status, errorMessage} = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState,code1, code2,code3, code4, onInputChange,
    isFormValid, code1Valid, code2Valid, code3Valid, code4Valid} = useForm(CodeForm, formValidations)
  const onSubmit = (event) =>{
    console.log(code);
    event.preventDefault();
    setFormSubmitted(true);
    const {code1,
      code2,
      code3,
      code4} = formState;
    const result = {
      'customer_code':{
        code: code1+code2+code3+code4,
        customer_id: user.uid
      }
    } 
    if ( !isFormValid ) return;
    startCode(result);
   
  }

  useEffect(() => {
    if ( status === 'CodeAuth' ) {
      history('/information');
    }   
  }, [status])

  return (
    <PolizasLayout title="Contratación en línea">
      <form onSubmit={onSubmit}>
        <Grid item xs={ 12 } md={6} lg={12} textAlign='center'>
            <p className="text-font-book">Se he enviado un código por SMS a su celular.</p>
            <p className="text-font-book">Por favor capture el código recibido:</p>
        </Grid>
        <Grid container sx={{ mt: 6 }}>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <CssTextField  sx={{ input: { color: '#183B91', fontFamily:'Gilam Book', height:50, width:60  } }}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            name='code1'
            value={code1}
            onChange={onInputChange}
            error={!!code1Valid && formSubmitted}
            helperText={ formSubmitted ? code1Valid : ''}/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}   textAlign='center'>
            <CssTextField sx={{ input: { color: '#183B91', fontFamily:'Gilam Book', height:50, width:60 } }}
             name='code2'
             value={code2}
             onChange={onInputChange}
             error={!!code2Valid && formSubmitted}
             helperText={ formSubmitted ? code2Valid : ''}/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <CssTextField sx={{ input: { color: '#183B91', fontFamily:'Gilam Book', height:50,width:60  } }}
             name='code3'
             value={code3}
             onChange={onInputChange}
             error={!!code3Valid && formSubmitted}
             helperText={ formSubmitted ? code3Valid : ''}/>
            </Grid>
            <Grid  item xs={ 6} md={3} lg={3}   textAlign='center'>
            <CssTextField sx={{ input: { color: '#183B91', fontFamily:'Gilam Book', height:50, width:60 } }}
             name='code4'
             value={code4}
             onChange={onInputChange}
             error={!!code4Valid && formSubmitted}
             helperText={ formSubmitted ? code4Valid : ''}/>
            </Grid>
            <Grid item xs={ 12} md={12} lg={12} sx={{ mt: 3, color: 'error.main' }} textAlign='center' >
            <p className="text-font-book" display={ !!errorMessage ? '': 'none' }>{errorMessage}</p>
            </Grid>
            
        </Grid>
       
        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <SecundaryButton variant='contained' >
                  Reenviar código
                </SecundaryButton>
            </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <PrimaryButton type='submit' variant='contained'>
                 Continuar
                </PrimaryButton>
            </Grid>
        </Grid>
        </form>
    </PolizasLayout>
  )
}
