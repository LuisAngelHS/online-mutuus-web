import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        status: 'checking',
        user:{},
        errorMessage: undefined
    },
    reducers:{
        checkingCredentials: (state) =>{
            state.status ='checking',
            state.user= {},
            state.errorMessage= undefined
        },
        login:(state, {payload}) =>{
            state.status ='authenticated',
            state.user= payload,
            state.errorMessage= undefined
        },

        logout:(state, {payload}) =>{
           state.status ='Notauthenticated',
           state.user= {},
           state.errorMessage= payload
        }
    }
})

export const {login, logout, checkingCredentials} = authSlice.actions;