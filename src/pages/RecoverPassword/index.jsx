import React from 'react'
import ResetPassword from 'components/RecoverPassword'
import { useLocation } from 'wouter'
import IMAGES from 'images/images'

export default function RecoverPasswordPage () {
  const [, navigate] = useLocation()

  const redirectHandler = () => {
    navigate('/login')
  }

  return (
    <div className="background flex-column">
      <div className="login flex-column">
        <div className="registration flex-column">
          <img src={IMAGES.union} alt="Black market logo" />
          <ResetPassword />
          <button onClick={redirectHandler} className="registration-button">Go back to login</button>
        </div>
      </div>
    </div>
  )
}
