import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ButtonContainer } from "../styled-components/Button";
import axios from "axios";

const LoginForm = props => {
  const [name, setName] = useState({
    username: "",
    password: ""
  });
  const changeHandler = event => {
    event.preventDefault();
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", name)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err.response));
    props.history.push("/protected");
  };

  return (
    <div className="loginModal">
      <form
        className="login-modal"
        onSubmit={event => handleSubmit(event)}
        onKeyDown={props.closeLoginHandler2}
        tabIndex="0"
      >
        <h1 className="loginTitle">Welcome Back</h1>
        <p className="loginInputs">
          <label>
            Username:
            <input
              className="input-modal"
              type="text"
              name="username"
              onChange={changeHandler}
              value={name.username}
            />
          </label>
        </p>

        <p className="loginInputs">
          <label>
            Password:
            <input
              className="input-modal"
              type="password"
              name="password"
              onChange={changeHandler}
              value={name.password}
            />
          </label>
        </p>

        <ButtonContainer className="button-modal" onClick={login}>
          Login!
        </ButtonContainer>
        <p className="forgotText">Forgot username or password? Click here.</p>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);