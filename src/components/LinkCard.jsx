export default function LinkCard({ link }) {
  const domain = new URL(link.url).hostname.replace('www.', '')

  return (
    <a
      href={link.url}
      className="link-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="link-item__title">{link.title}</h3>
      <p className="link-item__description">{link.description}</p>
      <span className="link-item__url">{domain}</span>
    </a>
  )
}
