import { Component } from 'react'



class TextChange  extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stringChange: props.text
        }
    }

    setChangeText = (e) => {
        console.log(e.target.value)
        this.setState({
            stringChange: e.target.value
        })
    }

    render() {
        const { stringChange } = this.state
        return (
            <div>
                <input type="text" onChange={((e) => this.setChangeText(e))} />
                <p>{stringChange}</p>
            </div>
        )
    }
}

export default TextChange