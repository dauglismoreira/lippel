import './styles.css';
import { TagFilter } from '../../tagFilter';
import { CategoryFilter } from '../../categoryFilter';
import { DateFilter } from '../../dateFilter';
import { TextInput } from '../../formComponents/textInput';
import { useEffect, useState } from 'react';
import { GrSearch } from "react-icons/gr";

interface BlogFiltersProps {
    handleFilters:(filters:any) => void
    mobile?:boolean
}

export const BlogFilters = ({handleFilters, mobile}: BlogFiltersProps) => {

    const tagMock = [
        {
            label:'Floresta',
            slug:'floresta'
        },
        {
            label:'Reciclagem',
            slug:'reciclagem'
        },
        {
            label:'Prefeitura',
            slug:'prefeitura'
        },
        {
            label:'Compostagem',
            slug:'compostagem'
        },
        {
            label:'Reaproveitamento',
            slug:'reaproveitamento'
        },
        {
            label:'Energia',
            slug:'energia'
        },
        {
            label:'Plástico',
            slug:'plastico'
        },
        {
            label:'Trituradores',
            slug:'trituradores'
        },
    ]

    const categoryMock = [
        {
            label:'Categoria 1',
            slug:'categoria1'
        },
        {
            label:'Categoria 2',
            slug:'categoria2'
        },
        {
            label:'Categoria 3',
            slug:'categoria3'
        },
        {
            label:'Categoria 4',
            slug:'categoria4'
        },
        {
            label:'Categoria 5',
            slug:'categoria5'
        },
        {
            label:'Categoria 6',
            slug:'categoria6'
        },
    ]

    const [text, setText] = useState('')

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


    const handleTagFilter = (tags: any) => {
        setFilters((prevState:any) => ({ ...prevState, tags: tags }));
    }
    
    const handleCategoryFilter = (categories: any) => {
        setFilters((prevState:any) => ({ ...prevState, categories: categories }));
    }
    
    const handleDateFilter = (date: any) => {
        setFilters((prevState:any) => ({
            ...prevState,
            month: date.month,
            year: date.year,
        }));
    };
    
    const handleTextFilter = (text: any) => {
        setFilters((prevState:any) => ({ ...prevState, text: text }));
    }

    const handleTextInputFilter = (text: any) => {
        setText(text.value)
    }

    useEffect(() => {
        handleFilters(filters)
    }, [filters])

    return(
        <div className="blog-search">
            <div className={`blog-search-bar ${mobile ? 'mobile-filter' : ''}`}>
                <TextInput
                    id='text'
                    placeholder='Procurar'
                    sendInput={handleTextInputFilter}
                />
                <span onClick={() => handleTextFilter(text)}><GrSearch /></span>
            </div>
            <div className={`blog-search-card blog-search-tags ${mobile ? 'mobile-filter' : ''}`}>
                <h3>Tags</h3>
                <TagFilter data={tagMock} onfilter={handleTagFilter}/>
            </div>
            <div className={`blog-search-card blog-search-date ${mobile ? 'mobile-filter' : ''}`}>
                <h3>Data</h3>
                <DateFilter onfilter={handleDateFilter}/>
            </div>
            <div className={`blog-search-card blog-search-category ${mobile ? 'mobile-filter' : ''}`}>
                <h3>Categorias</h3>
                <CategoryFilter data={categoryMock} onfilter={handleCategoryFilter}/>
            </div>
        </div>
    )
}