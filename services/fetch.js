import axios from 'axios'
// import history from './history'
import { API_BASE_URL } from '~/config/appConfig';

// import { AUTH_TOKEN } from 'redux/constants/Auth'
// import { notification } from 'antd';

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000
})

// config
const AUTH_TOKEN 					= 'authTkn';

// API Request interceptor
service.interceptors.request.use(config => {
	const jwtToken = localStorage.getItem(AUTH_TOKEN);
	
	if (jwtToken) {
		config.headers['authorization'] = jwtToken
	}

	/*
	if (!jwtToken && !config.headers[PUBLIC_REQUEST_KEY]) {
		history.push(ENTRY_ROUTE)
		window.location.reload();
	}
	*/

  return config
}, error => {
	// Do something with request error here
	/*
	notification.error({
		message: 'Error'
	})
	*/
  	Promise.reject(error)
})

// API respone interceptor
service.interceptors.response.use( (response) => response.data, (error) => {

	let notificationParam = {
		message:        '',
        description:    ''
	}
	
	// Remove token and redirect 

	if (error.response.status === 401) {
		notificationParam.message 		= 'Authentication Fail';
		notificationParam.description 	= 'Please login again';

		// localStorage.removeItem(AUTH_TOKEN)
		// history.push(SESSION_EXPIRED_ROUTE)
		// window.location.reload();
	}

	if (error.response.status === 400 || error.response.status === 403) {
		notificationParam.message = 'Response Error'
	}

	if (error.response.status === 404) {
		notificationParam.message = 'Not Found'
	}

	if (error.response.status === 500) {
		notificationParam.message = 'Internal Server Error'
	}
	
	if (error.response.status === 508) {
		notificationParam.message = 'Time Out'
	}

	// notification.error(notificationParam)

	return Promise.reject(error);
});

export default service