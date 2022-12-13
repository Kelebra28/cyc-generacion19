const axios = require('axios')


const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'



const getAuthors = () => {
    axios.get(URL_BASE)
    .then((resnponse) => {
        console.log(resnponse.data)
        console.log(resnponse.status)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() =>{
        console.log('Se termino la peticion')
    })    
}

// getAuthors()

const createAuthor = (name, lastName, nacionality, biography, gender, age, isAlive) => {
    const jsonToSend = {
        name,
        "last_name": lastName,
        "nacionalidad": nacionality,
        biography,
        gender,
        age,
        "is_alive": isAlive
    }

    axios.post(URL_BASE, jsonToSend)
        .then((resnponse) =>{
            console.log(resnponse.status)
            console.log(resnponse.data)
        })
        .catch((err) =>{
            console.log(err)
        })
        .finally(() => console.log('Termino la peticion'))
}

// createAuthor('Kelebra 2022', 'Apellido chido xd', 'MX', 'Enseñando promesas con CRUD', 'M', 24, false)

const getAuthorsAsync = async () => {
    try {
        const resnponse = await axios.get(`${URL_BASE}14950/`)
        const resnponse2 = await axios.get(`${URL_BASE}14954/`)
            console.log(resnponse.data)
            console.log(resnponse2.data)
    }
    catch(err) {
        console.log(err)
    }
    finally{
        console.log('Termino peticion async await')
    }
}

// getAuthorsAsync()
