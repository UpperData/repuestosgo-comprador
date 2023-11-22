import { combineReducers } from 'redux';
import setting from './setting/reducer';
import app from './app/reducer';
import ecomerce from './ecomerce/reducer';
import session from './session/reducer';
import shop from './shop/reducer';

export default combineReducers({
    setting,
    app,
    ecomerce,
    session,
    shop
});
