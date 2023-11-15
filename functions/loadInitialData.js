import axios, { addToken, removeToken } from '../services/fetch';
import {verify} from 'jsonwebtoken'
import { appLoaded, setCategories, setMenu } from "~/store/app/action";
import { getMenu, getProductCategories } from '~/services/request/products';
import { login, logout } from '~/store/session/action';

export const getCookieFromReq = (req, cookieKey) => {
    const cookie = decodeURIComponent(req.headers.cookie)
      .split(";")
      .find((c) => c.trim().startsWith(`${cookieKey}=`));

    if (!cookie) return undefined;
    return cookie.split("=")[1];
};

export const loadInitialData = async (store, req) => {

    const state = store.getState();
    const token = getCookieFromReq(req, 'usertoken');

    console.log('loadInitialData');
    console.log('usertoken ==', token);

    if(token && token !== ""){
        try {
            var decoded = verify(token, process.env.JWT_SECRET);
            console.log('data token', decoded);
            await addToken(token);
            
            const me = await axios.get(`/accoUNT/pROfiLE`);
            console.log('datauser', me.data);
            await store.dispatch(login(me.data.data));
        } catch(err) {

            await removeToken();
            await store.dispatch(logout());
            console.log('token no valido');

        }
    }

    // console.log(state);
    if(state.app.categories.length === 0){
        const res = await axios.get(getProductCategories());
        if(res.data.result){
            const data = res.data.data;
            await store.dispatch(setCategories(data));
        }
    }

    if(state.app.menu.length === 0){
        // console.log('load menu');
        const res = await axios.get(getMenu());
        // console.log(res.data);
        if(res.data.result){
            // console.log('MENU', res.data);
            const data = res.data.data;
            await store.dispatch(setMenu(data));
        }
    }

    await store.dispatch(appLoaded());
}