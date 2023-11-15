import React, { useState, createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import axios from '../services/fetch'
import cookie from 'js-cookie'
import { login, logout } from "~/store/session/action";

const AuthContext  = React.createContext(null);

const AuthProvider = ({ children }) => {
    
    const dispatch          = useDispatch();
    const session           = useSelector(state => state.session);

    const getAuth = () => {
        /*
            const auth              = session.auth;
            return auth;
        */
    }

    const setUser = async (token, user) => {

        console.log(token);
        cookie.set('usertoken', token);
    
        //console.log('datauser', user);
        //const me = await axios.get(`/auth/me`);

        await dispatch(login(user));
    }

    const updateUser = async () => {
        /*
        const me = await axios.get(`/auth/me`);
        await dispatch(setAuth(me.data));
        */
    }

    const handleLogout = async () => {
        cookie.remove('wtoken');
        await dispatch(logout());
        
        /*
            removeToken();
        */
    }

    return (
        // Using the provider so that ANY component in our application can 
        // use the values that we are sending.

        <AuthContext.Provider 
            value={{ auth: getAuth(), setUser, handleLogout, updateUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);