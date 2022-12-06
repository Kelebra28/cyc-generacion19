import { Component } from 'react'
import ButtonCounter from '../ButtonCounter/ButtonCouter'



class Couter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: Number(props.init),
            name: props.user,
            data: {}
        }
    }
    // mi cambio de estado
    setCount = (myState, number, user) => {
        console.log('Estoy en mi click');
        this.setState({
            [myState] : number,
            name : user
        })
    }

    render() {
        const { count, name } = this.state
        return (
            <div>
                <h2>{`Contador: ${count}`}</h2>
                <h3>{`El usuario ${name} le dio click`}</h3>
                <ButtonCounter
                text="Sumar"
                myFuction={this.setCount}
                myCount={count + 1}
                myState='count'
                user={name}
                />
            </div>
        )
    }

}

export default Couter