import { urlPath } from 'src/setup'
import { Link } from 'wouter'

export default function PoliciesAcounts () {
  return (
    <>
      <div className="policies">
        <p>
          By signing up, you accept the <Link to={urlPath.home}>Data Policy</Link> and the
          <Link to={urlPath.home}>Cookies Policy</Link>.
        </p>
      </div>
      <div className="account">
        <p>Already have an account? <Link to={urlPath.login}>Log in</Link></p>
      </div>
    </>
  )
}
