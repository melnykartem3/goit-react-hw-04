import { BsSearchHeartFill } from 'react-icons/bs';
import css from './SearchBar.module.css';

export default function SearchBar({ handleSearch, query, handleChange }) {
  const handleSubmit = event => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <div className={css.searchContainer}>
          <BsSearchHeartFill className={css.searchIcon} size={18} />
          <input
            className={css.searchInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </div>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
