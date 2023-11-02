import React from "react";
import './login.css'
import Login from '../../components/Login'
import { Link } from 'wouter'

export default function LoginPage () {
  return (
    <div className="background">
      <div className="login">
        <Login />
        <div className="registration">
          <Link to="/registration">Registration</Link>
        </div>
      </div>
    </div>
  )
}
