import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="app">
      <div className="clock-card">
        <p className="clock-label">Current local time</p>
        <p className="clock-time">{format(time, "eeee, MMMM do yyyy 'at' h:mm:ss a")}</p>
      </div>
    </main>
  )
}

export default App
