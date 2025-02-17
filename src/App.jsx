import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/Home';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
