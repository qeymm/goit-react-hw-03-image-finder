import { component } from 'react';
import style from './ImageGalleryItem.module.css';
import ImageModal from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
    state = {
        selectImage: null;
    };

    handleOpenModal = () => {
        this.setState({
            selectedImage: this.props.largeImageURL,
        });
    };

    render() {
        const { selectedImage } = this.state;
        const { webformatURL, tags } = this.props;

        return (
            <li className={style.imageGalleryItem} onClick={this.handleOpenModal}>
                <img className={style.imageGalleryItemImage} src={webformatURL} alt={tags} />
                <imageModal
                    modalClose={this.handleCloseModal}
                    modalOpen={selectedImage !== null}
                    image={selectedImage}
                />

            </li>
        );
    }
}
