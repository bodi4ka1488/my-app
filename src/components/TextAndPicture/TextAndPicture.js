import React, { Component } from 'react'
import Image from "./image.png"

export default class TextAndPicture extends Component {
  render() {
    return (
      <>
          <p>TextAndPicture</p>
          <img src={Image} className="App-logo" alt="logo" />
          
      </>
    )
  }
}
