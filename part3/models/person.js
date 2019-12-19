const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')
const url = process.env.MONGODB_URI

console.log('connecting to ' + url)

mongoose.connect(url, { useNewUrlParser: true })
    .then(res => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB', error.message)
    })


const personSchema = new mongoose.Schema({
    name: {type: String, require: true, unique: true, minlength:3},
    number: {type: String, require: true, unique: true, minlength: 8}

})

personSchema.plugin(validator)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)