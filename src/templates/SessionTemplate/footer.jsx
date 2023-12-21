import Error from 'templates/SessionTemplate/error'
import ForgotPassword from 'templates/SessionTemplate/forgotPassword'
import PoliciesAcounts from 'templates/SessionTemplate/policiesAccount'
import { isRegistration, isLogin } from 'src/setup'

const addPadding = (formName) =>  isRegistration(formName) ? 'no-padding' : '';

export default function Footer ({formName}) {
  return (
    <div className={`footer flex-column ${addPadding(formName)}`}>
      <Error formName={formName} />
      { isLogin(formName) && <ForgotPassword /> }
      { isRegistration(formName) && <PoliciesAcounts /> }
    </div>
  )
}
