import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { searchMovies } from '../../utils/api';

const MoviePages = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  // console.log(query);
  // console.log({ movies });

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        setMovies(await searchMovies(query));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getMovies();
  }, [query]);

  return (
    <div>
      <h2 aria-hidden="true">Search Results</h2>
      <div>
        {movies.length > 0
          ? movies.map(movie => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                </div>
              </Link>
            ))
          : query && <p>No results found.</p>}
      </div>
    </div>
  );
};

export default MoviePages;
