import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductList from './ProductList.jsx'

const products = [
  { id: 'prod-1', name: 'Wireless Keyboard', price: 49.99, inStock: true },
  { id: 'prod-2', name: 'Bluetooth Speaker', price: 79.95, inStock: false },
]

describe('ProductList', () => {
  it('renders product cards correctly', () => {
    render(<ProductList products={products} />)

    expect(screen.getByText('Wireless Keyboard')).toBeInTheDocument()
    expect(screen.getByText('Bluetooth Speaker')).toBeInTheDocument()
    expect(screen.getByText('$49.99')).toBeInTheDocument()
    expect(screen.getByText('$79.95')).toBeInTheDocument()
  })

  it('handles out-of-stock products using conditional rendering', () => {
    render(<ProductList products={products} />)

    expect(screen.getByText(/Out of stock/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Notify me/i })).toBeDisabled()
  })

  it('displays an empty state when there are no products', () => {
    render(<ProductList products={[]} />)

    expect(screen.getByText(/All products are currently out of stock/i)).toBeInTheDocument()
  })
})
