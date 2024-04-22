import { useEffect, useState } from 'react';
import { fetchGallery } from './gallery-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from './components/ImageModal/ImageModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const notify = () =>
    toast('Fill in the field', {
      duration: 4000,
      position: 'top-right',
      style: {
        background: 'rgb(63, 160, 160)',
        color: '#fff',
      },
    });

  const handleChange = event => {
    setQuery(event.target.value);
    setPage(1);
    setSearched(false);
  };

  useEffect(() => {
    async function getImages() {
      try {
        if (searched) {
          setLoading(true);
          const data = await fetchGallery(query, page);
          setImages(prevImages => [...prevImages, ...data.results]);
          console.log(data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [query, page, searched]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = () => {
    if (query.trim() === '') {
      notify();
    } else {
      setImages([]);
      setSearched(true);
      setPage(1);
    }
  };

  const openModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <Toaster />
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      {images.length > 0 && (
        <ImageGallery onImageClick={openModal} images={images} />
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </>
  );
}
