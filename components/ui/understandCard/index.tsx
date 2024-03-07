import './styles.css';
import Link from 'next/link';

interface UnderstandCardProps {
    data:any;
}

export const UnderstandCard = ({data}: UnderstandCardProps) => {
    return(
        <div className="understand-card-container">
            <div className="understand-card-image" style={{
                backgroundImage: `url('${data.image !== '' ? data.image : '/placeholder-blue.jpg'}')`
            }}></div>
            <div className="understand-card-info">
                <h2>{data.title}</h2>
                <p>{data.resum}...</p>
                <Link href={`/understand-more/${data.slug}`}><button>Ver mais</button></Link>
            </div>
        </div>
    )
}