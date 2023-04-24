// https://api.themoviedb.org/3/movie/550?api_key=2ead4d55a2c7da4f5313610b563685be

import { Route, Routes } from 'react-router-dom';

import SharedLayout from './Layout/Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
