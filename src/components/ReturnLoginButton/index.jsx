import { urlPath } from 'src/setup'
import { useNavigate } from "react-router-dom";

export default function ReturnLoginButton () {
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate(urlPath.login)
  }

  return (
    <button onClick={redirectHandler} className="go-back-link">
      Go back to login
    </button>
  )
}
