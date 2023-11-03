import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter"
import useUser from "../../hooks/useUser";

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const {loginError, isLogged, login, loginErrorMessage} = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [isLogged, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  const changeEmailHandler = (e) => {
    setEmail(e.target.value)
  }

  const changePasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="container">
      <img src='./Union.svg' alt="union" />
      <form onSubmit={submitHandler}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Type your email"
            onChange={changeEmailHandler} value={email}
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Type your password"
            onChange={changePasswordHandler} value={password}
            required
          />
        </div>
        <button className="submit">Login</button>
      </form>
      <div className="footer">
        <div className="error-messages">
          { loginError && <strong>{loginErrorMessage}</strong> }
        </div>
        <div className="forgot-password">
          <Link to="/">I forgot my password.</Link>
        </div>
      </div>
    </div>
  )
}
