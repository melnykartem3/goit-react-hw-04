import { BsSearchHeartFill } from 'react-icons/bs';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const notify = () =>
  toast.error('Fill in the field', {
    duration: 4000,
    position: 'top-right',
    style: {
      background: 'rgb(63, 160, 160)',
      color: '#fff',
    },
  });

export default function SearchBar({ handleSearch, query, handleChange }) {
  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      notify();
      return;
    }
    handleSearch();
  };

  return (
    <header className={css.header}>
      <Toaster />
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
