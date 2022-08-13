import React, { Component } from 'react'

export default class StringComponent extends Component {
    // state = {
    //     text: this.props.text
    // }
    render() {
        return (
            <div>{this.props.text}</div> //if use state we can this.state.text
        )
    }
}
