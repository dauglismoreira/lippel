import Link from 'next/link';
import './styles.css';

export const HorizontalCard = ({data}: any) => {
    return(
        <div className="horizontal-result-card">
            <div className="cover" style={{backgroundImage:`url('${data.image}')`}}></div>
            <div className="info-container">
                <h3>{data.category}</h3>
                <h2>{data.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                <Link href={data.link}>Ver mais</Link>
            </div>
        </div>
    )
}