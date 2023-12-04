import axios from 'axios'
import { API_BASE_URL } from '~/config/appConfig';
import Cookie from "js-cookie"
import https from 'https'

const service = axios.create({
  baseURL: API_BASE_URL,
})

// Response interceptor for API calls
service.interceptors.response.use((response) => {
	return response.data
}, async function (error) {
/*
	const originalRequest = error.config;
	if (error.response.status === 403 && !originalRequest._retry) {
		originalRequest._retry = true;
		const access_token = await refreshAccessToken();            
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
		return axiosApiInstance(originalRequest);
	}
*/
	return Promise.reject(error);
});

if (process.env.NODE_ENV === 'development') {
	const httpsAgent = new https.Agent({
	  rejectUnauthorized: false,
	});

	service.defaults.httpsAgent = httpsAgent;
	// eslint-disable-next-line no-console
	console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
}

if(typeof window !== "undefined"){
    const token = Cookie.get("usertoken");
    if(token && token !== undefined){
        service.defaults.headers.common = {'Authorization': `Bearer ${token}`};
    }
}

export const addToken = async (token) => {
    service.defaults.headers.common = {'Authorization': `Bearer ${token}`};
}

export const removeToken = async () => {
    delete service.defaults.headers.common["Authorization"];
}



export default service