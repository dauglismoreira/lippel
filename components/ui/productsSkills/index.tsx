import { IoMdCheckmark } from "react-icons/io";
import './styles.css';

interface ProductsSkillsProps{
    data:any;
}

export const ProductsSkills = ({data}: ProductsSkillsProps) => {

    return(
        <div className="products-skills">
            <h3>As suas aplicações e características</h3>
            <div className="skills-container">
                <div className="skills-items">
                    <h4>Características</h4>
                    {data.skills.map((item:any, index:number) => (
                        <li key={index}><IoMdCheckmark />{item.label}</li>
                    ))}
                </div>
                <div className="skills-items">
                    <h4>Aplicações</h4>
                    {data.applications.map((item:any, index:number) => (
                        <li key={index}><IoMdCheckmark />{item.label}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}