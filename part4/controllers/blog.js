const express = require('express')
const Blog = require('../models/Blog')

const blogRouter = express.Router()

blogRouter.get('/', (request, response) => {
	Blog.find({}).then((blogs) => {
		response.json(blogs)
	})
})

blogRouter.post('/', (request, response) => {
	const blog = new Blog(request.body)
	blog.save().then((result) => {
		response.status(201).json(result)
	})
})

module.exports = blogRouter
