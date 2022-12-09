import React, { useState } from 'react'
import ButtonFuncioanl from '../ButtonCounter/Funcionalbuttom'


const FuncionalCouter = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const hanlderClickSumar = () => {
        setCount(count + 1)
        setName('Soy yo')
    }

    const handlerClickRestar = () => {
        setCount(count - 1)
        setName('Soy yo')
    }

    const handlerClickReset = () => {
        setCount(0)
    }


return (
    <div>
        <h2>{`Contador: ${count}`}</h2>
        <h3>{`El usuario ${name} le dio click`}</h3>
        <ButtonFuncioanl onClick={handlerClickRestar} text="Restar" />
        <ButtonFuncioanl onClick={ handlerClickReset} text="Reset" />
        <ButtonFuncioanl onClick={hanlderClickSumar} text="Sumar" />
    </div>
)

}

export default FuncionalCouter