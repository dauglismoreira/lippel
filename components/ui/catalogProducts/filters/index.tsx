import './styles.css';
import { useEffect, useState } from 'react';
import { MobFilter } from '../../mobFilter';
import { RangeInput } from '../../formComponents/rangeInput';

interface ProductsFiltersProps {
    handleFilters:(filters:any) => void
    mobile?:boolean;
    handleAdvancedFilters:() => void;
}

export const ProductsFilters = ({handleFilters, mobile, handleAdvancedFilters}: ProductsFiltersProps) => {

    const mobilidadeMock = [
        {
            label:'Todos',
            slug:'todos'
        },
        {
            label:'Estático',
            slug:'estatico'
        },
        {
            label:'Móvel',
            slug:'movel'
        },
    ]

    const porteMock = [
        {
            label:'Pequeno',
            slug:'pequeno'
        },
        {
            label:'Médio',
            slug:'medio'
        },
        {
            label:'Grande',
            slug:'grande'
        },
    ]

    const getUrlParam = (name: string): string | null => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get(name);
    }

    const [filters, setFilters] = useState<any>({
        tags: getUrlParam('tags') || '',
        categories: getUrlParam('categories') || '',
        text: getUrlParam('text') || '',
        month: getUrlParam('month') || '',
        year: getUrlParam('year') || '',
    })


    const handleMobFilter = (mob: any) => {
        setFilters((prevState:any) => ({ ...prevState, mob: mob }));
    }
    
    const handleSizeFilter = (size: any) => {
        setFilters((prevState:any) => ({ ...prevState, size: size }));
    }

    const handlePesoFilter = (weight: any) => {
        console.log(weight)
    }

    const handleAberturaFilter = (weight: any) => {
        console.log(weight)
    }

    const handleEficienciaFilter = (weight: any) => {
        console.log(weight)
    }

    useEffect(() => {
        handleFilters(filters)
    }, [filters])

    return(
        <div className="product-search">
            <div className="product-search-row">
                <div className={`product-search-card product-search-mob ${mobile ? 'mobile-filter' : ''}`}>
                    <label>Mobilidade</label>
                    <MobFilter data={mobilidadeMock} onfilter={handleMobFilter}/>
                </div>
                <div className={`product-search-card product-search-size ${mobile ? 'mobile-filter' : ''}`}>
                    <label>Porte</label>
                    <MobFilter data={porteMock} onfilter={handleSizeFilter}/>
                </div>
                <div className="advanced-filter-desktop" onClick={handleAdvancedFilters}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 18V12H10V14H18V16H10V18H8ZM0 16V14H6V16H0ZM4 12V10H0V8H4V6H6V12H4ZM8 10V8H18V10H8ZM12 6V0H14V2H18V4H14V6H12ZM0 4V2H10V4H0Z" fill="#F8CA00"/>
                    </svg>
                    Filtro Avançado
                </div>
            </div>
            <div className="product-search-row ranges">
                <RangeInput
                    id=""
                    sendInput={handlePesoFilter}
                    label="Peso (kg)"
                    min={0}
                    max={100}
                />
                <RangeInput
                    id=""
                    sendInput={handleAberturaFilter}
                    label="Abertura de Corte (mm)"
                    min={0}
                    max={100}
                />
                <RangeInput
                    id=""
                    sendInput={handleEficienciaFilter}
                    label="Eficiência (m3/h)"
                    min={0}
                    max={100}
                />
            </div>
            <div className="advanced-filter-mobile" onClick={handleAdvancedFilters}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 18V12H10V14H18V16H10V18H8ZM0 16V14H6V16H0ZM4 12V10H0V8H4V6H6V12H4ZM8 10V8H18V10H8ZM12 6V0H14V2H18V4H14V6H12ZM0 4V2H10V4H0Z" fill="#F8CA00"/>
                </svg>
                Filtro Avançado
            </div>
        </div>
    )
}