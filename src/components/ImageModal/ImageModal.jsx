import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  const { urls, alt_description, author, likes } = image;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={urls.regular} alt={alt_description} className={css.image} />
      <div className={css.imageInfo}>
        <p className={css.imageAuthor}>Author: {author}</p>
        <p className={css.imageLikes}>Likes: {likes}</p>
      </div>
      <button onClick={onClose} className={css.closeButton}>
        Close
      </button>
    </ReactModal>
  );
}
