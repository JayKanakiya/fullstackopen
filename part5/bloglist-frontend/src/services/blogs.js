import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then((response) => response.data)
}

const createBlog = async (blog) => {
	console.log(token)
	const config = {
		headers: { Authorization: token },
	}
	const request = await axios.post(baseUrl, blog, config)
	console.log(request)
	return request.data
}

export default { getAll, createBlog, setToken }
