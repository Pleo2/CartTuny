
export default function filterCategory(products, filterCategory) {
  const filterProduct =  products
        .filter(item => item.category === filterCategory)
        .map(item => item)
  return filterProduct
}
