import { Link } from 'wouter'
import Registration from 'components/Registration'
import IMAGES from 'images/images'
import useUser from 'hooks/useUser'

export default function LoginPage () {
  const {registrationError, registrationErrorMessage} = useUser()

  return (
    <div className="background flex-column">
      <div className="registration-page flex-column">
        <div className="container-registration flex-column">
          <img src={IMAGES.union} alt="Black market logo" />
          <Registration />
          <div className="footer flex-column">
            <div className="error-messages">
              { registrationError && <strong>{registrationErrorMessage}</strong> }
            </div>
            <div className="policies">
              <p>By signing up, you accept the <Link to="/">Data Policy</Link> and the <Link to="/">Cookies Policy</Link>.</p>
            </div>
            <div className="account">
              <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
