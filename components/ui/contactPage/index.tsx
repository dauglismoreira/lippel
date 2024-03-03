'use client';

import { useState } from 'react'
import { BreadCrumbs } from '../breadCrumbs'
import { ContactForm } from '../contactForm'
import { SelectInput } from '../formComponents/selectInput'
import './styles.css'

export const ContactPage = ({breadCrumbs}:any) => {
    const [dptoSelected, setDptoSelected] = useState('Departamento de Recursos Humanos')

    const handleDpto = (dpto:any) => {
        setDptoSelected(dpto.value)
    }

    return(
        <>
        <div className="page-content-col">
          <BreadCrumbs breadCrumbs={breadCrumbs}/>
          <h1>Escolha com qual setor deseja falar:</h1>
            <SelectInput
                id={'region'}
                sendInput={handleDpto}
                defaultOption={{label:'Depto. Recursos Humanos', value:'Departamento de Recursos Humanos'}}
                options={
                    [{label:'Depto. Recursos Humanos', value:'Departamento de Recursos Humanos'}]
                }
            />
        </div>
        <div className="page-content-col">
          <ContactForm
            title={dptoSelected}
            subTitle='Nosso setor responsável irá lhe atender ao seu chamado o mais breve possível.'
          />
        </div>
        </>
    )
}