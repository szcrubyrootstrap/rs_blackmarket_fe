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
      { isLoading && <strong>Wait...</strong> }
      { !isLoading &&
        <form onSubmit={submitHandler}>
          <img src='./Union.svg' alt="union" />
          <div className="email">
            <label for="email">Email</label><br/>
            <input
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)} value={email}
            />
          </div>
          <div className="className">
            <label for="password">Password</label><br/>
            <input
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)} value={password}
            />
          </div>
          <button>Login</button>
        </form>
      }
      { loginError && <strong>Credentials are not correct.</strong> }
    </>
  )
}
