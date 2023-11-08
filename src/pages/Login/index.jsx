import React from 'react';
import Login from '../../components/Login'
import { useLocation } from 'wouter'

export default function LoginPage () {
  const [, navigate] = useLocation()

  const redirectHandler = () => {
    navigate('/registration')
  }

  return (
    <div className="background">
      <div className="login">
        <Login />
        <div className="registration">
          <p>Don't have an account?</p>
          <button onClick={redirectHandler} className="registration-button">Sign up</button>
        </div>
      </div>
    </div>
  )
}
