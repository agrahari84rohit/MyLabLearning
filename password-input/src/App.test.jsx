import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.jsx'

describe('App', () => {
  it('renders the main title and description', () => {
    render(<App />)
    
    expect(screen.getByRole('heading', { name: /Password Input Tracker/i })).toBeInTheDocument()
    expect(screen.getByText(/This application tracks password input changes/i)).toBeInTheDocument()
  })

  it('renders PasswordInput and SubmitButton components', () => {
    render(<App />)
    
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Submit Password/i })).toBeInTheDocument()
  })

  it('displays console instructions', () => {
    render(<App />)
    
    expect(screen.getByText(/Open the browser console to see the event logs/i)).toBeInTheDocument()
  })
})
