import { useRef, useEffect } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
  const lastImageRef = useRef(null);

  useEffect(() => {
    if (lastImageRef.current) {
      lastImageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [images]);

  return (
    <ul className={css.galleryList}>
      {images.map((image, index) => (
        <li
          className={css.galleryListItem}
          key={image.id}
          ref={index === images.length - 1 ? lastImageRef : null}
        >
          <ImageCard
            onImageClick={() => onImageClick(image)}
            src={image.urls.small}
            alt={image.alt_description}
          />
        </li>
      ))}
    </ul>
  );
}
