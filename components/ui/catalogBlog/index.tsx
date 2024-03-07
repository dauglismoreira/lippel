'use client';

import { BlogCard } from '../blogCard';
import { BlogFilters } from './filters';
import { BsFilterLeft } from "react-icons/bs";
import './styles.css';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

export const CatalogBlog = () => {

    const blogMock = [
        {
            cover:'',
            category:'Tag',
            title:'Waste Expo Brasil 2023',
            description:'Caros clientes Lippel, Gostaríamos de compartilhar algumas informações sobre a Waste Expo Brasil 2023, a maior feira da América Latina na ...',
            date:'12 de outubro 2023',
            id:1
        },
        {
            cover:'',
            category:'Tag',
            title:'Alternativas para produção e fornecimento de energia para granjas',
            description:'Alternativas para produção e fornecimento de energia para granjas Cavacos de madeira são de longe o combustível mais abundante, viável e econômico ... ',
            date:'12 de outubro 2023',
            id:1
        },
        {
            cover:'',
            category:'Tag',
            title:'Picador RAPTOR Impulsiona a Transformação Sustentável na ...',
            description:'A Lippel, líder no fornecimento de soluções avançadas para o processamento de biomassa e energia renovável, alcançou um novo marco  ...',
            date:'12 de outubro 2023',
            id:1
        },
        {
            cover:'',
            category:'Tag',
            title:'Waste Expo Brasil 2023',
            description:'Caros clientes Lippel, Gostaríamos de compartilhar algumas informações sobre a Waste Expo Brasil 2023, a maior feira da América Latina na ...',
            date:'12 de outubro 2023',
            id:1
        },
        {
            cover:'',
            category:'Tag',
            title:'Alternativas para produção e fornecimento de energia para granjas',
            description:'Alternativas para produção e fornecimento de energia para granjas Cavacos de madeira são de longe o combustível mais abundante, viável e econômico ... ',
            date:'12 de outubro 2023',
            id:1
        },
        {
            cover:'',
            category:'Tag',
            title:'Picador RAPTOR Impulsiona a Transformação Sustentável na ...',
            description:'A Lippel, líder no fornecimento de soluções avançadas para o processamento de biomassa e energia renovável, alcançou um novo marco  ...',
            date:'12 de outubro 2023',
            id:1
        },
    ]

    const [activeMobileFilters, setActiveMobileFilters] = useState(false)

    const handleFilter = (filters:any) => {
        console.log(filters)
    }

    return(
        <div className="catalog-blog-container">
            <span
                className="mobile-toogle"
                onClick={() => setActiveMobileFilters(!activeMobileFilters)}
            ><BsFilterLeft />Filtros</span>
            <div className="catalog-result">
                {blogMock.map((item, index) => (
                    <BlogCard key={index} data={item}/>
                ))}
            </div>
            <div className="filter-sidebar">
                <BlogFilters handleFilters={handleFilter}/>
            </div>

            <div className={`toogle-filters-container ${activeMobileFilters ? 'active' : ''}`}>
                <span
                    className="close-button"
                    onClick={() => setActiveMobileFilters(!activeMobileFilters)}
                ><IoClose /></span>
                <BlogFilters mobile={true} handleFilters={handleFilter}/>
            </div>
            <div
                className={`filter-overlay ${activeMobileFilters ? 'active' : ''}`}
                onClick={() => setActiveMobileFilters(!activeMobileFilters)}
            ></div>
        </div>
    )
}