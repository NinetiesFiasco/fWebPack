import React, { Component } from "react";
import H1 from "./h1.jsx";
import LoginForm from "./loginForm.jsx";

class LoginPage extends Component {
  render() {
    return <div>
                
        <H1 text="Rabotaem REACT"/>
        <LoginForm method="POST" action="/" />

</div>;
  }
}
export default LoginPage;