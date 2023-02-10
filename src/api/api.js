import axios from 'axios'

export const axiosPublicInstance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com/',
})

export const axiosPrivateInstance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com/',
})

export const setTokenAuth = (value) => {
	axiosPrivateInstance.defaults.headers.common['Authorization'] = value
}

export const dellTokenAuth = () => {
	delete axiosPrivateInstance.defaults.headers.common['Authorization']
}
