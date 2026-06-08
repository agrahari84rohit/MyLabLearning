import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [category, setCategory] = useState('all')
  const [cartItems, setCartItems] = useState([])

  const filteredProducts = sampleProducts.filter((product) => {
    if (category === 'all') return true
    return product.category === category
  })

  const handleToggleDarkMode = () => {
    setDarkMode((current) => !current)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleAddToCart = (product) => {
    setCartItems((current) => [...current, product])
  }

  return (
    <div style={{ background: darkMode ? '#121212' : '#fff', color: darkMode ? '#fff' : '#000', minHeight: '100vh', padding: '24px' }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      <div style={{ margin: '16px 0' }}>
        <label htmlFor="category-select">Filter by Category: </label>
        <select id="category-select" value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList products={filteredProducts} onAdd={handleAddToCart} />

      <Cart items={cartItems} />
    </div>
  )
}

export default App
