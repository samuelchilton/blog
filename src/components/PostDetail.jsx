import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/content/posts/${id}.json`)
      .then(res => {
        if (!res.ok) throw new Error('Post not found')
        return res.json()
      })
      .then(data => {
        setPost(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!post) {
    return <div className="empty-state">Post not found</div>
  }

  return (
    <article className="post-detail">
      <Link to="/posts" className="post-detail__back">
        ← Back to posts
      </Link>
      <h1 className="post-detail__title">{post.title}</h1>
      <time className="post-detail__date">{post.date}</time>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="post-detail__image"
        />
      )}
      <div className="post-detail__body">
        {post.body.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
