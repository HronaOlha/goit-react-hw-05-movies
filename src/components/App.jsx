import { Route, Routes } from 'react-router-dom';

import SharedLayout from './Layout/Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

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
