'use client';

import { IoSearchOutline } from "react-icons/io5"
import './styles.css';
import { useState } from "react";
import { HorizontalCard } from "../horizontalCard";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export const SearchResult = () => {

    const resultMock = [
        {
            category:'Produtos',
            title:'Triturador Móvel  de dois eixos MR',
            content:`
                <p>Os trituradores móveis de duplo eixo Pronar são projetados para <b>trituração de diversos materiais</b>, como resíduos sólidos urbanos, de construção e de demolição, raízes e resíduos florestais, metais leves, entre outros.</p>
            `,
            link:'#',
            image:'/img4.png'
        },
        {
            category:'Produtos',
            title:'Triturador Móvel  de dois eixos MR',
            content:`
                <p>Os trituradores móveis de duplo eixo Pronar são projetados para <b>trituração de diversos materiais</b>, como resíduos sólidos urbanos, de construção e de demolição, raízes e resíduos florestais, metais leves, entre outros.</p>
            `,
            link:'#',
            image:'/img4.png'
        },
        {
            category:'Produtos',
            title:'Triturador Móvel  de dois eixos MR',
            content:`
                <p>Os trituradores móveis de duplo eixo Pronar são projetados para <b>trituração de diversos materiais</b>, como resíduos sólidos urbanos, de construção e de demolição, raízes e resíduos florestais, metais leves, entre outros.</p>
            `,
            link:'#',
            image:'/img4.png'
        },
        {
            category:'Produtos',
            title:'Triturador Móvel  de dois eixos MR',
            content:`
                <p>Os trituradores móveis de duplo eixo Pronar são projetados para <b>trituração de diversos materiais</b>, como resíduos sólidos urbanos, de construção e de demolição, raízes e resíduos florestais, metais leves, entre outros.</p>
            `,
            link:'#',
            image:'/img4.png'
        },
        {
            category:'Produtos',
            title:'Triturador Móvel  de dois eixos MR',
            content:`
                <p>Os trituradores móveis de duplo eixo Pronar são projetados para <b>trituração de diversos materiais</b>, como resíduos sólidos urbanos, de construção e de demolição, raízes e resíduos florestais, metais leves, entre outros.</p>
            `,
            link:'#',
            image:'/img4.png'
        },
        {
            category:'Produtos',
            title:'Triturador Móvel  de dois eixos MR',
            content:`
                <p>Os trituradores móveis de duplo eixo Pronar são projetados para <b>trituração de diversos materiais</b>, como resíduos sólidos urbanos, de construção e de demolição, raízes e resíduos florestais, metais leves, entre outros.</p>
            `,
            link:'#',
            image:'/img4.png'
        },
        {
            category:'Produtos',
            title:'Triturador Móvel  de dois eixos MR',
            content:`
                <p>Os trituradores móveis de duplo eixo Pronar são projetados para <b>trituração de diversos materiais</b>, como resíduos sólidos urbanos, de construção e de demolição, raízes e resíduos florestais, metais leves, entre outros.</p>
            `,
            link:'#',
            image:'/img4.png'
        },
        {
            category:'Produtos',
            title:'Triturador Móvel  de dois eixos MR',
            content:`
                <p>Os trituradores móveis de duplo eixo Pronar são projetados para <b>trituração de diversos materiais</b>, como resíduos sólidos urbanos, de construção e de demolição, raízes e resíduos florestais, metais leves, entre outros.</p>
            `,
            link:'#',
            image:'/img4.png'
        },
    ]

    const [term, setTerm] = useState('')

    return(
        <div className="search-page">
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="O que você Procura?"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                ></input>
                <IoSearchOutline/>
            </div>
            <p>28 correspondências para Trituradores</p>

            <div className="search-results">
                <div className="pagination">
                    1 - 2 páginas <GoArrowLeft /><GoArrowRight />
                </div>
                <div className="result-list">
                    {resultMock.map((item, index) => (
                        <HorizontalCard key={index} data={item}/>
                    ))}
                </div>
                <div className="pagination justify-center">
                    1 - 2 páginas <GoArrowLeft /><GoArrowRight />
                </div>
            </div>
        </div>
    )
}