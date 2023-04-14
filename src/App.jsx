import { products as initialProducts } from './mocks/products.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import './App.css'
import Header from './components/Header'
import { CartProvider } from './context/cart'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index="/"
            element={<Home products={initialProducts} />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
