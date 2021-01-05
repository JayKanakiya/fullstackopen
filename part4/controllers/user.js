const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/User')

userRouter.post('/', async (request, response) => {
	const body = request.body
	const saltRounds = 5

	const passwordHash = await bcrypt.hash(body.password, saltRounds)

	const user = new User({
		name: body.name,
		username: body.username,
		passwordHash,
	})

	const savedUser = await user.save()
	response.json(savedUser)
})

userRouter.get('/', async (request, response) => {
	const users = await User.find({}).populate('blogs')
	response.json(users)
})

module.exports = userRouter
