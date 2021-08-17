// Модули
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

// Компоненты
import { fetchMoviesByQuery } from '../services/movies-api';
import Searchbar from '../components/Searchbar/Searchbar';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const queryMovies = new URLSearchParams(location.search).get('queryBy');
  const [query, setQuery] = useState(queryMovies || '');
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesByQuery(query).then(setMoviesByQuery);
  }, [query]);

  const onChangeQuery = query => {
    setQuery(query);
    history.push({
      ...location,
      search: `queryBy=${query}`,
    });
    setMoviesByQuery(null);
    setError(null);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />

      {error && <p>Sorry! Somethimg went wrong. Try again, please!</p>}

      <ul>
        {moviesByQuery &&
          moviesByQuery.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}