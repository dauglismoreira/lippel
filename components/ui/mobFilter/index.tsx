import { useState } from 'react';
import './styles.css';

interface MobFilterProps {
    data:any;
    onfilter:(tags:string) => void;
    advanced?:boolean;
}

export const MobFilter = ({data, onfilter, advanced}:MobFilterProps) => {
    const [selectedTag, setSelectedTag] = useState<any>('')


    const handleSelect = (tag: string) => {
        onfilter(tag)
        setSelectedTag(tag)
    }

    return(
       !advanced ?
        <div className="mob-filter-container">
            {data.map((item:any, index:number) => (
                <button
                className={`mob-button ${selectedTag === item.slug ? 'active' : ''}`}
                    onClick={() => handleSelect(item.slug)}
                    key={index}
                >{item.label}</button>
            ))}
        </div>
        :
        <div className="mob-filter-container advanced">
            {data.map((item:any, index:number) => (
                <div key={index} className="option">
                    <input
                        type='checkbox'
                        id={`checkbox-${item.slug}`}
                        checked={selectedTag === item.slug}
                        onChange={() => handleSelect(item.slug)}
                    ></input>
                    <label htmlFor={`checkbox-${item.slug}`}>{item.label}</label>
                </div>
            ))}
        </div>
    )
}