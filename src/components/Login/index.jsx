import { useState, useEffect } from 'react'
import { useLocation, Link } from 'wouter'
import useUser from 'hooks/useUser'
import Eye from 'components/Icons/Eye'
import IMAGES from 'images/images'

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

  const handlePasswordToggle = () => setShowPassword(!showPassword)

  return (
    <div className="container flex-column">
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
        <button className="submit" type="submit">Login</button>
      </form>
      <div className="footer flex-column">
        <div className="error-messages">
          { loginError && <strong>{loginErrorMessage}</strong> }
        </div>
        <div className="forgot-password flex-column">
          <Link to="/">I forgot my password.</Link>
        </div>
      </div>
    </div>
  )
}
