import { Switch, Route, Redirect } from 'react-router';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import PageLoader from './components/Loader/Loader';

const HomePage = lazy(() =>
    import('./views/HomePage/HomePage'),
);
const MoviesPage = lazy(() =>
    import('./views/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
    import('./views/MovieDetailsPage/MovieDetailsPage'),
);

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<PageLoader />}>
        <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}