const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blog')
const userRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')
const bodyParser = require('body-parser')
const testRouter = require('./controllers/test')
require('express-async-errors')
logger.info('connecting to', config.MONGODB_URI)

mongoose
	.connect(config.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		logger.info('connected to MongoDB')
	})
	.catch((error) => {
		logger.error('error connecting to MongoDB:', error.message)
	})

app.use(cors())
app.use(bodyParser.json())
app.use(middleware.requestLogger)
// app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
console.log(process.env.NODE_ENV)
app.use('/api/testing', testRouter)
// if (process.env.NODE_ENV == 'test') {
// 	console.log('inside')

// }

module.exports = app
