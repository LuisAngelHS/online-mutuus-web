import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginButton = styled(Button)({
    textTransform: 'none',
    fontSize: 20,
    lineHeight: 1.5,
    backgroundColor: '#AED43A',
    color: '#fff',
    fontFamily: 'Gilam Bold',
    borderRadius:15,
    '&:hover': {
      backgroundColor: '#183B91',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#AED43A'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  export const PrimaryButton = styled(Button)({
    textTransform: 'none',
    fontSize: 20,
    lineHeight: 1.5,
    backgroundColor: '#183B91',
    color: '#fff',
    fontFamily: 'Gilam Bold',
    borderRadius:15,
    '&:hover': {
      backgroundColor: '#444343',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#fff'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  export const SecundaryButton = styled(Button)({
    textTransform: 'none',
    fontSize: 20,
    lineHeight: 1.5,
    backgroundColor: '#AED43A',
    color: '#fff',
    fontFamily: 'Gilam Bold',
    borderRadius:15,
    '&:hover': {
      backgroundColor: '#444343',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#fff'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });