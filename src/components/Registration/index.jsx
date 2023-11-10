import { useState } from 'react'
import useUser from 'hooks/useUser'
import Input from 'templates/Form/input.jsx'
import { capitalizeFirstLetter } from 'src/setup'
import SubmitButton from 'templates/Form/submitButton'

export default function Registration () {
  const [email, setEmail] = useState('')
  const [fullname, setFullnameHandler] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const {registrate} = useUser()

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

  const emailText = 'email'
  const fullnameText = 'fullname'
  const passwordText = 'password'
  const passwordConfirmationText = 'password-confirmation'

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
        label={capitalizeFirstLetter(fullnameText)}
        type='text'
        value={fullname}
        name={fullnameText}
        className={fullnameText}
        placeholder={`Type your ${fullnameText}`}
        onChange={changefullnameHandler}
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
        eyeIcon={handlePasswordToggle}
      />
      <Input
        label='Confirm Password'
        type={showPasswordConfirmation ? 'text' : 'password'}
        value={password_confirmation}
        name={passwordConfirmationText}
        className={passwordConfirmationText}
        placeholder={`Type your ${passwordText}`}
        onChange={changePasswordConfirmationHandler}
        required={true}
        eyeIcon={handlePasswordConfirmationToggle}
      />
      <SubmitButton text='Sign up' disabled={!email || !fullname || !password || !password_confirmation} />
    </form>
  )
}
