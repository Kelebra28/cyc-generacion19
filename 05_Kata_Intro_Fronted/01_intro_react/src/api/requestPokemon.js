import axios from 'axios'

const URL_BASE_POKEMON = 'https://pokeapi.co/api/v2/'

const getAllPokemons = () => {
    return axios.get(`${URL_BASE_POKEMON}pokemon/`)
}
const getPokemonById = (id) => {
    return axios.get(`${URL_BASE_POKEMON}pokemon/${id}`)
}

export {
    getAllPokemons,
    getPokemonById
}