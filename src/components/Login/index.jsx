import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter"
import useUser from "../../hooks/useUser";

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const {loginError, isLoading, isLogged, login} = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [isLogged, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <>
      <h2>Login</h2>
      { isLoading && <strong>Wait...</strong> }
      { !isLoading &&
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)} value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)} value={password}
          />
          <button>Login</button>
        </form>
      }
      { loginError && <strong>Credentials are not correct.</strong> }
      {
        isLogged
        ? ''
        : <Link to="/registration">Registration</Link>
      }
    </>
  )
}
