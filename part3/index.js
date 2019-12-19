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



let persons= [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
      id: 4,
      name: "Mary Poppendieck",
      number: "39-23-6423122"
    }
  ]

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
    const len = persons.length
    var date = new Date()
    res.send(`Phonebook has info for ${len} people<br>${date}`)
    
})

app.get('/api/persons/:id', (req,res)=>{
    Person.findById(req.params.id).then(p => {
        res.json(p.toJSON())
    })
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.filter(person=>person.id!==id)
    res.json(person)
    persons = person
    res.status(204).end()
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
    // const p = persons.find(p=>p.name===person.name)
    // // console.log(p)
    // if(p){
    //     return res.status(400).json({
    //         "error": "name must be unique"
    //     })
    // }
    // const id = Math.floor((Math.random()*4000000)+1)
    // person.id = id
    // persons = persons.concat(person)
    // console.log(phonebook)

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
const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})