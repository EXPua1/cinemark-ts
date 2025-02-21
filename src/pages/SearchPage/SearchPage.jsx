import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from '../../utils/api';
import Section from '../../components/Section/Section';
import Container from '../../components/Сontainer/Container';
import MoviesList from '../../components/MoviesList/MoviesList';

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  //   console.log(query);
  //   console.log({ items });

  useEffect(() => {
    if (!query) return;

    const getItems = async () => {
      try {
        setItems(await searchMovies(query));
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    getItems();
  }, [query]);

  const moviesList = items.filter(item => item.media_type === 'movie');
  const tvShowsList = items.filter(item => item.media_type === 'tv');
  const peopleList = items.filter(item => item.media_type === 'person');

  return (
    <Container>
      <>
        <div>
          {items.length > 0 ? (
            <>
              {moviesList.length > 0 && (
                <Section>
                  <h2>Movies</h2>
                  <MoviesList items={moviesList} variant="grid" />
                </Section>
              )}

              {tvShowsList.length > 0 && (
                <Section>
                  <h2>TV Shows</h2>
                  <MoviesList items={tvShowsList} variant="grid" />
                </Section>
              )}

              {peopleList.length > 0 && (
                <Section>
                  <h2>People</h2>
                  <MoviesList items={peopleList} variant="list" />
                </Section>
              )}
            </>
          ) : (
            query && <p>No results found.</p>
          )}
        </div>
      </>
    </Container>
  );
};

export default SearchPage;
