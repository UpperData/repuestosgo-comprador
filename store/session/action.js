export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};

export function logout() {
    return { 
        type: actionTypes.LOGOUT,
        payload: null
    };
}

export function login(payload) {
    return { 
        type: actionTypes.LOGIN,
        payload: payload
    };
}

