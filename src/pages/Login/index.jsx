import Login from 'components/Login'
import { useLocation, Link } from 'wouter'
import IMAGES from 'images/images'
import useUser from 'hooks/useUser'
import { urlPath } from 'src/setup'

export default function LoginPage () {
  const [, navigate] = useLocation()
  const {loginError, loginErrorMessage} = useUser()

  const redirectHandler = () => {
    navigate(urlPath.registration)
  }

  return (
    <div className="background flex-column">
      <div className="login flex-column">
        <div className="container flex-column">
          <img src={IMAGES.union} alt="Black market logo" />
          <Login />
          <div className="footer flex-column">
            <div className="error-messages">
              { loginError && <strong>{loginErrorMessage}</strong> }
            </div>
            <div className="forgot-password flex-column">
              <Link to={urlPath.home}>I forgot my password.</Link>
            </div>
          </div>
        </div>
        <div className="registration flex-column">
          <p>Don't have an account?</p>
          <button onClick={redirectHandler} className="registration-button">Sign up</button>
        </div>
      </div>
    </div>
  )
}
