import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'
import Eye from 'components/Icons/Eye'
import { urlPath } from 'src/setup'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [, navigate] = useLocation()
  const {isLogged, login} = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate(urlPath.home)
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
  )
}
