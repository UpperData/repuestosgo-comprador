import axios from 'axios'
import { API_BASE_URL } from '~/config/appConfig';

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



export default service