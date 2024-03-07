import { useEffect, useState } from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";
import './styles.css';

interface CategoryFilterProps {
    data:any;
    onfilter:(tags:string) => void;
}

export const CategoryFilter = ({data, onfilter}:CategoryFilterProps) => {
    const [selectedTag, setSelectedTag] = useState<any>([])
    const [selectedMobileCategory, setSelectedMobileCategory] = useState<any>('')


    const handleSelect = (tag: string) => {
        setSelectedTag((prevState:any) => {
            const tagIndex = prevState.indexOf(tag)

            if (tagIndex !== -1) {
                return prevState.filter((selected:any) => selected !== tag);
            } else {
                return [...prevState, tag]
            }
        })
    }

    useEffect(() => {
        onfilter(selectedTag.join(','))
    }, [selectedTag])

    useEffect(() => {
        onfilter(selectedMobileCategory)
    }, [selectedMobileCategory])

    return(
        <>
        <div className="category-filter-container desktop">
            {data.map((item:any, index:number) => (
                <li
                    className={`category-option ${selectedTag.includes(item.slug) ? 'active' : ''}`}
                    onClick={() => handleSelect(item.slug)}
                    key={index}
                ><IoArrowForwardOutline />{item.label}</li>
            ))}
        </div>
        <div className="category-filter-container mobile">
            <select value={selectedMobileCategory} onChange={(e) => setSelectedMobileCategory(e.target.value)}>
                <option value="">Todas categorias</option>
                {data.map((item:any, index:number) => (
                    <option
                        key={index}
                        value={item.slug}
                    ><IoArrowForwardOutline />{item.label}</option>
                ))}
            </select>
        </div>
        </>

    )
}