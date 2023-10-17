import { useDispatch, useSelector } from "react-redux"
import API from "../api/globalAPI";
import { checkingCredentials, login, logout } from "../store";

export const useAuthStore = () =>{

    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const startLogin = async({email, password}) =>{
        console.log({email, password});
        dispatch(checkingCredentials());
        try{
            const {data} = await API.post('/login', {email, password})
            dispatch(login({name: data.message, uid: data.name}))
            console.log(data);
        } catch(error){
            console.log(error);
            dispatch(logout('credenciales incorrectas.'))
        }


    }

    const startRegister = async(succ ) =>{
        dispatch(checkingCredentials());
        try{
            const {data} = await API.post('/registration', succ,
            {
                headers:{
                    'x-hasura-admin-secret': 'EEF66E22-320D-4617-B33C-DAD4A55C84B6'
                }
            })
            console.log(data);
            dispatch(login({uid: data.register_step_1}))
        } catch(error){
            dispatch(logout('credenciales incorrectas.'))
        }


    }

    return {
        //* Propiedades...
        status,
        user, 
        errorMessage,


        //* Métodos.....
        startLogin,
        startRegister,
    }

}