import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import TvPage from './pages/TvPage/TvPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import SearchPage from './pages/SearchPage/SearchPage';

import './App.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/:type/:id" element={<DetailsPage />}>
          {/* <Route path="comments" element={<MovieComments />} /> */}
          {/* <Route path="review" element={<MovieReviews />} /> */}
        </Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
