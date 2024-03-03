'use client'

import useFields from '@/components/hooks/useFields';
import './styles.css';
import { TextInput } from '../formComponents/textInput';
import { PhoneInput } from '../formComponents/phoneInput';
import { TextAreaInput } from '../formComponents/textAreaInput';
import Link from 'next/link';
import { PrimaryButton } from '../primaryButton';
import { useState } from 'react';
import { ToogleButtonInput } from '../formComponents/toogleButtonInput';
import { FaGears } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";

interface ContactFormProps{
    extendEquip?:boolean
    title?:string
    subTitle?:string
}

export const ContactForm = ({extendEquip, title, subTitle}:ContactFormProps) => {

    const [accept1, setAccept1] = useState(false)
    const [accept2, setAccept2] = useState(false)

    const buttonOptions = [
        {
            label:'Peças de reposição',
            icon:<FaGears />,
            value:'reposicao'
        },
        {
            label:'Assistência técnica',
            icon:<FiTool />,
            value:'assistencia'
        },
    ]

    const {fields, handleFields} = useFields({
        interest:'reposicao',
        name: '',
        company:'',
        email: '',
        city:'',
        country:'',
        phone:'',
        serie_number:'',
        fabrication:'',
        model:'',
        message:'',
    })

    const sendForm = () => {
        console.log(fields)
    }

    return(
        <>
            <div className="contact-form-container">
                {extendEquip &&
                    <ToogleButtonInput
                        id='interest'
                        label={''}
                        old={fields.interest}
                        placeholder=''
                        sendInput={handleFields}
                        options={buttonOptions}
                    />
                }
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
                        id='company'
                        label={'Empresa'}
                        placeholder=''
                        sendInput={handleFields}
                    />
                    <TextInput
                        id='email'
                        label={'E-mail'}
                        placeholder=''
                        sendInput={handleFields}
                    />
                    <TextInput
                        id='city'
                        label={'Cidade'}
                        placeholder=''
                        sendInput={handleFields}
                    />
                    <TextInput
                        id='country'
                        label={'País'}
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
                {extendEquip &&
                    <>
                    <h3>Dados do Equipamento Requerido</h3>
                    <div className="input-grid-container">
                        <TextInput
                            id='serie_number'
                            label={'Número de série da máquina'}
                            placeholder=''
                            sendInput={handleFields}
                        />
                        <TextInput
                            id='fabrication'
                            label={'Ano de fábricação'}
                            placeholder=''
                            sendInput={handleFields}
                        />
                        <TextInput
                            id='model'
                            label={'Modelo'}
                            placeholder=''
                            sendInput={handleFields}
                        />
                    </div>
                    </>
                }

                <TextAreaInput
                    id='message'
                    label={'Mensagem'}
                    placeholder=''
                    sendInput={handleFields}
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