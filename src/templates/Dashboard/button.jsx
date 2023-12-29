import { urlPath } from 'src/setup'
import { useNavigate } from 'react-router-dom'
import ShoppingCart from 'components/Icons/ShoppingCart'

export default function Button ({showText}) {
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate(urlPath.login)
  }

  return(
    <button onClick={redirectHandler}>
      { showText && 'Shopping Cart' }
      <ShoppingCart />
    </button>
  )
}
