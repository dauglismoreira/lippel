import { GallerySlider } from './gallerySlider';
import './styles.css';

interface ProductsVideosProps{
    data:any;
}

export const ProductsVideos = ({data}: ProductsVideosProps) => {

    return(
        <div className="products-video-gallery">
            <div className="title-container">
                <h3>Vídeos</h3>
            </div>
            <div className="gallery-wrapper">
                <GallerySlider data={data}/>
            </div>
        </div>
    )
}