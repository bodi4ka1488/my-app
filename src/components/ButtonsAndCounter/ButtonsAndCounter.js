import React, { Component } from 'react'

export default class ButtonsAndCounter extends Component {
    state = {
        value: 0,
    }
    plusNumber() {
        this.setState((state) => ({ value: this.state.value + this.props.stepUp }))
    }
    minusNumber() {
        this.setState((state) => ({ value: this.state.value - this.props.stepDown }))
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={() => this.plusNumber()}>More Please</button>
                <button onClick={() => this.minusNumber()}>Less Please</button>

            </div>
        )
    }
}
