import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={styles.item}
          onClick={() => onImageClick(image)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.card}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className={styles.image}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
