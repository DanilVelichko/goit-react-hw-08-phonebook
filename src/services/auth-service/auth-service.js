import {
	axiosPublicInstance,
	setTokenAuth,
	axiosPrivateInstance,
} from '../../api/api'

export const signInUser = async (body) => {

	console.log('Body', body);
	
	return await axiosPublicInstance.post('/users/signup', body);
}

export const loginUser = async (body) => {
	const { data } = await axiosPublicInstance.post('users/login', body);

	console.log('Login data', data);

	setTokenAuth(`Bearer ${data.access_token}`);

	return data;
}

export const getProfile = async () => {
	const { data } = await axiosPrivateInstance.get('users/current')
	console.log('Data getProfile', data);
	return data;
}