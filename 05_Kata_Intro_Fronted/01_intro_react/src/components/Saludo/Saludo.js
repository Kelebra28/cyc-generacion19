import { Component } from 'react'
import './Saludo.css'


class ClassSaludo extends Component {

    render() {
        // const objx = {
        //     number: 1
        // }
        // const { number } = objx
        // console.log(objx)
        // console.log(objx.number)
        // console.log('Destrcuture', number)
        return (
            <div>
                <h1 className='title'> Hola desde un Class Component</h1>
                <h2 className='name'>{this.props.name} {this.props.lastName}</h2>
            </div>
        )
    }
}



export default ClassSaludo