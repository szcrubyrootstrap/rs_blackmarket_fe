import { useState } from 'react'
import { useLocation, Link } from 'wouter'
import registrateService from 'services/registrate'
import Eye from 'components/Icons/Eye'
import IMAGES from 'images/images'

export default function Registration () {
    const [email, setEmail] = useState('')
    const [fullname, setFullnameHandler] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [registrationState, setRegistrationState] = useState({ error: false, message: '' })
    const [, navigate] = useLocation()

    const registrate = async ({ email, password, password_confirmation }) => {
      try{
        await registrateService({ email, password, password_confirmation })
        setRegistrationState({ error: false, message: '' })
        navigate('/login')
      } catch (err) {
        setRegistrationState({ error: true, message: err.message })
      }
    }

    const submitHandler = (e) => {
      e.preventDefault()
      registrate({ email, password, password_confirmation })
    }

    const changeEmailHandler = (e) => {
      setEmail(e.target.value)
    }

    const changePasswordHandler = (e) => {
      setPassword(e.target.value)
    }

    const changePasswordConfirmationHandler = (e) => {
      setPasswordConfirmation(e.target.value)
    }

    const changefullnameHandler = (e) => {
      setFullnameHandler(e.target.value)
    }

    const handlePasswordToggle = () => setShowPassword(!showPassword)
    const handlePasswordConfirmationToggle = () => setShowPasswordConfirmation(!showPasswordConfirmation)

    return (
      <div className="container-registration flex-column">
        <img src={IMAGES.union} alt="Black market logo" />
        <form onSubmit={submitHandler} className='flex-column'>
          <div className="email flex-column">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Type your email"
              onChange={changeEmailHandler} value={email}
              required
            />
          </div>
          <div className="full-name flex-column">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="fullname"
              placeholder="Type your full name"
              onChange={changefullnameHandler} value={fullname}
              required
            />
          </div>
          <div className="password flex-column">
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
          <div className="password-confirmation flex-column">
            <label htmlFor="password-confirmation">Confirm Password</label>
            <input
              type={showPasswordConfirmation ? 'text' : 'password'}
              placeholder="Type your password"
              onChange={changePasswordConfirmationHandler} value={password_confirmation}
              required
            />
            <div className="eye-icon" onClick={handlePasswordConfirmationToggle} title="Show password">
              <Eye />
            </div>
          </div>
          <button className="submit" type="submit" disabled={!email || !fullname || !password || !password_confirmation}>
            Sign up
          </button>
        </form>
        <div className="error-messages">
          { registrationState.error && <strong>{registrationState.message}</strong> }
        </div>
        <div className="policies">
          <p>By signing up, you accept the <Link to="/">Data Policy</Link> and the <Link to="/">Cookies Policy</Link>.</p>
        </div>
        <div className="account">
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    )
  }
