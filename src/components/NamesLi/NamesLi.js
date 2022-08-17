import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default class NamesLi extends Component {

    createNameInLi(v) {
        const listItem = this.props.names.map((name) => <li key={uuidv4()}>{name}</li>)
        return listItem;
    }
    render() {
        return (
            <ul>
                {this.createNameInLi(this.props.names)}
            </ul>
        )
    }
}
