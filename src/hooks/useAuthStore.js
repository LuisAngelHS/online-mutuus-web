import { useDispatch, useSelector } from "react-redux"
import API from "../api/globalAPI";
import { checkingCredentials, login, logout, codeOuth, codeError, alturas, pesos, informacion } from "../store";
import { Code } from "@mui/icons-material";

export const useAuthStore = () =>{

    const {status, user, errorMessage, code, altura, peso, information} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const startLogin = async({email, password}) =>{
        console.log({email, password});
        dispatch(checkingCredentials());
        try{
            const {data} = await API.post('/customer/login', {email, password})
            dispatch(login({name: data.message, uid: data.name}))
            console.log(data);
        } catch(error){
            console.log(error);
            dispatch(logout('Implementacion pendiente.'))
            return {
                ok: 'error',
                message: error.message,
            }
          
        }


    }

    const startRegister = async(succ ) =>{
        dispatch(checkingCredentials());
        try{
            const {data, status} = await API.post('/customer/registration', succ,
            {
                headers:{
                    'x-hasura-admin-secret': 'EEF66E22-320D-4617-B33C-DAD4A55C84B6'
                }
            })
            console.log(status);
            dispatch(login({uid: data.register_step_1.customer_id}))
            return {
                ok: 'exito',
                message: data.register_step_1.customer_id,
            }
        } catch(error){
            console.log(error);
            dispatch(logout('Ha ocurrido un error.'))
        }


    }
    const startCode = async(succ ) =>{
        console.log(succ);
        // dispatch(checkingCredentials());
        try{
            const {data} = await API.post('/customer/validation', succ,
            {
                headers:{
                    'x-hasura-admin-secret': 'EEF66E22-320D-4617-B33C-DAD4A55C84B6'
                }
            })
            getInformation(data.validation.access_token);
            WeightList(data.validation.access_token)
            HeightList(data.validation.access_token)
            dispatch(codeOuth({token: data.validation.access_token}))
        } catch(error){
            dispatch(codeError('Código incorrector favor de Verificar.'))
        }
    }

    const getInformation = async(succ ) =>{
        console.log(succ);
        // dispatch(checkingCredentials());
        try{
            const {data} = await API.get('/customer/information',
            {
                headers:{
                    Authorization: `Bearer ${succ}`
                }
            })
            let info = data.customer[0].person_info.first_name+' '+ data.customer[0].person_info.last_name+' '+data.customer[0].person_info.middle_name;
            console.log(data);
            dispatch(informacion({information: info}))
        } catch(error){
            console.log(error);
            // dispatch(codeError('Código incorrector favor de Verificar.'))
        }


    }

    const WeightList = async(succ ) =>{
        console.log(succ);
        // dispatch(checkingCredentials());
        try{
            const {data} = await API.get('/weight',
            {
                headers:{
                    Authorization: `Bearer ${succ}`
                }
            })
            console.log(data);
            dispatch(pesos({pesos: data.wight}))
        } catch(error){
            console.log(error);
            // dispatch(codeError('Código incorrector favor de Verificar.'))
        }


    }

    const HeightList = async(succ ) =>{
        console.log(succ);
        // dispatch(checkingCredentials());
        try{
            const {data} = await API.get('/height',
            {
                headers:{
                    Authorization: `Bearer ${succ}`
                }
            })
            console.log(data);
            dispatch(alturas({altura: data.height}))
        } catch(error){
            console.log(error);
            // dispatch(codeError('Código incorrector favor de Verificar.'))
        }


    }

    const registrationInfo = async(succ ) =>{
        try{
            const {data} = await API.put('/customer/registration-info/'+user.uid,succ,
            {
                headers:{
                    'x-hasura-admin-secret': 'EEF66E22-320D-4617-B33C-DAD4A55C84B6',
                    Authorization: `Bearer ${code.token}`
                }
            })
            dispatch(alturas({informacionPersonal: data}))
            return {
                ok:true,
                respuesta: data
            }
        } catch(error){
            console.log(error);
            return {
                ok:false,
                respuesta: ''
            }
            // dispatch(codeError('Código incorrector favor de Verificar.'))
        }


    }



    return {
        //* Propiedades...
        status,
        user, 
        errorMessage,
        code,
        altura,
        peso,
        information,


        //* Métodos.....
        startLogin,
        startRegister,
        startCode,
        WeightList,
        HeightList,
        registrationInfo,

    }

}