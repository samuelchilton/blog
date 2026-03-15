import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Posts from './pages/Posts'
import Links from './pages/Links'
import Ideas from './pages/Ideas'
import PostDetail from './components/PostDetail'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/links" element={<Links />} />
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </main>
    </div>
  )
}
