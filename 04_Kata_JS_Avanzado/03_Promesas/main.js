const { get } = require('request')
const request = require('request')


const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemon = (pokemon) => {
    return new Promise((resolve, reject) => {
        request.get(`${URL_BASE}${pokemon}`, (err, res, body)=>{
            if(res.statusCode === 200){
                const data = JSON.parse(body)
                resolve(data)
            } else if(res.statusCode === 404){
                reject(new Error('Este pokemon no existe porfa ve el anime :)'))
            } else {
                reject(err)
            }
        })
    })
}

getPokemon('ditto')
    .then(data => {
        return data
    })
    .then(pokemon => {
        console.log(pokemon.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Se acabo la promesa'))