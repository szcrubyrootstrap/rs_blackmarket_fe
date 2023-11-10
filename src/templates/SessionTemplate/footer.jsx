import Error from 'templates/SessionTemplate/error'
import ForgotPassword from 'templates/SessionTemplate/forgotPassword'
import PoliciesAcounts from 'templates/SessionTemplate/policiesAccount'
import { isRegistration, isLogin } from 'src/setup'

export default function Footer ({formName}) {
  return (
    <div className="footer flex-column">
      <Error formName={formName} />
      { isLogin(formName) && <ForgotPassword /> }
      { isRegistration(formName) && <PoliciesAcounts /> }
    </div>
  )
}
