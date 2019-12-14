import axios from '@/libs/api.request'

export const createArticle = (data) => {
	return axios.request({
		url: 'article/create',
    method: 'post',
    data
	})
}

export const getArticles = () => {
	return axios.request({
		url: 'article',
		method: 'get'
	})
}

export const addComment = (data) => {
	let {id,content} = data
	return axios.request({
		url: `article/${id}`,
		method: 'put',
		data: {
			content
		}
	})
}