import { actionTypes } from './action';
import { HYDRATE } from "next-redux-wrapper";

export const initialState = {
    currency: {
        symbol: '$',
        text: 'USD',
    },
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENCY_SUCCESS:
            return {
                ...state,
                ...{ currency: action.currency },
            };
        case HYDRATE:
            return {
                ...state,
                ...action.payload.setting,
            };
        default:
            return state;
    }
}

export default reducer;
