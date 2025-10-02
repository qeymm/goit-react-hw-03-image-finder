import { ImageGalleryItem } from 'components/ImageGalleryItems/ImageGalleryItems';
import style from './ImageGalleryItem.module.css';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className={style.imageGallery}>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <imageGalleryItems
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
