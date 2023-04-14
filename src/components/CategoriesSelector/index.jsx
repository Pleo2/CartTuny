import useCategories from '../../hooks/useCategories'
import { useNavigate } from 'react-router-dom'

export default function CategoriesSelector({
  products,
  categories,
  setFilter,
}) {
  const navigate = useNavigate()
  const { setIndexCategory } = useCategories({
    products,
    categories,
    setFilter,
  })

  const handleClips = index => {
    setIndexCategory(index)
  }

  return (
    <div className="containerCategories flex justify-center gap-2">
      <button
        type="button"
        className="bg-transparent hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-1 px-3 border hover:border-transparent rounded"
        onClick={() => {setFilter(products)}}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className="bg-transparent hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-1 px-3 border hover:border-transparent rounded"
          onClick={() => handleClips(index)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
