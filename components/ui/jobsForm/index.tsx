'use client'

import useFields from '@/components/hooks/useFields';
import './styles.css';
import { TextInput } from '../formComponents/textInput';
import { PhoneInput } from '../formComponents/phoneInput';
import { TextAreaInput } from '../formComponents/textAreaInput';
import Link from 'next/link';
import { PrimaryButton } from '../primaryButton';
import { useState } from 'react';
import { FileInput } from '../formComponents/fileInput';

interface JobsFormProps{
    title?:string
    subTitle?:string
}

export const JobsForm = ({title, subTitle}:JobsFormProps) => {

    const [accept1, setAccept1] = useState(false)
    const [accept2, setAccept2] = useState(false)

    const {fields, handleFields} = useFields({
        name: '',
        email: '',
        cpf: '',
        phone:'',
    })

    const sendForm = () => {
        console.log(fields)
    }

    const handleDoc = (file:any) => {
        console.log(file)
    }

    return(
        <>
            <div className="contact-form-container">
                {title && <h2>{title}</h2>}
                {subTitle && <p>{subTitle}</p>}
                <div className="input-grid-container">
                    <TextInput
                        id='name'
                        label={'Nome Completo'}
                        placeholder=''
                        sendInput={handleFields}
                    />
                    <TextInput
                        id='cpf'
                        label={'CPF'}
                        placeholder=''
                        sendInput={handleFields}
                    />
                    <TextInput
                        id='email'
                        label={'E-mail'}
                        placeholder=''
                        sendInput={handleFields}
                    />
                    <PhoneInput
                        id='phone'
                        label={'Telefone / Celular'}
                        placeholder=''
                        sendInput={handleFields}
                    />
                </div>

                <FileInput
                    id='file'
                    label='Anexar seu currículo'
                    description='O envio do currículo deve ser feito por meio de documento em formato DOC ou PDF'
                    sendInput={handleDoc}
                />
                
                <div className="acceptToogle">
                    <input checked={accept1} onChange={(e) => setAccept1(e.target.checked)} type='checkbox' id="check-1"></input>
                    <label htmlFor="check-1">Entendo que a Lippel processará meus dados conforme descrito na <Link href="#">Delcaração de Privacidade</Link>.</label>
                </div>
                <div className="acceptToogle">
                    <input checked={accept2} onChange={(e) => setAccept2(e.target.checked)} type='checkbox' id="check-2"></input>
                    <label htmlFor="check-2">Autorizo que os meus dados sejam transferido para a Lippel, para efeitos de marketing, estudo de mercado e publicidade e que sejam recolhidos, processados e utilizados para esses efeitos.</label>
                </div>
                {(accept1 && accept2) ?
                    <PrimaryButton action={sendForm}>Enviar</PrimaryButton>
                    :
                    <PrimaryButton disabled={true}>Enviar</PrimaryButton>
                }        
            </div>
        </>
    )
}