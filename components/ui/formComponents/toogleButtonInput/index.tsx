import { PrimaryButton } from '../../primaryButton';
import './styles.css'
import {useEffect, useState} from 'react';

interface ErrorProps {
  error:string;
}

interface ToogleButtonInputProps {
  id: string
  label?: string
  sendInput: (input: { name: string; value: string }) => void
  errors?: ErrorProps
  disabled?: boolean
  placeholder: string
  options:any
  old?:any
}

export const ToogleButtonInput = ({id, options, old, placeholder, label, sendInput, disabled, errors}: ToogleButtonInputProps) => {
  const [inputValue, setInputValue] = useState<any>('');

  function handleChange(value: string) {
    setInputValue(value)

    sendInput({
      name: id,
      value: value
    })
  }

  useEffect(() => {
    if(old){
      setInputValue(old)
    }
  }, [old])

  return (
    <fieldset>
      {label && <label>{label}</label>}

      <div className="container-buttons">
        {options.map((item:any, index:number) => (
          <PrimaryButton
            action={() => handleChange(item.value)}
            key={index}
            className={`bg-secondary text-darkBlue hover:text-secondary hover:bg-darkBlue ${inputValue === item.value ? 'active' : ''}`}
          >{item.icon}{item.label}</PrimaryButton>
        ))}
      </div>

    </fieldset>
  );
};