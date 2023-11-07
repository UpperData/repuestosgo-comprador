export const actionTypes = {
    SWITCH_DEMO_PANEL: 'SWITCH_DEMO_PANEL',
    SWITCH_DEMO_PANEL_SUCCESS: 'SWITCH_DEMO_PANEL_SUCCESS',
    SET_CATEGORIES: 'SET_CATEGORIES',
    APP_LOADED: 'APP_LOADED',
    SET_MENU: 'SET_MENU'
};

export function switchDemoPanel(payload) {
    return { type: actionTypes.SWITCH_DEMO_PANEL, payload };
}

export function switchDemoPanelSuccess(payload) {
    return { type: actionTypes.SWITCH_DEMO_PANEL_SUCCESS, payload };
}

export function appLoaded() {
    return { type: actionTypes.APP_LOADED, payload: false };
}

export const setMenu = (payload) => {
    return { 
        type: actionTypes.SET_MENU, 
        payload: payload
    };
}

export const setCategories = (payload) => {
    return { 
        type: actionTypes.SET_CATEGORIES, 
        payload: payload
    };
}
