'use client';

import {  ProductsFilters } from './filters';
import './styles.css';
import { useEffect, useState } from 'react';
import { ProductCard } from '../productCard';
import { AdvancedFilters } from './advancedFilters';

export const CatalogProducts = () => {

    const highMock = [
        {
            cover:'',
            category:'Triturador de resíduos',
            title:'Triturador Móvel de dois eixos MRW',
            skills:[
                {
                    label:'Dimensões gerais (LxAxC)',
                    value:'2550 x 4000 x 8850 mm'
                },
                {
                    label:'Abertura de corte (LxC)',
                    value:'2340 x 1720 mm'
                },
                {
                    label:'Volume da tremonha',
                    value:'3m³'
                },
                {
                    label:'Rotação',
                    value:'44 RPM'
                },
            ],
            id:1
        },
        {
            cover:'',
            category:'PICADORES FLORESTAIS A TAMBOR',
            title:'Picador e Triturador série T-REX 900',
            skills:[
                {
                    label:'Dimensões gerais (LxAxC)',
                    value:'1500 x 2800 x 4300 mm'
                },
                {
                    label:'Abertura de corte (LxC)',
                    value:'900 x 550 mm'
                },
                {
                    label:'Produção estimada',
                    value:'até 210 m3/h'
                },
                {
                    label:'Peso aproximado',
                    value:'19 a 22 Ton'
                },
            ],
            id:1
        },
        {
            cover:'',
            category:'PICADORES FLORESTAIS A TAMBOR',
            title:'Picador Florestal DRAGON 1200',
            skills:[
                {
                    label:'Dimensões gerais (LxAxC)',
                    value:'6600 x 3300 x 3700 mm'
                },
                {
                    label:'Abertura de corte (LxC)',
                    value:'1200x800 / 1200x1000 mm'
                },
                {
                    label:'Produção estimada',
                    value:'até 300 m³/h'
                },
                {
                    label:'Peso aproximado',
                    value:'12 - 16 Tonz'
                },
            ],
            id:1
        },
    ]

    const [activeMobileFilters, setActiveMobileFilters] = useState(false)

    useEffect(() => {
        document.documentElement.style.overflow = activeMobileFilters ? 'hidden' : 'auto';

        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, [activeMobileFilters]);

    const handleFilter = (filters:any) => {
        console.log(filters)
    }

    const handleAdvancedFilters = () => {
        setActiveMobileFilters(!activeMobileFilters)
    }

    return(
        <div className="catalog-product-container">
            <div className="catalog-filters">
                <ProductsFilters
                    handleFilters={handleFilter}
                    handleAdvancedFilters={handleAdvancedFilters}
                />
            </div>
            <div className="catalog-result">
                {highMock.map((item, index) => (
                    <ProductCard key={index} data={item}/>
                ))}
            </div>

            <AdvancedFilters
                handleFilters={handleFilter}
                handleAdvancedFilters={handleAdvancedFilters}
                open={activeMobileFilters}
            />
            <div
                onClick={handleAdvancedFilters}
                className={`catalog-product-overlay ${activeMobileFilters ? 'active' : ''}`}
            ></div>
        </div>
    )
}