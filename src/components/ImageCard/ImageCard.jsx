import css from './ImageCard.module.css';

export default function ImageCard({ src, alt, onImageClick }) {
  return (
    <div>
      <img
        className={css.smallImage}
        onClick={onImageClick}
        src={src}
        alt={alt}
        width="250"
        height="250"
      />
    </div>
  );
}
