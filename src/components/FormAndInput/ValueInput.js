import React, { Component } from 'react'

export default class ValueInput extends Component {
    InputHeandler(e) {
        this.props.InputHeandler1(e.target.value)
    }
    render() {
        return (
            <>
                <input onChange={(e) => this.InputHeandler(e)} value={(this.props.InputValue)} />
            </>
        )
    }
}
