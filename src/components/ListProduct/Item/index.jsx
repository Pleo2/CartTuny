import { Link } from 'react-router-dom'

export default function Item({
  titleProduct,
  imgSrc,
  imgSrcDesktop,
  imgSrcLaptop,
  id,
  price
}) {
  return (
    <article className="relative mb-4 flex flex-col items-center w-60 h-auto">
      <picture className="w-3/4 h-3/4 bg-white">
        <source
          media="(min-width: 640px)"
          srcSet={imgSrcLaptop}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={imgSrcDesktop}
        />
        <img
          src={imgSrc}
          alt={titleProduct}
          className="h-full w-full object-contain"
        />
      </picture>
      <Link
        to={`./productsDetails/${titleProduct}${id}`}
        className="font-sans font-semibold text-gray-600 hover:text-gray-300"
      >
        {titleProduct}
      </Link>
      <p
        className='font-medium'
      >{price} $</p>
    </article>
  )
}
