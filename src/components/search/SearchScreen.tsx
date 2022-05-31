import { FormEvent, useMemo } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import useForm from '@/hooks/useForm';
import { getHeroesByName } from '@/selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';

interface SearchValues {
  searchText: string;
}

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues as SearchValues;

  const filteredHeroes = useMemo(() => getHeroesByName(q as string), [q]);

  const handleSearch = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // if (searchText.trim().length === 0) {
    //   setValidField('searchText', false);
    //   return;
    // }

    // setValidField('searchText', true);
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h4>Search</h4>
      <hr />

      <div className="row">
        <div className="col-5">
          <h5>Form</h5>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search a hero..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-primary mt-1">
                Search...
              </button>
            </div>
          </form>
        </div>

        <div className="col-7">
          <h5>Results</h5>
          <hr />

          {q === ''
            ? (
              <div className="alert alert-info">Search your heroes!</div>
            )
            : (
              filteredHeroes.length === 0 && (
                <div className="alert alert-danger">No results found: {q}</div>
              )
            )}

          {filteredHeroes.map((hero) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
