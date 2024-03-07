import { useEffect, useState } from 'react';
import './styles.css';

interface TagFilterProps {
    data:any;
    onfilter:(tags:string) => void;
}

export const TagFilter = ({data, onfilter}:TagFilterProps) => {
    const [selectedTag, setSelectedTag] = useState<any>([])


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

    return(
        <div className="tag-filter-container">
            {data.map((item:any, index:number) => (
                <button
                className={`tag-button ${selectedTag.includes(item.slug) ? 'active' : ''}`}
                    onClick={() => handleSelect(item.slug)}
                    key={index}
                >{item.label}</button>
            ))}
        </div>
    )
}