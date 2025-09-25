import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './Layout'
import Projects from './pages/Projects'
import Courses from './pages/Courses'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}
