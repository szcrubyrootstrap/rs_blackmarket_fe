import { Link } from 'wouter'
import useUser from 'hooks/useUser'
import { urlPath } from 'src/setup'

export default function Header () {
  const {isLogged, logout} = useUser()

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <header>
      {
        isLogged
        ? <Link href="#" onClick={handleClick}>Logout</Link>
        : <Link to={urlPath.login}>Login</Link>
      }
    </header>
  )
}
