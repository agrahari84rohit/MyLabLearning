// Article component renders a single post preview using title, date, and preview props.
export default function Article({ title, date, preview }) {
  return (
    <article className="article-card">
      <h3>{title}</h3>
      <p className="article-date">{date}</p>
      <p className="article-preview">{preview}</p>
    </article>
  )
}
