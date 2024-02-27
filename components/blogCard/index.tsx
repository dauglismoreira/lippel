import './styles.css';

interface ProductCardProps {
    data:any;
}

export const BlogCard = ({data}: ProductCardProps) => {
    return(
        <div className="blog-card-container">
            <div className="blog-card-image" style={{
                backgroundImage: `url('${data.cover !== '' ? data.cover : 'placeholder-blue.jpg'}')`
            }}></div>
            <div className="blog-card-info">
                <h3>{data.category}<span className="separate"></span><span className="blog-card-date">{data.date}</span></h3>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <button>Leia mais</button>
            </div>
        </div>
    )
}