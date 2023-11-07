import axios from '../services/fetch';
import { appLoaded, setCategories, setMenu } from "~/store/app/action";
import { getMenu, getProductCategories } from '~/services/request/products';

export const loadInitialData = async (state, dispatch) => {
    // console.log(state);
    if(state.app.categories.length === 0){
        const res = await axios.get(getProductCategories());
        if(res.data.result){
            const data = res.data.data;
            await dispatch(setCategories(data));
        }
    }

    if(state.app.menu.length === 0){
        const res = await axios.get(getMenu());
        if(res.data.result){
            console.log('MENU', res.data);
            const data = res.data.data;
            await dispatch(setMenu(data));
        }
    }-

    await dispatch(appLoaded());
}