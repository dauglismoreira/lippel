'use client';

import { IoIosArrowDown } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import './styles.css'
import { useState } from "react";
import Link from 'next/link';

interface VariationProductsProps{
    data:any;
}

export const VariationProducts = ({data}: VariationProductsProps) => {
    const [selectedVariation, setSelectedVariation] = useState<any>(data[0].id)

    return(
        <div className="variations-product">
            <div className="variations-container">
                <h3>Especificações Técnicas</h3>
                <p>Estas são as principais especificações desse modelo do produto. Quer mais detalhes? Faça o download do catálogo ou fale conosco.</p>
                <small>Modelos disponíveis</small>
                <div className="variations">
                    <div className="col">
                        <div className="variations-select">
                            {data.map((item:any, index:number) => (
                                <span
                                    key={index}
                                    className={`${selectedVariation === item.id ? 'active' : ''}`}
                                    onClick={() => setSelectedVariation(item.id)}
                                >{item.name}<IoIosArrowDown /></span>
                            ))}
                        </div>
                        <div className="variations-select-mobile">
                            <select value={selectedVariation} onChange={(e) => setSelectedVariation(e.target.value)}>
                                {data.map((item:any, index:number) => (
                                    <option
                                        key={index}
                                        value={item.id}
                                    >{item.name}</option>
                                ))}
                            </select>

                        </div>
                        <div className="variations-list">
                            <li>
                                <p>Dimensões gerais (LxAxC)</p>
                                <span>{data.filter((variation:any) => variation.id === selectedVariation)[0].dimensoes}</span>
                            </li>
                            <li>
                                <p>Abertura de cort (LxC)</p>
                                <span>{data.filter((variation:any) => variation.id === selectedVariation)[0].abertura}</span>
                            </li>
                            <li>
                                <p>Rotação</p>
                                <span>{data.filter((variation:any) => variation.id === selectedVariation)[0].rotacao}</span>
                            </li>
                            <li>
                                <p>Potência</p>
                                <span>{data.filter((variation:any) => variation.id === selectedVariation)[0].potencia}</span>
                            </li>
                            <li>
                                <p>Peso</p>
                                <span>{data.filter((variation:any) => variation.id === selectedVariation)[0].peso}</span>
                            </li>

                            <Link className="desktop-link" href={data.filter((variation:any) => variation.id === selectedVariation)[0].catalog}><IoMdDownload />Baixe o catálogo do produto</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="variation-image">
                            <img src={data.filter((variation:any) => variation.id === selectedVariation)[0].img}/>
                        </div>
                        <Link className="mobile-link" href={data.filter((variation:any) => variation.id === selectedVariation)[0].catalog}><IoMdDownload />Baixe o catálogo do produto</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}