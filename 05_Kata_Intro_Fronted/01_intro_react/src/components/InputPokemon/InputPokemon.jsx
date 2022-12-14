import { useState } from 'react'

import { getPokemonById } from '../../api/requestPokemon'

import CardPokemon from "../CardPokemon/CardPokemon"


const InputPokemon = () => {
    const [dataPokemon, setData] = useState({
        name : '',
        id: '',
        imgFront: '',
        imgBack: '',
        error: false,
    })

    const requestPokemon = async (id) => {
            try {
                const { data } = await getPokemonById(id)
                setData({
                    ...dataPokemon,
                    name : data.name,
                    id: data.id,
                    imgFront: data.sprites.front_default,
                    imgBack: data.sprites.back_default,
                    error: false,
                })
            } catch {
                setData({
                    ...dataPokemon,
                    error: true
                })
            }
    }

    const handleOnChange = (e) => {
        setTimeout(() => {
            requestPokemon(e.target.value)
        }, 2000);
    }

    return(
        <>
        <input onChange={handleOnChange} type="text" />
        {dataPokemon.error ?  <h2>El pokemon no existe</h2> : (
             <CardPokemon
             name={dataPokemon.name} 
             id={dataPokemon.id}  
             imgFront={dataPokemon.imgFront}
             imgBack={dataPokemon.imgBack}
        />
        )}
        </>
    )
}

export default InputPokemon