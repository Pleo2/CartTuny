export default function ListProduct({ products, render, children }) {
  return (
    <>
    <ul className='flex mt-8 flex-wrap justify-center gap-2'>
    {products?.map((product) => render(product))}
      {children}
    </ul>
    </>
  )
}
