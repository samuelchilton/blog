import { useState, useEffect } from 'react'
import IdeaCard from '../components/IdeaCard'

const IDEA_FILES = [
  'example-idea',
  'test',
  'foo',
  'idea'
]

export default function Ideas() {
  const [ideas, setIdeas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all(
      IDEA_FILES.map(file =>
        fetch(`${import.meta.env.BASE_URL}content/ideas/${file}.json`).then(res => res.json())
      )
    )
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date))
        setIdeas(sorted)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="loading">Loading ideas...</div>
  }

  if (ideas.length === 0) {
    return <div className="empty-state">No ideas yet</div>
  }

  return (
    <div>
      {ideas.map(idea => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}
    </div>
  )
}
