import React, { Component } from 'react'

export default class StringComponent extends Component {
    state = {
        text: this.props.text
    }
    render() {
        return (
            <div>{this.state.text}</div>
        )
    }
}
