export default function IdeaCard({ idea }) {
  return (
    <article className="idea-item">
      <div className="idea-item__header">
        <h3 className="idea-item__title">{idea.title}</h3>
        <time className="idea-item__date">{idea.date}</time>
      </div>
      <p className="idea-item__body">{idea.body}</p>
    </article>
  )
}
