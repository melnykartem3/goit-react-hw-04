import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, selectedImage }) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <img
        className={css.modalImage}
        src={selectedImage && selectedImage.urls && selectedImage.urls.regular}
        alt={selectedImage && selectedImage.alt_description}
        width="897"
        height="600"
      />
      <p className={css.descModal}>
        Likes: {selectedImage && selectedImage.likes}
      </p>
      {selectedImage && selectedImage.description && (
        <p className={css.descModal}>
          Description: {selectedImage.description}
        </p>
      )}
      <p className={css.descModal}>
        Author:{selectedImage && selectedImage.user.name}
      </p>
    </Modal>
  );
}
