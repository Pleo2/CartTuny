export default function filterCategories (products) {
 return products?.reduce((acc, element) =>{
      if (acc.indexOf(element?.category) === -1) {
        acc.push(element?.category)
      }
      return acc
    }, [])
}