import Template from 'templates/SessionTemplate/template'
import ForgotPassword from 'components/ForgotPassword'
import ForgotPasswordMessage from 'components/ForgotPassword/message'

export default function ResetPassword () {
  return (
    <Template
      formComponent={ForgotPassword}
      messageComponent={ForgotPasswordMessage}
    />
  )
}
