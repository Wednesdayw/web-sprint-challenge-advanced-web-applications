import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/protected');
      })
      .catch(err => console.log('oops', err));
  }
  return (
    <>

      <h1>Welcome to the Bubble App!</h1>
      
      <form onSubmit={login}>
        <label>Username:
        <input
         text='name'
         name='username'
         placeholder='Username'
         value={credentials.username}
         onChange={handleChanges}
        /></label>

        <label>Password:
        <input
         type='password'
         name='password'
         value={credentials.password}
         onChange={handleChanges}
        /></label>
        <div className="buttonRow">
        <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
