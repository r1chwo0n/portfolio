import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './Layout'
import Projects from './pages/Projects'
import Certificate from './pages/Certificate'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
          {/* <Route path="/certificate" element={<Certificate />} /> */}
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}
