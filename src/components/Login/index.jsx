import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from 'hooks/useUser'
import { urlPath, capitalizeFirstLetter } from 'src/setup'
import Input from 'templates/Form/input.jsx'
import SubmitButton from 'templates/Form/submitButton'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
  const emailText = 'email'
  const passwordText = 'password'

  return (
    <form onSubmit={submitHandler} className='flex-column'>
      <Input
        label={capitalizeFirstLetter(emailText)}
        type={emailText}
        value={email}
        name={emailText}
        className={emailText}
        placeholder={`Type your ${emailText}`}
        onChange={changeEmailHandler}
        required={true}
      />
      <Input
        label={capitalizeFirstLetter(passwordText)}
        type={showPassword ? 'text' : 'password'}
        value={password}
        name={passwordText}
        className={passwordText}
        placeholder={`Type your ${passwordText}`}
        onChange={changePasswordHandler}
        required={true}
        iconEvent={handlePasswordToggle}
        iconClass='eye'
        iconTitle='Show password'
      />
      <SubmitButton text='Login' disabled={false} />
    </form>
  )
}
