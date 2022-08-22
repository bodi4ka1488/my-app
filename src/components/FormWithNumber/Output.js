import React, { Component } from 'react'

export default class Output extends Component {

    render() {
        return (
            <div>{this.props.value * this.props.Mul}</div>
        )
    }
}
