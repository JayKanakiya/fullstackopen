const express = require('express')
const config = require('./utils/config')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')

console.log('connecting to ', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogRouter)


module.exports = app
