const express = require('express')
const app = express()

let phonebook = [
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


app.get('/',(req,res)=>{
    res.send('<h1>Phonebook</h1>')
})


app.get('/api/persons',(req,res) => {
    res.json(phonebook)
    console.log(phonebook)
})

app.get('/info',(req,res)=>{
    const len = phonebook.length
    var date = new Date()
    res.send(`Phonebook has info for ${len} people<br>${date}`)
    
})

app.get('/api/persons/:id', (req,res)=>{
    const id = Number(req.params.id)
    const person = phonebook.find(person=>person.id === id)
    if(person){
        res.json(person)
    }
    else{
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = phonebook.filter(person=>person.id!==id)
    res.json(person)
    res.status(204).end()
}) 
const port = 3001
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})