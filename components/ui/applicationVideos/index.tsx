import './styles.css';

export const ApplicationVideos = ({data}:any) => {
    return(
        <div className="application-videos-container">
            <h3>Veja alguns videos desta Aplicação</h3>
            <div className="videos-list-desktop">
                {data.map((item:any, index:number) => (
                    <div className="video-container" key={index} dangerouslySetInnerHTML={{ __html: item.iframe }}></div>
                ))}
            </div>
            <div className="videos-list-mobile">
            <div className="selected-video-container" dangerouslySetInnerHTML={{ __html: data[0].iframe }}></div>
            <div className="video-index">
                {data.slice(1,data.length).map((item:any, index:number) => (
                    <div className="video-container" key={index} dangerouslySetInnerHTML={{ __html: item.iframe }}></div>
                ))}
            </div>
            </div>
        </div>
    )
}