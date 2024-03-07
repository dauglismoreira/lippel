import { GallerySlider } from './gallerySlider';
import './styles.css';

interface ProductsPhotosProps{
    data:any;
}

export const ProductsPhotos = ({data}: ProductsPhotosProps) => {

    return(
        <div className="products-gallery">
            <div className="title-container">
                <h3>Imagens</h3>
            </div>
            <div className="gallery-wrapper">
                <GallerySlider data={data}/>
            </div>
        </div>
    )
}