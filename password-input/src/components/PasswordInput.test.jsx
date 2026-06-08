import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PasswordInput from './PasswordInput.jsx'

describe('PasswordInput', () => {
  it('renders password input field with label', () => {
    render(<PasswordInput />)
    
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Enter your password/i)).toBeInTheDocument()
  })

  it('calls handleChange when input value changes', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<PasswordInput />)
    
    const input = screen.getByPlaceholderText(/Enter your password/i)
    fireEvent.change(input, { target: { value: 'test123' } })
    
    expect(consoleSpy).toHaveBeenCalledWith('Entering password…')
    expect(consoleSpy).toHaveBeenCalledWith('Current password length:', 7)
    
    consoleSpy.mockRestore()
  })

  it('handles multiple rapid input changes', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<PasswordInput />)
    
    const input = screen.getByPlaceholderText(/Enter your password/i)
    fireEvent.change(input, { target: { value: 'a' } })
    fireEvent.change(input, { target: { value: 'ab' } })
    fireEvent.change(input, { target: { value: 'abc' } })
    
    expect(consoleSpy).toHaveBeenCalledTimes(6) // 2 logs per change * 3 changes
    expect(consoleSpy).toHaveBeenCalledWith('Current password length:', 3)
    
    consoleSpy.mockRestore()
  })

  it('handles empty password input', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<PasswordInput />)
    
    const input = screen.getByPlaceholderText(/Enter your password/i)
    // Set a value first, then clear it
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.change(input, { target: { value: '' } })
    
    expect(consoleSpy).toHaveBeenCalledWith('Current password length:', 0)
    
    consoleSpy.mockRestore()
  })
})
