import { Link } from "react-router-dom"

export default function subtotalSection() {
  return (
      <div className="container-subtotal">
        <p>SubTotal</p>
        <p>{0.0}$</p>
        <Link to="/cart-details">go to cart</Link>
      </div>
  )
}
