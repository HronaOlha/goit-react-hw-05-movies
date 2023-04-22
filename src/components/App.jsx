// https://api.themoviedb.org/3/movie/550?api_key=2ead4d55a2c7da4f5313610b563685be

import { Route, Routes } from 'react-router-dom';

import SharedLayout from './Layout/Layout';

const App = () => {
  return (
    <>
      <Routes basename="/goit-react-hw-05-movies">
        <Route path="/" element={<SharedLayout />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
      </Routes>
    </>
  );
};

export default App;
