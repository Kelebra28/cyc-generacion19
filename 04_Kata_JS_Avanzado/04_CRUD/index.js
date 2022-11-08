const request = require('request')

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

// CRUD -> 
// CREATE
// READ
// UPDATE
// DELETE

const readAllAuthor = () => {
    const URL_GET_AUTHORS = `${URL_BASE}/api/v1/authors`
    request.get(URL_GET_AUTHORS, (err, res, body) => {
        if(res.statusCode === 200) {
            const data = JSON.parse(body)
            console.log(data)
        }else {
            console.log(err)
        }
    })
}

// readAllAuthor()


const readOneAuthor = (idAuthor) => {
    const URL_GET_AUTHOR = `${URL_BASE}${idAuthor}`
    request.get(URL_GET_AUTHOR, (err, res, body) => {
        if(res.statusCode === 200) {
            const data = JSON.parse(body)
            console.log(data)
        }else {
            console.log(err)
        }
    })
}

// readOneAuthor(14938)


// Crete 

const createAuthor = (name, lastName, nacionality, biography, gender, age, isAlive) => {
    const URL_CREATE_AUTHOR = `${URL_BASE}`

    const jsonToSend = {
        name,
        "last_name": lastName,
        "nacionalidad": nacionality,
        biography,
        gender,
        age,
        "is_alive": isAlive
    }

    return new Promise((resolve, reject) => {
        request.post(URL_CREATE_AUTHOR, {form: jsonToSend}, (err, res, body) => {
            if(res.statusCode === 201) {
                const newAthor = JSON.parse(body)
                resolve(newAthor)
            }else {
                console.log('adasd',err)
                console.log(reject(new Error('No se pudo crear el usuario')));
            }
        })
    })
}

createAuthor('Kelebra 2022', 'Apellido chido xd', 'MX', 'Enseñando promesas con CRUD', 'MALE', 24, false)
    .then(newAthor => {
        console.log('Autor creado', newAthor)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Termino la promesa de crear autor'))

// Challenge
//  HAcer el UPDATE con promesas y hacer el DELETE con promesa