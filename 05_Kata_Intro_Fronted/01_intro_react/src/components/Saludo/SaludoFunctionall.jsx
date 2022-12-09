import React from 'react'


const SaludoFuncional = ({name, lastName}) => {

    return (
        <div>
            <h1 className='title'> Hola desde un Class Component</h1>
            <h2 className='name'>{name} {lastName}</h2>
        </div>  
    )
}


export default SaludoFuncional