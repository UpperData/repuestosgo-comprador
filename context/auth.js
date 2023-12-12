import React, { useState, createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import axios, { addToken, removeToken } from '../services/fetch'
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
        addToken(token);
        const me = await axios.get(`/accoUNT/pROfiLE`);
        console.log('datauser', me.data);
        await dispatch(login(me.data.data));
    }

    const updateUser = async () => {
        /*
        const me = await axios.get(`/auth/me`);
        await dispatch(setAuth(me.data));
        */
    }

    const handleLogout = async () => {
        cookie.remove('wtoken');
        removeToken();
        await dispatch(logout());
    }

    return (
        // Using the provider so that ANY component in our application can 
        // use the values that we are sending.

        <AuthContext.Provider 
            value={{ auth: getAuth(), setUser, handleLogout, updateUser, session }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);