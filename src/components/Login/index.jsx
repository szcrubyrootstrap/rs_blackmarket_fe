import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter"
import useUser from "../../hooks/useUser";
import Eye from "../Icons/Eye";
import IMAGES from '../../images/images'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
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

  const handlePasswordToggle = () => {
    if(showPassword){
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }

  return (
    <div className="container">
      <img src={IMAGES.union} alt="Black market logo" />
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
            type={showPassword ? 'text' : 'password'}
            placeholder="Type your password"
            onChange={changePasswordHandler} value={password}
            required
          />
          <div className="eye-icon" onClick={handlePasswordToggle} title="Show password">
            <Eye />
          </div>
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
