import React, { Component } from 'react';
import "./FormWithNumber.css"

class FormWithNumber extends Component {
    state = {
        value: "",
        sum: ""
    }
    handlerChange(event) {

        this.setState({ value: event.target.value })
    }
    sum(event) {
        event.preventDefault();
        this.setState({ sum: this.state.value * 0.5 })
    }

    render() {
        return (
            <form className='numberForm' onSubmit={(e) => this.sum(e)}>
                <label>
                    <input type="number" onChange={(e) => this.handlerChange(e)} value={(this.state.value)} />
                </label>
                <input type="submit" />
                <div>{this.state.sum}</div>
            </form>
        );
    }
}

export default FormWithNumber;