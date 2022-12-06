import { Component } from 'react'

class ButtonCounter extends Component {

    render() {
        return (
            <button onClick={() => this.props.myFuction(this.props.myState, this.props.myCount, this.props.user)}>
                {this.props.text}
            </button>
        )
    }
}

export default ButtonCounter