import React from 'react'
import PasswordInput from './components/PasswordInput.jsx'
import SubmitButton from './components/SubmitButton.jsx'
import './App.css'

// App component - root component that combines PasswordInput and SubmitButton
// Connected to: PasswordInput, SubmitButton
function App() {
  return (
    <main className="app">
      <h1>Password Input Tracker</h1>
      <p>
        This application tracks password input changes and mouse movements on the submit button.
      </p>
      <div className="form-container">
        <PasswordInput />
        <SubmitButton />
      </div>
      <p className="instructions">
        Open the browser console to see the event logs.
      </p>
    </main>
  )
}

export default App
