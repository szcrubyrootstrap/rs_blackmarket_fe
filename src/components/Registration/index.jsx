import { useState } from "react";
import { useLocation } from "wouter"
import registrateService from '../../services/registrate'

export default function Registration () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [, navigate] = useLocation()
    const [registrationState, setRegistrationState] = useState({ loading: false, error: false, message: '' })

    const registrate = ({ email, password, password_confirmation }) => {
      setRegistrationState({ loading: true, error: false, message: '' })
      registrateService({ email, password, password_confirmation })
      .then(res => {
        setRegistrationState({ loading: false, error: false, message: '' })
        navigate('/login')
      })
      .catch(err => {
        setRegistrationState({ loading: false, error: true, message: err.message })
      })
    }

    const submitHandler = (e) => {
      e.preventDefault()
      registrate({ email, password, password_confirmation })
    }
  
    return (
      <>
        { !registrationState.loading &&
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
            <input
              type="password"
              placeholder="Password Confirmation"
              onChange={e => setPasswordConfirmation(e.target.value)} value={password_confirmation}
            />
            <button>Registrate</button>
          </form>
        }
        { registrationState.error && <strong>{registrationState.message}</strong> }
      </>
    )
  }
