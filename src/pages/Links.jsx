import { useState, useEffect } from 'react'
import LinkCard from '../components/LinkCard'

const LINK_FILES = [
  'example-link'
]

export default function Links() {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all(
      LINK_FILES.map(file =>
        fetch(`/content/links/${file}.json`).then(res => res.json())
      )
    )
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date))
        setLinks(sorted)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="loading">Loading links...</div>
  }

  if (links.length === 0) {
    return <div className="empty-state">No links yet</div>
  }

  return (
    <div>
      {links.map(link => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  )
}
