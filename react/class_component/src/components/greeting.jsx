import React, { Component } from 'react'

export default class Greeting extends Component {

    state = {
        type: this.props.type,
        name: this.props.name
    }

    constructor(props) {
        super(props)
        this.setName = this.setName.bind(this)//Example with constructor
    }

    setType(e) {
        this.setState({ type: e.target.value })
    }

    setName(e) {
        this.setState({ name: e.target.value })
    }

    render() {
        const { type, name } = this.state
        return (
            <div>
                <h1>{type} {name}!</h1>
                <hr />
                <input type="text" placeholder="Type..."
                    value={type} onChange={e => this.setType(e)} />
                <input type="text" placeholder="Name..."
                    value={name} onChange={this.setName} />
            </div>
        )
    }
}