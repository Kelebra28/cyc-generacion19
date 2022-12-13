import axios from 'axios'

const URL_BASE = 'https://swapi.dev/api/'

const getCharacterSWAPI =  (id) => {
    return  axios.get(`${URL_BASE}people/${id}`)

}

const getAllCharacters =  () => {
    return axios.get(`${URL_BASE}people/`)
}

export {
    getCharacterSWAPI,
    getAllCharacters
}