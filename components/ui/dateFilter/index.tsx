import { useEffect, useState } from 'react';
import './styles.css';
import { SelectInput } from '../formComponents/selectInput';

interface DateFilterProps {
    onfilter:(date:any) => void;
}

export const DateFilter = ({onfilter}:DateFilterProps) => {
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const handleMonth = (month:any) => {
        setMonth(month.value)
    }
    
    const handleYear = (year:any) => {
        setYear(year.value)
    }

    useEffect(() => {
        onfilter({
            month:month,
            year:year
        })
    },[month, year])

    return(
        <div className="date-filter-container">
            <SelectInput
                className="date"
                id={'month'}
                sendInput={handleMonth}
                defaultOption={{label:'Mês', value:''}}
                options={
                    [
                        {label:'Janeiro', value:'1'},
                        {label:'Fevereiro', value:'2'},
                        {label:'Março', value:'3'},
                        {label:'Abril', value:'4'},
                        {label:'Maio', value:'5'},
                        {label:'Junho', value:'6'},
                        {label:'Julho', value:'7'},
                        {label:'Agosto', value:'8'},
                        {label:'Setembro', value:'9'},
                        {label:'Outubro', value:'10'},
                        {label:'Novembro', value:'11'},
                        {label:'Dezembro', value:'12'},
                    ]
                }
            />
            <SelectInput
                className="date"
                id={'year'}
                sendInput={handleYear}
                defaultOption={{label:'Ano', value:''}}
                options={
                    [
                        {label:'2024', value:'2024'},
                        {label:'2023', value:'2023'},
                        {label:'2022', value:'2022'},
                    ]
                }
            />
        </div>
    )
}