import './styles.css'
import {useState} from 'react';

interface ErrorProps {
  error:string;
}

interface CheckListInputProps {
  id: string
  label?: string
  sendInput: (input: { name: string; value: string }) => void
  errors?: ErrorProps
  disabled?: boolean
  placeholder: string
}

export const CheckListInput = ({id, placeholder, label, sendInput, disabled, errors}: CheckListInputProps) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  function handleCheckboxChange(slug: string) {
    const isChecked = checkedItems.includes(slug);
    let updatedItems: string[];

    if (isChecked) {
      updatedItems = checkedItems.filter(item => item !== slug);
    } else {
      updatedItems = [...checkedItems, slug];
    }

    setCheckedItems(updatedItems);

    const valueString = updatedItems.join(',');
    sendInput({
      name: id,
      value: valueString
    });
  }

  const checkList = [
    {
      label:'Descaracterização',
      slug:'descaracterizacao'
    },
    {
      label:'Reciclagem',
      slug:'reciclagem'
    },
    {
      label:'Material para enchimento',
      slug:'enchimento'
    },
    {
      label:'Preparação de novos materiais',
      slug:'preparacao'
    },
  ]

  return (
    <fieldset>
      {label && <label>{label}</label>}

      <div className="check-list">
        {checkList.map((item, index) => (
          <div key={index} className="check-item">
            <input
              type="checkbox"
              id={`${id}-${item.slug}`}
              checked={checkedItems.includes(item.slug)}
              onChange={() => handleCheckboxChange(item.slug)}
            ></input>
            <label htmlFor={`${id}-${item.slug}`}>{item.label}</label>
          </div>
        ))}
      </div>

    </fieldset>
  );
};