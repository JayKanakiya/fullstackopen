require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const mongoose = require('mongoose')

const app = express()


app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
}
app.use(errorHandler)



// let persons= [
//     {
//       id: 1,
//       name: "Arto Hellas",
//       number: "040-123456"
//     },
//     {
//       id: 2,
//       name: "Ada Lovelace",
//       number: "39-44-5323523"
//     },
//     {
//       id: 3,
//       name: "Dan Abramov",
//       number: "12-43-234345"
//     },
//     {
//       id: 4,
//       name: "Mary Poppendieck",
//       number: "39-23-6423122"
//     }
//   ]

  morgan.token('data',(request)=>{
    if(request.method=='POST')
    return " "+ JSON.stringify(request.body)
    else
    return " "
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.get('/',(req,res)=>{
    res.send('<h1>Phonebook</h1>')
})


app.get('/api/persons',(req,res) => {
    Person.find({}).then(p => {
        res.json(p.map(pers => pers.toJSON()))
    })
})

app.get('/info',(req,res)=>{
    // const len = persons.length
    var date = new Date()
    console.log(date)
    Person.find({}).then(p => {
            console.log(p.length)
            res.send(`<p> Phonebook has info for ${p.length} people</p>`)
            res.send(date)
        })
    
})

app.get('/api/persons/:id', (req,res,next)=>{
    Person.findById(req.params.id).then(p => {
        res.json(p.toJSON())
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req,res, nexta) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
}) 

app.post('/api/persons', (req,res) => {
    const p = req.body
    if(!p.name){
        return res.status(400).json({
            "error": "name missing"
        })
    }
    if(!p.number){
        return res.status(400).json({
            "error": "number missing"
        })
    }
    
    const person = new Person({
        name: p.name,
        number: p.number
    })
    person.save().then(newP => {
        res.json(newP.toJSON())
    })
    // res.json(persons)
    console.log('Person Added')

})

app.put('/api/persons/:id', (req,res,next) => {
    const p = req.body
    const person = {
        name: p.name,
        number: p.number
    }

    Person.findByIdAndUpdate(req.params.id, p, {new: true})
        .then(newP => {
            res.json(newP.toJSON())
        })
        .catch(error => next(error))
})


const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})