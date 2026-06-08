import { useState } from 'react'

export default function HogForm({ onAddHog }) {
  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [weight, setWeight] = useState('')
  const [greased, setGreased] = useState(false)
  const [medal, setMedal] = useState('bronze')
  const [image, setImage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim() || !specialty.trim() || !weight) return

    onAddHog({
      id: Date.now(),
      name: name.trim(),
      specialty: specialty.trim(),
      weight: Number(weight),
      greased,
      medal,
      image: image.trim() || `https://via.placeholder.com/180?text=${encodeURIComponent(name.trim())}`,
    })

    setName('')
    setSpecialty('')
    setWeight('')
    setGreased(false)
    setMedal('bronze')
    setImage('')
  }

  return (
    <form className="ui form hog-form" onSubmit={handleSubmit}>
      <h2>Add New Hog</h2>
      <div className="field">
        <label htmlFor="hog-name">Name</label>
        <input
          id="hog-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="hog-specialty">Specialty</label>
        <input
          id="hog-specialty"
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="hog-weight">Weight</label>
        <input
          id="hog-weight"
          type="number"
          value={weight}
          min="0"
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="hog-greased">Greased</label>
        <input
          id="hog-greased"
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </div>
      <div className="field">
        <label htmlFor="hog-medal">Highest Medal</label>
        <select id="hog-medal" value={medal} onChange={(e) => setMedal(e.target.value)}>
          <option value="gold">gold</option>
          <option value="silver">silver</option>
          <option value="bronze">bronze</option>
          <option value="platinum">platinum</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="hog-image">Image URL</label>
        <input
          id="hog-image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit" className="ui button primary">
        Add Hog
      </button>
    </form>
  )
}
