'use client';

import { useState } from 'react';
import { PrimaryButton } from '../primaryButton';
import './styles.css';
import { IoIosArrowDown } from "react-icons/io";
import { Modal } from '../modal';

export const JobsList = () => {

    const mockList = [
        {
            id:1,
            cargo:'Auxiliar de Produção',
            local:'Agrolândia',
            horario:'Segunda à Sexta das 7h30 às 17h30',
            requerida:'Segundo Grau Completo',
            desejada:'Mínimo de 2 anos de experiência na área',
            contrato:'CLT',
            button:{
                label:'Aplicar a vaga',
            },
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
        {
            id:2,
            cargo:'Auxiliar de Produção 2',
            local:'Agrolândia',
            horario:'Segunda à Sexta das 7h30 às 17h30',
            requerida:'Segundo Grau Completo',
            desejada:'Mínimo de 2 anos de experiência na área',
            contrato:'CLT',
            button:{
                label:'Aplicar a vaga',
            },
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
        {
            id:3,
            cargo:'Auxiliar de Produção 3',
            local:'Agrolândia',
            horario:'Segunda à Sexta das 7h30 às 17h30',
            requerida:'Segundo Grau Completo',
            desejada:'Mínimo de 2 anos de experiência na área',
            contrato:'CLT',
            button:{
                label:'Aplicar a vaga',
            },
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
        {
            id:4,
            cargo:'Auxiliar de Produção 4',
            local:'Agrolândia',
            horario:'Segunda à Sexta das 7h30 às 17h30',
            requerida:'Segundo Grau Completo',
            desejada:'Mínimo de 2 anos de experiência na área',
            contrato:'CLT',
            button:{
                label:'Aplicar a vaga',
            },
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
    ]

    const [modalOpen, setModalOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState([])
    const [selectedAccordion, setSelectedAccordion] = useState('')

    const handleModalJob = (item:any) => {
        setModalOpen(true)
        setSelectedJob(item)
    }


    return(
        <div className="job-list">
            <div className="list header-list">
                <div className="list-item" style={{flex:3}}>
                    <label>Cargo</label>
                </div>
                <div className="list-item" style={{flex:1}}>
                    <label>Local</label>
                </div>
                <div className="list-item" style={{flex:2}}>
                    <label>Horário</label>
                </div>
                <div className="list-item" style={{flex:2}}>
                    <label>Experiência requerida</label>
                </div>
                <div className="list-item" style={{flex:2}}>
                    <label>Experiência desejada</label>
                </div>
                <div className="list-item text-center" style={{flex:1}}>
                    <label>Contrato</label>
                </div>
                <div className="list-item" style={{flex:2}}>
                </div>
            </div>

                {mockList.map((item, index) => (
                    <div key={index} className="list body-list">
                        <div className="list-title">
                            <div
                                className={`list-item cursor-pointer ${selectedAccordion === item.cargo ? 'active' : ''}`}
                                style={{flex:3}}
                                onClick={() => setSelectedAccordion(prevState => prevState === item.cargo ? '' : item.cargo)}
                            >
                                <h3><IoIosArrowDown />{item.cargo}</h3>
                            </div>
                            <div className="list-item" style={{flex:1}}>
                                <p>{item.local}</p>
                            </div>
                            <div className="list-item" style={{flex:2}}>
                                <p>{item.horario}</p>
                            </div>
                            <div className="list-item" style={{flex:2}}>
                                <p>{item.requerida}</p>
                            </div>
                            <div className="list-item" style={{flex:2}}>
                                <p>{item.desejada}</p>
                            </div>
                            <div className="list-item" style={{flex:1}}>
                                <p className="font-semibold text-center">{item.contrato}</p>
                            </div>
                            <div className="list-item" style={{flex:2}}>
                                <PrimaryButton action={() => handleModalJob(item)}>{item.button.label}</PrimaryButton>
                            </div>
                        </div> 
                        <div className={`list-body ${selectedAccordion === item.cargo ? 'active' : ''}`}>
                            {item.description}
                        </div>
                    </div>
                ))}

            <Modal
                isOpen={modalOpen}
                data={selectedJob}
                onClose={() => setModalOpen(false)}
            ></Modal>

        </div>
    )
}