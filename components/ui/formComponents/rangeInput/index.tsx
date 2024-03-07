import {useState} from 'react';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

interface RangeInputProps {
  id: string
  label?: string
  old?: string | number | null | undefined | boolean
  sendInput: (values:any) => void
  disabled?: boolean
  max:number
  min: number
}

export const RangeInput = ({id, max, min, label, old, sendInput, disabled}: RangeInputProps) => {
    const [inputValues, setInputValues] = useState<any>([])

  function handleChange(values: any) {
    setInputValues({
        min: values.minValue,
        max: values.maxValue
    })
    // sendInput({
    //     min: values.minValue,
    //     max: values.maxValue
    // })
  }

  return (
    <fieldset>
        {label && <label>{label}</label>}

        <div className="range-container">
        <MultiRangeSlider
            min={min}
            max={max}
            className={'range'}
            style={{border: 'none', boxShadow: 'none', padding: '15px 0'}}
            label='false'
            ruler='false'
            barInnerColor='#BFCBD1'
            barLeftColor='#F8CA00'
            barRightColor='#F8CA00'
            subSteps='false'
            step={5}
            minValue={inputValues.min}
            maxValue={inputValues.max}
            onInput={(e: ChangeResult) => {
                handleChange(e)
            }}
        ></MultiRangeSlider>
        </div>

        <div className="range-values-container">
            <span>{inputValues.min}</span><span>{inputValues.max}</span>
        </div>

    </fieldset>
  );
};