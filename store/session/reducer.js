import { actionTypes } from './action';
import { HYDRATE } from "next-redux-wrapper";

export const initState = {
    auth: false,
    user: null,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGOUT:
            return {
                ...state,
                auth: false,
                user: null,
            };
        case actionTypes.LOGIN:
            return {
                ...state,
                auth: true,
                user: action.payload,
            };
        case HYDRATE:
            return {
                ...state,
                ...action.payload.session,
            };
        default:
            return state;
    }
}

export default reducer;
