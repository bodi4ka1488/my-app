import React, { Component } from 'react';
import "./ButtonOnOff.css"
class ButtonOnOff extends Component {
    state = {
        text: this.props.text,
        isFlag: false,
    }
    handler() {
        if (this.state.isFlag) {
            this.setState({ text: "open" })
            this.setState({ isFlag: !this.state.isFlag })

        } else if (!this.state.isFlag) {
            this.setState({ text: "hide" })
            this.setState({ isFlag: !this.state.isFlag })




        }
    }
    hLog() {
        console.log(1);
    }
    componentDidMount() {
        console.log("I'm mount");
    }
    componentDidUpdate() {
        console.log("i'm update");
    }

    render() {
        return (
            <div>
                {this.state.isFlag ? <div className='squer'></div> : ""}
                <button onClick={() => this.handler()}>Click i`m {this.state.text}</button>
            </div >
        );
    }
}

export default ButtonOnOff;