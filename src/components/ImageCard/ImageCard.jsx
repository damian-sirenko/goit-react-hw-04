import css from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
  const { urls, alt_description, user, likes } = image;

  return (
    <div className={css.imageCard}>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        onClick={() =>
          onImageClick({
            urls,
            alt_description,
            author: user.name,
            likes,
          })
        }
      />
      <div className={css.imageInfo}>
        <p className={css.imageAuthor}>Author: {user.name}</p>
        <p className={css.imageLikes}>Likes: {likes}</p>
      </div>
    </div>
  );
}
