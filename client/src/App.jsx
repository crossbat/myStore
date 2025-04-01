import { Routes, Route, Link } from 'react-router-dom'
import '/src/assets/App.css'
import Home from './assets/routes/home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
