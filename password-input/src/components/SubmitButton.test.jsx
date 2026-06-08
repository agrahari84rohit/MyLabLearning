import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SubmitButton from './SubmitButton.jsx'

describe('SubmitButton', () => {
  it('renders submit button with correct text', () => {
    render(<SubmitButton />)
    
    expect(screen.getByRole('button', { name: /Submit Password/i })).toBeInTheDocument()
  })

  it('calls handleEnter on mouse enter', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<SubmitButton />)
    
    const button = screen.getByRole('button', { name: /Submit Password/i })
    fireEvent.mouseEnter(button)
    
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Entering')
    
    consoleSpy.mockRestore()
  })

  it('calls handleLeave on mouse leave', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<SubmitButton />)
    
    const button = screen.getByRole('button', { name: /Submit Password/i })
    fireEvent.mouseLeave(button)
    
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Exiting')
    
    consoleSpy.mockRestore()
  })

  it('handles mouse enter and leave in sequence', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<SubmitButton />)
    
    const button = screen.getByRole('button', { name: /Submit Password/i })
    fireEvent.mouseEnter(button)
    fireEvent.mouseLeave(button)
    fireEvent.mouseEnter(button)
    fireEvent.mouseLeave(button)
    
    expect(consoleSpy).toHaveBeenCalledTimes(4)
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Mouse Entering')
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Mouse Exiting')
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Mouse Entering')
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Mouse Exiting')
    
    consoleSpy.mockRestore()
  })

  it('handles rapid mouse enter and leave events', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<SubmitButton />)
    
    const button = screen.getByRole('button', { name: /Submit Password/i })
    
    for (let i = 0; i < 5; i++) {
      fireEvent.mouseEnter(button)
      fireEvent.mouseLeave(button)
    }
    
    expect(consoleSpy).toHaveBeenCalledTimes(10)
    
    consoleSpy.mockRestore()
  })
})
