import './styles.css';

interface PagesTitleProps{
    title:string;
    bg?:string;
}

export const PagesTitle = ({title, bg}: PagesTitleProps) => {
    return(
        <div className='title-cointainer' style={{backgroundImage:`url('${bg ? bg : ''}')`}}>
            <div className='title-content'>
                <h2 className={`${bg ? 'bg-primary p-2' : ''}`}>{title}</h2>
            </div>
        </div>
    )
}