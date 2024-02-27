'use client';

import { useState } from 'react';
import './styles.css'

interface TitleSectionProps{
    data?:any;
    title:string;
    color?:string;
}

export const TitleSection = ({data, title, color}: TitleSectionProps) => {

    const [selectedItem, setselectedItem] = useState('todos')

    return (
    <div className="title-container">
        <h2 className={`${color ? color : 'text-white'}`}>{title}</h2>
        <div className="menu">
            {data && data.map((item:any, index:number) => (
                <div
                    key={index}
                    className={`items ${item.link === selectedItem ? ' active' : ''}`}
                    onClick={() => setselectedItem(item.link)}
                >{item.label}</div>
            ))}
        </div>
    </div>
    );
  }
  
