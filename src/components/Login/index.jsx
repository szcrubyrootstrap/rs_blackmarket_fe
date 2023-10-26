import React, { useState, useEffect } from "react";
import { useLocation } from "wouter"
import useUser from "../../hooks/useUser";

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const {isLogged, login} = useUser()

  useEffect(() => {
    if (isLogged) { navigate('/') }
  }, [isLogged, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    login()
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)} value={username}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)} value={password}
      />
      <button>Login</button>
    </form>
  )
}
