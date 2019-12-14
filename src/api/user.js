import axios from '@/libs/api.request'
import {
  setToken,
  getToken
} from '@/libs/util'
// 登录
export const login = ({
	email,
	password
}) => {
	const data = {
		email,
		password
	}
	return axios.request({
		url: '/auth/signin',
		data,
		method: 'post'
	})
}

export const register = ({email,password,nickName,sex,age,favor}) => {
	return axios.request({
		url: '/auth/signup',
		data: {
			email,password,nickName,sex,age,favor
		},
		method: 'post'
	})
}

export const sendCode = ({
	email
}) => {
	return axios.request({
		url: '/auth/code',
		data: {
			email
		},
		method: 'post'
	})
}

export const checkCode = ({
	code
}) => {
	return axios.request({
		url: '/auth/checkCode',
		data: {
			code
		},
		method: 'post'
	})
}

export const getUserInfo = () => {
	return axios.request({
		url:'/user/token',
		method:'get'
	})
}

export const updatedUserInfo = (data) => {
	return axios.request({
		url:'/user/userinfo',
		data,
		method:'put'
	})
}

export const search = (data) => {
	return axios.request({
		url: `/user/${data}`,
		method: 'get'
	})
}

export const addPerson = (data) => {
	return axios.request({
		url:'/friend/create',
		data,
		method: 'post'
	})
}

export const putFriendNews = ({id,status}) => {
	return axios.request({
		url: `/friend/${id}`,
		data: {status},
		method: 'put'
	})
}	

export const upload = (data) => {
	return axios.request({
		url: 'upload',
		data,
		method: 'post',
		headers: { "content-type": "multipart/form-data","Authorization": 'Bearer ' + getToken() }
	})
}