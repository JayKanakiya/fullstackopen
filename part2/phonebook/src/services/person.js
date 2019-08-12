import axios from 'axios'

const getAll = () => {
    const req = axios.get("http://localhost:3001/persons")
    return req.then(
        response => response.data
    )
}

const create = (object) => {
    const req = axios.post("http://localhost:3001/persons",object)
    return req.then(
        response=>response.data
    )
}

const update = (id,object) => {
    const req = axios.put(`${'http://localhost:3001/persons'}/${id}`, object)
    return req.then(
        response=>response.data
    )
}

export default {
    getAll: getAll, 
    create: create, 
    update: update
}


