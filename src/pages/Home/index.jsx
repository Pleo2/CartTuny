import { useEffect, useState } from 'react'
import ListProduct from '../../components/ListProduct'
import Item from '../../components/ListProduct/Item'
import CartIcon from '../../components/CartIcon'
import CategoriesSelector from '../../components/CategoriesSelector/index.jsx'
import filterCategories from '../../services/filterCategories'
import Header from '../../components/Header'

export default function Home({ products }) {
  const categories = filterCategories(products)
  const [filterProduct, setFilterProducts] = useState(products)

  return (
    <>
      <CategoriesSelector
        categories={categories}
        setFilter={setFilterProducts}
        products={products}
      />
      {filterProduct && (
        <ListProduct
          products={filterProduct}
          render={product => (
            <Item
              key={product.id}
              id={product.id}
              price={product.price}
              titleProduct={product.title}
              imgSrc={product.images[0]}
              imgSrcDesktop={product.images[1]}
              imgSrcLaptop={product.images[2]}
            />
          )}
        />
      )}
    </>
  )
}
