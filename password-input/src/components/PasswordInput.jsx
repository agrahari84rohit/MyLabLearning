import React from 'react'

// PasswordInput component with change event tracking
// Connected to: App component
// Tracks password input changes and logs to console

export default function PasswordInput() {
  const handleChange = (e) => {
    console.log('Entering password…')
    console.log('Current password length:', e.target.value.length)
  }

  return (
    <div className="password-input-container">
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        placeholder="Enter your password"
      />
    </div>
  )
}
