import React, { Component } from "react";

class Button extends Component {
  render() {
    return <input type="button" value={this.props.value} id={this.props.id} />;
  }
}
export default Button;