import { actionTypes } from './action';

export const initState = {
    isShowDemoPanel: false,
    categories: [],
    menu:       [],
    loading: true,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SWITCH_DEMO_PANEL_SUCCESS:
            return {
                ...state,
                ...{ isShowDemoPanel: action.payload },
            };
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                ...{ categories: action.payload },
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                ...{ menu: action.payload },
            };
        case actionTypes.APP_LOADED:
            return {
                ...state,
                ...{ loading: action.payload },
            };
        default:
            return state;
    }
}

export default reducer;
