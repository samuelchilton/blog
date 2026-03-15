import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header__profile">
        <img
          src="https://www.gravatar.com/avatar/?d=mp&s=200"
          alt="Sam"
          className="header__avatar"
        />
        <div className="header__info">
          <h1 className="header__name">Sam</h1>
          <p className="header__bio">PNW Software Engineer</p>
        </div>
      </div>
      <nav className="header__nav">
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/links">Links</NavLink>
        <NavLink to="/ideas">Ideas</NavLink>
      </nav>
    </header>
  )
}
