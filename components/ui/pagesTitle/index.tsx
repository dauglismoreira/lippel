import './styles.css';

export const PagesTitle = ({title}: any) => {
    return(
        <div className='title-cointainer'>
            <div className='title-content'>
                <h2>{title}</h2>
            </div>
        </div>
    )
}