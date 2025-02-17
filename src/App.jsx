
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import HomePage from './pages/HomePage/Home'

function App() {


  return (
    <>
      <div>try this routing</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>

  )
}

export default App
