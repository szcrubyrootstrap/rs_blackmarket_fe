import { urlPath } from 'src/setup'
import { useLocation } from 'wouter'

export default function ReturnLoginButton () {
  const [, navigate] = useLocation()
  const redirectHandler = () => {
    navigate(urlPath.login)
  }

  return (
    <button onClick={redirectHandler} className="go-back-link">
      Go back to login
    </button>
  )
}
