import useUser from 'hooks/useUser'
import { isRegistration, isLogin } from 'src/setup'

const addSpace = (formName) => {
  return isRegistration(formName) ? 'separation' : ''
}

export default function Error ({formName}) {
  const {loginError, loginErrorMessage} = useUser()
  const {registrationError, registrationErrorMessage} = useUser()

  return (
    <div className={`error-messages ${addSpace(formName)}`}>
      { isLogin(formName) && loginError && <strong>{loginErrorMessage}</strong> }
      { isRegistration(formName) && registrationError && <strong>{registrationErrorMessage}</strong> }
    </div>
  )
}
