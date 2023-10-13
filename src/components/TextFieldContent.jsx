import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CssTextField = styled(TextField)({
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
        borderColor: '#183B91',
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