import axios from 'axios'
import { API_BASE_URL } from '~/config/appConfig';
import Cookie from "js-cookie"

//import https from 'https'
//import * as fs from 'fs'

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

/*else{
	*/
	// const cert 	= fs.readFileSync(require.resolve("./cer.pem"));
	// const key 	= fs.readFileSync(require.resolve("./key.pem"));
	// console.log(cer);
	// let datacer = JSON.stringify(decodeCert(cer), null, 2);
	// let datakey = JSON.stringify(decodeCert(key), null, 2);

	/*
	const httpsAgent = new https.Agent({
		rejectUnauthorized: false, // (NOTE: this will disable client verification)
		cert: cert,
		key: privateKey,
		passphrase: "YYY"
	});

	service.defaults.httpsAgent = httpsAgent;
	// eslint-disable-next-line no-console
	console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
	*/
	

//}

if(typeof window !== "undefined"){
    const token = Cookie.get("usertoken");
    if(token && token !== undefined){
        service.defaults.headers.common = {'Authorization': `Bearer ${token}`};
    }
}else{
	/*
	if (process.env.NODE_ENV === 'development') {
        
        const httpsAgent = new https.Agent({
          rejectUnauthorized: false,
        });
    
        axios.defaults.httpsAgent = httpsAgent;
        // eslint-disable-next-line no-console
        console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
        
    }else{
		const httpsAgent = https.Agent({
			rejectUnauthorized: false,
			key:  fs.readFileSync(require.resolve('../key.key'), 'ascii'),
			cert: fs.readFileSync(require.resolve('../cer.pem'), 'ascii')   // a PEM containing ONLY the SERVER certificate
		});

		axios.defaults.httpsAgent = httpsAgent;
		// eslint-disable-next-line no-console
		console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
	}
	*/
}

export const addToken = async (token) => {
    service.defaults.headers.common = {'Authorization': `Bearer ${token}`};
}

export const removeToken = async () => {
    delete service.defaults.headers.common["Authorization"];
}



export default service