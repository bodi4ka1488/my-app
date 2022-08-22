import React, { Component } from 'react';
import ValueInput from './ValueInput';

class FormAndInput extends Component {
    state = {
        input1: "",
        input2: "",
        input3: "",

        text: ""
    }
    InputHeandler1(event) {
        this.setState({ input1: event })
        console.log(event);
    }
    InputHeandler2(event) {
        this.setState({ input2: event })
    }
    InputHeandler3(event) {
        this.setState({ input3: event })
    }
    handlerSubmit(event) {
        console.log("sdfd");
        event.preventDefault();
        let t = [this.state.input1, this.state.input2, this.state.input3]
        t = JSON.stringify(t)

        this.setState({ text: t })
    }

    render() {
        return (
            <form onSubmit={(e) => this.handlerSubmit(e)}>
                <ValueInput InputHeandler1={(e) => this.InputHeandler1(e)} inputValue={this.state.input1} />
                <ValueInput InputHeandler1={(e) => this.InputHeandler2(e)} inputValue={this.state.input2} />
                <ValueInput InputHeandler1={(e) => this.InputHeandler3(e)} inputValue={this.state.input3} />
                <input type="submit" value="Submit" />

                <div>{this.state.text}</div>
            </form>
        );
    }
}

export default FormAndInput;