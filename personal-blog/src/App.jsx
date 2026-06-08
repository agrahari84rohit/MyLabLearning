import Header from './components/Header.jsx'
import About from './components/About.jsx'
import ArticleList from './components/ArticleList.jsx'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const blogName = 'Flatiron Journal'
  const aboutText =
    'A blog for sharing learning projects, tutorials, and notes about React development.'

  const posts = [
    {
      id: 'post-1',
      title: 'Write better React components',
      date: 'June 1, 2026',
      preview:
        'Learn how to structure small reusable components and pass props cleanly through your app.',
    },
    {
      id: 'post-2',
      title: 'Building a blog with React',
      date: 'June 4, 2026',
      preview:
        'See how a component tree can keep your UI organized while rendering dynamic data.',
    },
    {
      id: 'post-3',
      title: 'Styling your Vite app',
      date: 'June 7, 2026',
      preview:
        'Simple CSS rules can make your blog feel polished and easy to read on all screen sizes.',
    },
  ]

  return (
    <main className="app-shell">
      <Header name={blogName} />
      <About image={heroImg} about={aboutText} />
      <ArticleList posts={posts} />
    </main>
  )
}

export default App
