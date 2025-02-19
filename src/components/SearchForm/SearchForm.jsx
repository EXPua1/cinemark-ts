import { BiSearch } from 'react-icons/bi';

import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value.trim();

    query ? onSubmit(query) : console.log('enter search!');

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="search"
          autoFocus
          //   autoComplete="off"
          placeholder="Search"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          <BiSearch />
        </button>
      </form>
    </>
  );
};

export default SearchForm;
