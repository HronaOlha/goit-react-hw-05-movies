import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=2ead4d55a2c7da4f5313610b563685be`
    )
      .then(res => res.json())
      .then(({ results }) => {
        setTitles(results);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {titles.length > 0 && (
        <ul>
          {titles.map(title => (
            <li key={title.id}>
              <Link to={`/movies/${title.id}`} state={{ from: location }}>
                {title.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
