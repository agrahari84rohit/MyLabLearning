import Article from './Article.jsx'

// ArticleList receives an array of posts and renders an Article component for each item.
export default function ArticleList({ posts }) {
  return (
    <section className="article-list">
      <h2>Latest Posts</h2>
      <div className="article-grid">
        {posts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
          />
        ))}
      </div>
    </section>
  )
}
