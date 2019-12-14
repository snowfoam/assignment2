import axios from '@/libs/api.request'


export const reply = ({id,status}) =>{
	return axios.request({
		url:`/friend/${id}`,
		data:{
			status
		},
		method:'put'
	})
}

export const getFriendNews = () => {
	return axios.request({
		url:'/friend',
		method: 'get'
	})
}

