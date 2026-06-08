import { useState } from 'react'

export default function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false)

  const handleToggleDetails = () => {
    setShowDetails((current) => !current)
  }

  return (
    <div aria-label="hog card" className="ui card hog-card">
      <div className="image-container" onClick={handleToggleDetails} role="button" tabIndex={0}>
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content" onClick={handleToggleDetails} role="button" tabIndex={0}>
        <h3>{hog.name}</h3>
      </div>
      {showDetails && (
        <div className="extra content">
          <p>
            <strong>Specialty:</strong> {hog.specialty}
          </p>
          <p>
            <strong>Weight:</strong> {hog.weight}
          </p>
          <p>
            <strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Highest Medal:</strong> {hog.medal}
          </p>
        </div>
      )}
      <div className="extra content">
        <button type="button" className="ui button" onClick={() => onHide(hog.id)}>
          Hide Me
        </button>
      </div>
    </div>
  )
}
