import secure from '@/config/secureLS';
import { default as api } from 'axios';

api.defaults.baseURL = import.meta.env.VITE_URL_API;

api.interceptors.request.use((config) => {
    const token = secure.get('inventory@access-token')
    if (token?.data) {
        config.headers.Authorization = `Bearer ${token.data}`;
        config.headers.Accept = 'application/json';
    }
    return config
})

api.interceptors.response.use(
    (res) => res,
    (error) => {
        const { response } = error
        if (response) {
            if (response.status === 401) {
                secure.clear()
                // window.location.href = `${process.env.REACT_APP_PUBLIC_URL}/signin?redirect=${window.location.href}` || ''
            }

            throw Object.assign({ ...response.data, status: response.status })
        }
    }
)

export default api;
