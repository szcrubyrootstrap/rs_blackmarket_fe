import { useState } from 'react'
import { capitalizeFirstLetter, urlPath } from 'src/setup'
import Input from 'templates/Form/input.jsx'
import SubmitButton from 'templates/Form/submitButton'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'

export default function ForgotPassword () {
  const [email, setEmail] = useState('')
  const [, navigate] = useLocation()
  const {resetPassword} = useUser()

  const submitHandler = (e) => {
    e.preventDefault()
    resetPassword({email})
  }

  const redirectHandler = () => {
    navigate(urlPath.login)
  }

  const changeEmailHandler = (e) => {
    setEmail(e.target.value)
  }

  const emailText = 'email'

  return (
    <>
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
        <SubmitButton text='Recover password' disabled={false} />
      </form>
      <button onClick={redirectHandler} className="go-back-link">
        Go back to login
      </button>
    </>
  )
}
