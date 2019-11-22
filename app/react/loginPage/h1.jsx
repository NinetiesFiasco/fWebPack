import React, { Component } from "react";
import s from "./h1.css";
class H1 extends Component {
  render() {
    return <h1 className='headTag'>{this.props.text}</h1>;
  }
}
export default H1;