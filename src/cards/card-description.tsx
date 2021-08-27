interface Description {
  title: string
  date: string
  author: string
  body: string
}
export function DescriptionCard({ title, date, author, body }: Description) {
  return (
    <div className="card__description">
      <h2 className="title">{title}</h2>
      <p className="info">
        <span className="date">{date}</span>
        <span> / </span>
        <a href="http://localhost:8080" className="author">
          {author}
        </a>
      </p>
      <p className="summary">{body}</p>
      <a className="article-link" href="http://localhost:8080">
        continue reading...
      </a>
    </div>
  )
}
