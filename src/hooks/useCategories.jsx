import { useState, useEffect } from 'react'
import filterProducts from  '../services/filterProducts'

export default function useCategories({ products, categories, setFilter }) {
  const [indexCategory, setIndexCategory] = useState(null)

  useEffect(() => {
    if (indexCategory !== null) {
      setFilter(filterProducts(products, categories[indexCategory]))
    }
  }, [indexCategory])
  return {
    setIndexCategory
  }
}
