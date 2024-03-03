'use client';

import { useEffect, useState } from 'react';

interface ErrorProps {
    error:string;
}
  
interface SelectProps {
    id: string
    label?: string
    sendInput: (input: { name: string; value: string }) => void
    errors?: ErrorProps
    disabled?: boolean
    placeholder?: string
    defaultOption?:any
    old?:any
    numberValue?:boolean
    param?:string
    clear?:boolean
    options:any[];
}

export const SelectInput = ({param, clear, numberValue, label, options,defaultOption, sendInput, id, old}: SelectProps) => {
    const [inputValue, setInputValue] = useState<string>(old || '');

    function handleChange(value: string) {
        setInputValue(value)
    
        sendInput({
          name: id,
          value: value
        })
      }

      useEffect(() => {
        if(clear){
          handleChange('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [clear])

    return(
        <div className="select-container">
            <label>{label}</label>
            <div className="container-input">
                <select value={inputValue} onChange={e => handleChange(e.target.value)}>
                    {defaultOption && <option value={defaultOption.value}>{defaultOption.label}</option>}
                    {options?.map((option : any, index : number) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}