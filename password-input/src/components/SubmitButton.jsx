import React from 'react'

// SubmitButton component with mouse event tracking
// Connected to: App component
// Tracks mouse enter and leave events on the button

export default function SubmitButton() {
  const handleEnter = () => {
    console.log('Mouse Entering')
  }

  const handleLeave = () => {
    console.log('Mouse Exiting')
  }

  return (
    <button
      className="submit-button"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  )
}
