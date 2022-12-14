
const CardPokemon = ({name, id, imgFront, imgBack}) => {

    return (
        <> 
            {name === '' ? null : (
                 <>
                    <h2>{`Name: ${name}`}</h2>
                    <p>{`ID: ${id}`}</p>
                    <img src={imgFront} alt="Pokemon Front" />
                    <img src={imgBack} alt="Pokemon Back" />
                 </>
            )}
           
        </>
    )
}

export default CardPokemon