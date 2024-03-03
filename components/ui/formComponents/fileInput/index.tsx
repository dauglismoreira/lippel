import './styles.css'
import {useState} from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ErrorProps {
  error:string;
}

interface FileInputProps {
  id: string
  label?: string
  sendInput: (file:any) => void
  errors?: ErrorProps
  disabled?: boolean
  placeholder?: string;
  description?:string;
}

export const FileInput = ({id, description, placeholder, label, sendInput, disabled, errors}: FileInputProps) => {
  const [inputValue, setInputValue] = useState<any>(null);

  function handleChange(file:any) {
    if (file) {
      setInputValue(file)
      sendInput(file)
      console.log(file)
    }
  }
  
  function handleClear() {
    setInputValue(null);
  }

  return (
    <div className='file-input-container'>
      <h3>{label}</h3>
      <p>{description}</p>
      <div className='input'>
        <label htmlFor={id}><IoDocumentTextOutline />Escolher arquivo</label>
        <input
          type='file'
          id={id}
          onChange={(e) => handleChange(e.target.files?.[0])}
          disabled={disabled}
          placeholder={placeholder}
        />
        {inputValue && (
          <span onClick={handleClear}>
            {inputValue.name} <RiDeleteBin6Line />
          </span>
        )}
      </div>
    </div>
  );
};