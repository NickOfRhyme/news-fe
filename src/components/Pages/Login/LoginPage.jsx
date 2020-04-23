import React, { Component } from "react";
import { navigate } from "@reach/router";
import { UserContext } from "../../contexts/UserContext";
import styles from "./css/LoginPage.module.css";

class LoginPage extends Component {
  static contextType = UserContext;

  state = {
    userValue: "",
    invalidLogin: false,
    validUsers: [
      "weegembump",
      "happyamy2016",
      "jessjelly",
      "grumpy19",
      "tickle122",
      "cooljmessy"
    ]
  };

  render() {
    const { invalidLogin } = this.state;
    return (
      <form onSubmit={this.login} className={styles.loginForm}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.context.userValue}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.loginButton}>Login</button>
        <p className={styles.loginInfo}>
          You can log in as the following demo users: weegembump, happyamy2016,
          jessjelly, grumpy19, tickle122, cooljmessy and Guest.
        </p>
        {invalidLogin && <p className={styles.loginError}>User not found.</p>}
      </form>
    );
  }

  handleChange = (e) => {
    this.setState({ userValue: e.target.value });
  };

  login = (e) => {
    const { changeUser } = this.context;
    const { userValue, validUsers } = this.state;
    e.preventDefault();
    if (validUsers.includes(userValue)) {
      changeUser(userValue);
      navigate("/");
    } else {
      this.setState({ invalidLogin: true, userValue: "" });
    }
  };
}

export default LoginPage;
