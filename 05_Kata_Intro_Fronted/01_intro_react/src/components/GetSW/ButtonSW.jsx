import { useState, useEffect } from 'react'
import { getCharacterSWAPI, getAllCharacters } from '../../api/request'




const ButtonSW = () => {

    const [dataSW, setDataSW] = useState({
        name: '',
        gender: '',
        height: '',
        mass: '',
        eyeColor: ''
    })

    const handleClick = async () => {
        try {
            const { data } = await getCharacterSWAPI(1)
            setDataSW({
                ...dataSW,
                name: data.name,
                gender: data.gender,
                height : data.height,
                mass: data.mass,
                eyeColor: data.eye_color
            })
        }
        catch(err){
            console.log(err)
        }
    }  

    const allCharacter = async () => {
        const { data } = await getAllCharacters()
        console.log(data)
    }

    useEffect(() => {
        allCharacter()
    }, [])
    return(
        <>
        <button onClick={handleClick} type='button'> Traer informacion </button>
        <p>{`Nombre: ${dataSW.name}`}</p>
        <p>{`Genero: ${dataSW.gender}`}</p>
        <p>{`Altura: ${dataSW.height}`}</p>
        <p>{`Masa: ${dataSW.mass}`}</p>
        <p>{`Color de ojos: ${dataSW.eyeColor}`}</p>
        </>
    )
}


export default ButtonSW