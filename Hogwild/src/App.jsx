import { useState, useMemo } from 'react'
import porkersData from './porkers_data.jsx'
import HogList from './components/HogList.jsx'
import HogForm from './components/HogForm.jsx'
import './App.css'

function App() {
  const [hogs, setHogs] = useState(porkersData)
  const [showGreasedOnly, setShowGreasedOnly] = useState(false)
  const [sortBy, setSortBy] = useState('name')
  const [hiddenHogIds, setHiddenHogIds] = useState([])

  const visibleHogs = useMemo(() => {
    return hogs
      .filter((hog) => !hiddenHogIds.includes(hog.id))
      .filter((hog) => (showGreasedOnly ? hog.greased : true))
      .sort((a, b) => {
        if (sortBy === 'weight') {
          return a.weight - b.weight
        }
        return a.name.localeCompare(b.name)
      })
  }, [hogs, showGreasedOnly, sortBy, hiddenHogIds])

  const handleAddHog = (newHog) => {
    setHogs((current) => [...current, newHog])
  }

  const handleHideHog = (hogId) => {
    setHiddenHogIds((current) => [...current, hogId])
  }

  return (
    <div className="app-shell">
      <header className="ui segment header-segment">
        <h1>Hogwild</h1>
        <p>Explore all hogs, view their stats, hide them, and add new pig pals.</p>
      </header>

      <section className="ui segment controls-segment">
        <div className="field checkbox-field">
          <input
            id="filter-greased"
            type="checkbox"
            checked={showGreasedOnly}
            onChange={(e) => setShowGreasedOnly(e.target.checked)}
          />
          <label htmlFor="filter-greased">Show greased hogs only</label>
        </div>

        <div className="field">
          <label htmlFor="sort-by">Sort hogs by</label>
          <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </section>

      <section className="ui segment form-segment">
        <HogForm onAddHog={handleAddHog} />
      </section>

      <section className="ui segment list-segment">
        <HogList hogs={visibleHogs} onHide={handleHideHog} />
      </section>
    </div>
  )
}

export default App
