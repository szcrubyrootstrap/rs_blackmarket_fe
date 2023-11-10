import { Link } from 'wouter'
import { urlPath } from 'src/setup'

export default function ForgotPassword () {
  return (
    <div className="forgot-password flex-column">
      <Link to={urlPath.home}>I forgot my password.</Link>
    </div>
  )
}
