import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'

export default function RecoverPassword () {
  const [email, setEmail] = useState('')
  const [, navigate] = useLocation()
  const {recoverPassword, recoveryEmailSent, loginError, loginErrorMessage} = useUser()

  useEffect(() => {
    if (recoveryEmailSent) {
      navigate('/login')
    }
  }, [recoveryEmailSent, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    recoverPassword({email})
  }

  const changeEmailHandler = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <form onSubmit={submitHandler} className='flex-column'>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Type your email"
            onChange={changeEmailHandler} value={email}
            required
          />
        </div>
        <button className="submit">Recover password</button>
      </form>
      <div className="error-messages">
        { loginError && <strong>{loginErrorMessage}</strong> }
      </div>
    </>
  )
}
