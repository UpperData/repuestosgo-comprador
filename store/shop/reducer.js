import { actionTypes } from './action';
import { HYDRATE } from "next-redux-wrapper";

export const initState = {
    cart: [],
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_SHOP_CART:
            return {
                ...state,
                cart: action.payload
            };
        case HYDRATE:
            return {
                ...state,
                ...action.payload.shop,
            };
        default:
            return state;
    }
}

export default reducer;
