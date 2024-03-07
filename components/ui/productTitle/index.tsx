import './styles.css';

interface PagesTitleProps{
    data:any;
}

export const ProductTitle = ({data}: PagesTitleProps) => {
    return(
        <div className='product-title-container' style={{backgroundImage:`url('${data.primary_image ? data.primary_image : '/placeholder-gray.jpg'}')`}}>
            <div className='product-title-info'>
                <div className="title-container">
                    <h3>{data.title}</h3>
                </div>
                <div className="card-container">
                    <div className="card-info">
                        <h3>{data.category}</h3>
                        <h2>{data.title}</h2>
                        <div className="skills-container">
                            <li><p>Dimensões gerais (LxAxC)</p><span>{data.dimensoes}</span></li>
                            <li><p>Abertura de corte (LxC)</p><span>{data.abertura}</span></li>
                            <li><p>Volume da tremonha</p><span>{data.volume}</span></li>
                            <li><p>Rotação</p><span>{data.rotacao}</span></li>
                        </div>
                        <button>Entre em contato</button>
                    </div>
                </div>
            </div>
        </div>
    )
}