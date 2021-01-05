const express = require('express')
const Blog = require('../models/Blog')
const User = require('../models/User')
const { request } = require('../app')
const { response } = require('express')

const blogRouter = express.Router()

const jwt = require('jsonwebtoken')

const getToken = (request) => {
	const authorization = request.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7)
	}
	return null
}

blogRouter.get('/', async (request, response) => {
	const blogs = await Blog.find({}).populate('user', { blogs: 0 })
	response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
	const body = request.body
	const token = getToken(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	if (!token || !decodedToken.id) {
		return response.status(401).json({
			error: 'token missing or invalid',
		})
	}

	const user = await User.findById(decodedToken.id)

	const blog = new Blog({
		title: body.title,
		author: body.author,
		url: body.url,
		likes: body.likes,
		user: user._id,
	})

	// const blog = new Blog(request.body)
	const savedBlog = await blog.save()
	user.blogs = user.blogs.concat(savedBlog._id)
	await user.save()
	response.json(savedBlog.toJSON())
})

blogRouter.delete('/:id', async (request, response) => {
	await Blog.findByIdAndRemove(request.params.id)
	response.status(204).end()
})

blogRouter.put('/:id', async (request, response) => {
	const body = request.body

	const updatedBlog = {
		likes: body.likes,
	}

	const res = await Blog.findByIdAndUpdate(request.params.id, updatedBlog, {
		new: true,
	})
	response.json(res)
})

module.exports = blogRouter
