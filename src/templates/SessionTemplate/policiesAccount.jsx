import { urlPath } from 'src/setup'
import { Link } from 'react-router-dom'

export default function PoliciesAcounts () {
  return (
    <>
      <div className="policies">
        <p>
          By signing up, you accept the <Link to={urlPath.dashboard}>Data Policy</Link> and the
          <Link to={urlPath.dashboard}>Cookies Policy</Link>.
        </p>
      </div>
      <div className="account">
        <p>Already have an account? <Link to={urlPath.login}>Log in</Link></p>
      </div>
    </>
  )
}
