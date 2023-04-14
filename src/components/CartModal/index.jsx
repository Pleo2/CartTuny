import { createPortal } from 'react-dom'
import SubtotalSection from './SubtotalSection'
import { Link } from 'react-router-dom'

export default function CartModal({showCart}) {
  return (
    <>
      {showCart && createPortal(<>
        <>
          <div className='fixed w-32 h-screen bg-red-500 top-0 right-0'>
            <SubtotalSection />
            {/* <ListProductCart
              render={(product) => (
                <ItemCart
                  img={itemCart}
                />
              )}
            /> */}
          </div>
        </>
      </>, document.getElementById('cart-modal'))}
    </>
  )
}
