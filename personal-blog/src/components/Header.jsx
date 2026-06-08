import Home from './Home.jsx'
import Links from './Links.jsx'

// Header component displays the name of the blog and a small subtitle.
// It also includes a welcome note and quick section links.
export default function Header({ name }) {
  return (
    <header className="blog-header">
      <h1>{name}</h1>
      <p className="blog-tagline">A simple React blog built with Vite</p>
      <Home />
      <Links />
    </header>
  )
}
