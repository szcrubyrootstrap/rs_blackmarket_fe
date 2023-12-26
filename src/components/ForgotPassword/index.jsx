import { useState } from 'react'
import { capitalizeFirstLetter } from 'src/setup'
import Input from 'templates/Form/input.jsx'
import SubmitButton from 'templates/Form/submitButton'
import ReturnLoginButton from 'components/ReturnLoginButton'
import useUser from 'hooks/useUser'

export default function ForgotPassword () {
  const [email, setEmail] = useState('')
  const {resetPassword} = useUser()

  const submitHandler = (e) => {
    e.preventDefault()
    resetPassword({email})
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
      <ReturnLoginButton />
    </>
  )
}
