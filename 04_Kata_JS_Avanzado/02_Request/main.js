const request = require('request')


const URL_API = 'https://pokeapi.co/api/v2/pokemon'

const pedirPokemon = (pokemon) => {
    request.get(`${URL_API}/${pokemon}`, (error, response, body) => {
    // console.log('Error', error)
    // console.log('Respnse', response)
    // console.log('Body', body)
    const data = JSON.parse(body)
    // console.log(data)
    console.log(data.name);
    })



}
 pedirPokemon(100)

 // Challenge 
 // Sacar la informacion correspondite de la pokedex, nombre, id. imagenes 

 //Hacer una peticion a la API de Rick and Morty
 // Sacar informacion relevante 
 // https://rickandmortyapi.com/