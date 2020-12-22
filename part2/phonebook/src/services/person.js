import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    console.log(req)
    return req.then(
        response => response.data
    )
}

const create = (object) => {
    const req = axios.post(baseUrl,object)
    return req.then(
        response=>response.data
    )
}

const update = (id,object) => {
    const req = axios.put(`${baseUrl}/${id}`, object)
    return req.then(
        response=>response.data
    )
}

const deletePerson = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(
        response => response.data
    )
}

export default {
    getAll: getAll, 
    create: create, 
    update: update,
    deletePerson: deletePerson
}


