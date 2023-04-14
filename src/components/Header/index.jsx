import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../CartIcon'
import CartModal from '../CartModal'
import { CartContext } from '../../context/cart'

export default function Header() {
  const { showCart, setShowCart } = useContext(CartContext)

  const openCart = () => {
    setShowCart(prev => !prev)
  }

  return (
    <header className="container-section h-20 m-auto w-3/4 flex justify-between items-center">
      <Link
        to="/"
        className="font-sans font-bold text-4xl text-black mb-5 text-left"
      >
        CartTuny
      </Link>
      <div
        className="container-cart"
        onClick={openCart}
      >
        <CartIcon />
      </div>
      <CartModal showCart={showCart}/>
     
    </header>
  )
}
