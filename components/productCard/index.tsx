import './styles.css';

interface ProductCardProps {
    data:any;
}

export const ProductCard = ({data}: ProductCardProps) => {
    return(
        <div className="card-container">
            <div className="card-image" style={{
                backgroundImage: `url('${data.cover !== '' ? data.cover : 'placeholder-gray.jpg'}')`
            }}></div>
            <div className="card-info">
                <h3>{data.category}</h3>
                <h2>{data.title}</h2>
                <div className="skills-container">
                {data.skills.map((skill:any, index:number) => (
                    <li key={index}>
                        <p>{skill.label}</p><span>{skill.value}</span>
                    </li>
                ))}
                </div>
                <button>Ir para o produto</button>
            </div>
        </div>
    )
}