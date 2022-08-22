import React, { Component } from 'react';
import "./FormWithNumber.css"
import Output from './Output';

class FormWithNumber extends Component {
    state = {
        value: "",
    }
    handlerChange(event) {

        this.setState({ value: event.target.value })
    }



    render() {
        return (
            <form className='numberForm'>
                <input type="number" onChange={(e) => this.handlerChange(e)} value={(this.state.value)} />
                <Output value={this.state.value} Mul={0.5} />
                <Output value={this.state.value} Mul={0.05} />


            </form>
        );
    }
}

export default FormWithNumber;