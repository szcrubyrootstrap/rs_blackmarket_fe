import { urlPath } from 'src/setup'
import { useNavigate } from "react-router-dom";

export default function Registration () {
  const navigate = useNavigate()
  const redirectHandler = () => {
    navigate(urlPath.registration)
  }

  return (
    <div className="registration flex-column">
      <p>Don't have an account?</p>
      <button onClick={redirectHandler} className="registration-button">Sign up</button>
    </div>
  )
}
