import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'
import { urlPath, capitalizeFirstLetter, requestHeaders } from 'src/setup'
import Input from 'templates/Form/input.jsx'
import SubmitButton from 'templates/Form/submitButton'
import ReturnLoginButton from 'components/ReturnLoginButton'

export default function UpdatePasswordForm () {
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const [, navigate] = useLocation()
  const {isLogged, updatePassword} = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate(urlPath.home)
    }
  }, [isLogged, navigate])

  const submitHandler = (e) => {
    e.preventDefault()

    const headers = requestHeaders()
    updatePassword({ password, password_confirmation, headers })
  }

  const changePasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  const changePasswordConfirmationHandler = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  const handlePasswordToggle = () => setShowPassword(!showPassword)
  const handlePasswordConfirmationToggle = () => setShowPasswordConfirmation(!showPasswordConfirmation)
  const passwordText = 'password'
  const passwordConfirmationText = 'password-confirmation'

  return (
    <>
      <form onSubmit={submitHandler} className='flex-column'>
        <Input
          label={`New ${capitalizeFirstLetter(passwordText)}`}
          type={showPassword ? 'text' : 'password'}
          value={password}
          name={passwordText}
          className={passwordText}
          placeholder={`Enter your ${passwordText}`}
          onChange={changePasswordHandler}
          required={true}
          eyeIcon={handlePasswordToggle}
        />
        <Input
          label='Re-type new Password'
          type={showPasswordConfirmation ? 'text' : 'password'}
          value={password_confirmation}
          name={passwordConfirmationText}
          className={passwordConfirmationText}
          placeholder={`Re-enter your ${passwordText}`}
          onChange={changePasswordConfirmationHandler}
          required={true}
          eyeIcon={handlePasswordConfirmationToggle}
        />
        <SubmitButton text='Confirm new password' disabled={false} />
      </form>
      <ReturnLoginButton />
    </>
  )
}
