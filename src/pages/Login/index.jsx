import Login from 'components/Login'
import { useLocation } from 'wouter'

export default function LoginPage () {
  const [, navigate] = useLocation()

  const redirectHandler = () => {
    navigate('/registration')
  }

  return (
    <div className="background flex-column">
      <div className="login flex-column">
        <Login />
        <div className="registration flex-column">
          <p>Don't have an account?</p>
          <button onClick={redirectHandler} className="registration-button">Sign up</button>
        </div>
      </div>
    </div>
  )
}
