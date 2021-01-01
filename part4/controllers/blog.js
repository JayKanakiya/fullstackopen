const express = require('express')
const Blog = require('../models/Blog')
const { request } = require('../app')
const { response } = require('express')

const blogRouter = express.Router()

blogRouter.get('/', async (request, response) => {
	const blogs = await Blog.find({})
	response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
	const blog = new Blog(request.body)
	const savedBlog = await blog.save()
	response.json(savedBlog.toJSON())
})

blogRouter.delete('/:id', async (request, response) => {
	await Blog.findByIdAndRemove(request.params.id)
	response.status(204).end()
})
module.exports = blogRouter
