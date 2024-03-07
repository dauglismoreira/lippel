import './styles.css';
import { FaCheck } from "react-icons/fa6";

export const ApplicationDescription = (data:any) => {
    return(
        <div className="application-description">
            <h3>Vantagens</h3>
            <ul>
                {data.data.vantagens?.map((item:any, index:number) => (
                    <li key={index}><FaCheck />{item.label}</li>
                ))}
            </ul>
            <h3>{data.data.description_title}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.data.description_content }}></div>
        </div>
    )
}