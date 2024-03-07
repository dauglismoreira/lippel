import './styles.css';
import { useEffect, useState } from 'react';
import { MobFilter } from '../../mobFilter';
import { RangeInput } from '../../formComponents/rangeInput';
import { IoClose } from "react-icons/io5";
import { PrimaryButton } from '../../primaryButton';

interface AdvancedFiltersProps {
    handleFilters:(filters:any) => void
    mobile?:boolean;
    handleAdvancedFilters:() => void;
    open:boolean;
}

export const AdvancedFilters = ({handleFilters, open, mobile, handleAdvancedFilters}: AdvancedFiltersProps) => {

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
        <div className={`product-advanced-search ${open ? 'active' : ''}`}>
            <div className="advanced-filters-head">
                <h3>Filtro Avançado</h3>
                <IoClose  onClick={handleAdvancedFilters}/>
            </div>
            <div className="advanced-filter-row">
                <div className={`product-search-card product-search-mob ${mobile ? 'mobile-filter' : ''}`}>
                    <label>Mobilidade</label>
                    <MobFilter advanced={true} data={mobilidadeMock} onfilter={handleMobFilter}/>
                </div>
            </div>
            <div className="advanced-filter-row">
                <div className={`product-search-card product-search-size ${mobile ? 'mobile-filter' : ''}`}>
                    <label>Porte</label>
                    <MobFilter advanced={true} data={porteMock} onfilter={handleSizeFilter}/>
                </div>
            </div>
            <div className="advanced-filter-row">
                <RangeInput
                    id=""
                    sendInput={handlePesoFilter}
                    label="Peso (kg)"
                    min={0}
                    max={100}
                />
            </div>
            <div className="advanced-filter-row">
                <RangeInput
                    id=""
                    sendInput={handleAberturaFilter}
                    label="Abertura de Corte (mm)"
                    min={0}
                    max={100}
                />
            </div>
            <div className="advanced-filter-row">
                <RangeInput
                    id=""
                    sendInput={handleEficienciaFilter}
                    label="Eficiência (m3/h)"
                    min={0}
                    max={100}
                />
            </div>
            <div className="advanced-filter-row buttons">
                <PrimaryButton>Procurar produto</PrimaryButton>
                <PrimaryButton>Limpar filtros</PrimaryButton>
            </div>
        </div>
    )
}