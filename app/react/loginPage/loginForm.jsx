import React, { Component } from "react";
import Button from "./button.jsx";

class LoginForm extends Component {
  render() {
    return <form action={this.props.action} method={this.props.method}>
        <table>
            <tr id="login">
                <td>Логин</td>
                <td><input type="text"/></td>
            </tr>
            <tr id="password">
                <td>Пароль</td>
                <td><input type="password"/></td>
            </tr>
            <tr>
                <td>
                    <Button id="funnyButtonOne" value="Кликни раз" />
                </td>
                <td>
                    <Button id="funnyButtonTwo" value="Кликни два" />
                </td>
            </tr>
            <tr>
                <td colspan="2"><input type="submit" value="Отправить"/></td>
            </tr>
        </table>
    </form>;
  }
}
export default LoginForm;