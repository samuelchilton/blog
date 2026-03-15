import { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'

const POST_FILES = [
  'example-post'
]

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all(
      POST_FILES.map(file =>
        fetch(`${import.meta.env.BASE_URL}content/posts/${file}.json`).then(res => res.json())
      )
    )
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date))
        setPosts(sorted)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="loading">Loading posts...</div>
  }

  if (posts.length === 0) {
    return <div className="empty-state">No posts yet</div>
  }

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
