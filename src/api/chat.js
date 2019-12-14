import axios from '@/libs/api.request'

export const getMessages = ({from,to}) => {
	return axios.request({
		url: `/chat/${from}/${to}`,
		method: 'get'
	})
}

export const sendMessage = ({from,to,message}) => {
	return axios.request({
		url: '/chat/send',
		data:{
			userId: from,
			otherUserId: to,
			message
		},
		method: 'post'
	})
}

export const getAllMessage = () => {
	return axios.request({
		url: 'message',
		method: 'get'
	})
}