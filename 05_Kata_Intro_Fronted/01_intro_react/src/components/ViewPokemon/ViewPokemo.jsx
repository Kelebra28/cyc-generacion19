import { useState, useEffect } from 'react'
import { getAllPokemons } from '../../api/requestPokemon'
import CardGeneralPokemon from '../CardPokemon/CardGeneralPokemon'

const ViewPokemon = () => {

    const [dataPokemon, setData] = useState([])


    const requestAllPokemons = async () => {
        try {
            const {data} = await getAllPokemons()
            setData(data.results)
        }catch{
            setData({
                ...dataPokemon,
                error: true
            })
        }
    }
console.log(dataPokemon);
    useEffect(() => {
        requestAllPokemons()
    }, [])

    return (
        <>
        {dataPokemon.length === 0 ? null : 
            dataPokemon.map((pokemon, index) => {
                console.log(pokemon)
                return (
                    <CardGeneralPokemon name={pokemon.name} />
                )
            })
        }
        </>
    )

}

export default  ViewPokemon