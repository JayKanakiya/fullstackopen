const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]



const url =
  `mongodb+srv://jacknex:${password}@cluster0-2d0yv.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,

})

const Person = mongoose.model('Person', personSchema)

if(process.argv[3]){
  const name = process.argv[3]
  const number = process.argv[4]
  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(response => {
    mongoose.connection.close()
    console.log(`added ${name} ${number} to phonebook`)
  })
}

else{
  
  Person.find({}).then(result => {
    console.log('phonebook')
    result.forEach(person => {
      var s =  `${person.name} ${person.number}`
      console.log(s)
    })
    mongoose.connection.close()
  })

}