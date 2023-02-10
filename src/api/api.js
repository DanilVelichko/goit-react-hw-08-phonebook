import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com/',
})

export const setTokenAuth = (value) => {
	axiosInstance.defaults.headers.common['Authorization'] = value
}

export const dellTokenAuth = () => {
	delete axiosInstance.defaults.headers.common['Authorization']
}
