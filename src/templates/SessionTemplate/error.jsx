import useUser from 'hooks/useUser'
import { isRegistration } from 'src/setup'

const addSpace = (formName) => {
  return isRegistration(formName) ? 'separation' : ''
}

export default function Error ({formName}) {
  const {requestError, requestErrorMessage} = useUser()

  return (
    <div className={`error-messages ${addSpace(formName)}`}>
      { requestError && <strong>{requestErrorMessage}</strong> }
    </div>
  )
}
