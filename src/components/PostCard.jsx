import { useNavigate } from 'react-router-dom'

export default function PostCard({ post }) {
  const navigate = useNavigate()

  const excerpt = post.body.length > 120
    ? post.body.substring(0, 120) + '...'
    : post.body

  return (
    <article
      className="post-item"
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <h2 className="post-item__title">{post.title}</h2>
      <div className="post-item__meta">
        <time className="post-item__date">{post.date}</time>
      </div>
      <p className="post-item__excerpt">{excerpt}</p>
    </article>
  )
}
