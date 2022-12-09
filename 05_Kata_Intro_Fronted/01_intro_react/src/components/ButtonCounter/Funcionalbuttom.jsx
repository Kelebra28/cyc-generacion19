import React from 'react'


const ButtonFuncioanl = ({onClick, text}) => {
    return(
        <button onClick={onClick}>
        {text}
    </button>
    )
}

export default ButtonFuncioanl