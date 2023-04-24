import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './Layout/Layout';
// import Home from '../pages/Home';
const Home = lazy(() => import('../pages/Home'));
// import Movies from '../pages/Movies';
const Movies = lazy(() => import('../pages/Movies'));
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// import Cast from './Cast/Cast';
const Cast = lazy(() => import('./Cast/Cast'));
// import Reviews from './Reviews/Reviews';
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
