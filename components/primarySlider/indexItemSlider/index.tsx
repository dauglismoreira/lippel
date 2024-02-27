import './styles.css'

interface IndexItemSliderProps {
    slide:any;
    index:number;
    handleIndexClick:(id:any) => void;
}

export const IndexItemSlider = ({slide, index, handleIndexClick}: IndexItemSliderProps) => {
    return (
        <div className="index-item" onClick={() => handleIndexClick(slide.id)}>
            <div className="index-item-row">
                <div className="index-item-index">
                    <p>0{index}</p>
                </div>
                <div className="index-item-category">
                    <h5>{slide.category}</h5>
                </div>
            </div>
            <div className="index-item-row">
                <h3>{slide.title}</h3>
            </div>
        </div>
    );
  }
  