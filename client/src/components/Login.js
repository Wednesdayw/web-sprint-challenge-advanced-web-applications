import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const inputHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("./api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/BubblePage");
        console.log(res);
      })
      .catch((err) =>
        console.log("error happend wih the post request to API", err)
      );
  };
  return (
    <div className="login">
      <form onSubmit={login}>
        <p>Username:</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={credentials.username}
          onChange={inputHandler}
        />
        <p>Password:</p>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={inputHandler}
        />
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
