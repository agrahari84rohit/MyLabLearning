import HogCard from './HogCard'

export default function HogList({ hogs, onHide }) {
  if (hogs.length === 0) {
    return <p>No hogs available</p>
  }

  return (
    <div className="ui cards hog-list">
      {hogs.map((hog) => (
        <HogCard key={hog.id} hog={hog} onHide={onHide} />
      ))}
    </div>
  )
}
