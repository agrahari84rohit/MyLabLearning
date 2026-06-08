import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.jsx'

test('renders blog title and posts from props', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: /Flatiron Journal/i })).toBeInTheDocument()
  expect(screen.getByText(/About this blog/i)).toBeInTheDocument()
  expect(screen.getByText(/Write better React components/i)).toBeInTheDocument()
})
