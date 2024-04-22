import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.LoadMoreBtnWrapper}>
      <button onClick={onClick} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
}
