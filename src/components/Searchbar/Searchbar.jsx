import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';
import { Form, Button, Input } from './Searchbar.styled';
import { Loader } from 'components/Loader/Loader';
// import { GoSearch } from 'react-icons/go';

const Searchbar = () => {
  const [queryValue, setQueryValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitQuery = e => {
    e.preventDefault();

    setIsLoading(true);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2ead4d55a2c7da4f5313610b563685be&language=en-US&query=${queryValue}&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(result => {
        setSearchResult(result.results);
        setIsLoading(false);
      });

    setQueryValue('');

    // console.log(searchResult.length);
  };

  const handleInputChange = e => {
    setQueryValue(e.currentTarget.value);
  };

  //   console.log(searchResult.length);

  return (
    <>
      <Form onSubmit={handleSubmitQuery}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleInputChange}
          value={queryValue}
        />
        <Button>Search</Button>
      </Form>
      <Toaster />

      {isLoading && <Loader />}

      {searchResult.length > 0 && (
        <ul>
          {searchResult.map(result => (
            <li key={result.id}>{result.original_title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Searchbar;
