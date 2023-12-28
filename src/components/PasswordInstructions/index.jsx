import Inbox from 'components/PasswordInstructions/inbox'
import { Link } from 'wouter'
import { urlPath } from 'src/setup'

export default function PasswordInstructions () {
  return(
    <>
      <Inbox />
      <p>We have just sent you an email!</p>
      <p>Please follow the instructions in order to reset your password.</p>

      <Link to={urlPath.login}>Go back to Login</Link>
    </>
  )
}
