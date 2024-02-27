import './styles.css';

interface HomeSlideProps {
    data:any;
}

export const HomeSlide = ({data}: HomeSlideProps) => {
    return(
        <div className="home-slide" style={{backgroundImage:`url('${data.src}')`}}>
            <div className="slide-content">
                <h3>{data.category}</h3>
                <h2>{data.title}</h2>
            </div>
        </div>
    )
}