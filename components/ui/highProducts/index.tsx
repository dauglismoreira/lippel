'use client';

import './styles.css'
import { ProductCard } from '../productCard';
import { useState } from 'react';
import { TitleSection } from '../sectionTitle/intex';

interface HighProductsProps {
    title?:string;
    menu?:boolean;
    bg?:string;
    text?:string;
}

export const HighProducts = ({title, menu, bg, text}: HighProductsProps) => {
    const [selectedItem, setselectedItem] = useState('todos')
    const highMock = [
        {
            cover:'',
            category:'Triturador de resíduos',
            title:'Triturador Móvel de dois eixos MRW',
            skills:[
                {
                    label:'Dimensões gerais (LxAxC)',
                    value:'2550 x 4000 x 8850 mm'
                },
                {
                    label:'Abertura de corte (LxC)',
                    value:'2340 x 1720 mm'
                },
                {
                    label:'Volume da tremonha',
                    value:'3m³'
                },
                {
                    label:'Rotação',
                    value:'44 RPM'
                },
            ],
            id:1
        },
        {
            cover:'',
            category:'PICADORES FLORESTAIS A TAMBOR',
            title:'Picador e Triturador série T-REX 900',
            skills:[
                {
                    label:'Dimensões gerais (LxAxC)',
                    value:'1500 x 2800 x 4300 mm'
                },
                {
                    label:'Abertura de corte (LxC)',
                    value:'900 x 550 mm'
                },
                {
                    label:'Produção estimada',
                    value:'até 210 m3/h'
                },
                {
                    label:'Peso aproximado',
                    value:'19 a 22 Ton'
                },
            ],
            id:1
        },
        {
            cover:'',
            category:'PICADORES FLORESTAIS A TAMBOR',
            title:'Picador Florestal DRAGON 1200',
            skills:[
                {
                    label:'Dimensões gerais (LxAxC)',
                    value:'6600 x 3300 x 3700 mm'
                },
                {
                    label:'Abertura de corte (LxC)',
                    value:'1200x800 / 1200x1000 mm'
                },
                {
                    label:'Produção estimada',
                    value:'até 300 m³/h'
                },
                {
                    label:'Peso aproximado',
                    value:'12 - 16 Tonz'
                },
            ],
            id:1
        },
    ]

    const menuMock = [
        {
            label:'Todos',
            link:'todos'
        },
        {
            label:'Recentes',
            link:'recentes'
        },
        {
            label:'Trituradores',
            link:'trituradores'
        },
        {
            label:'Ver todos produtos',
            link:'todos_produtos'
        },
    ]


    return (
    <div className={`section-high ${bg ? bg : 'bg-primary'}`}>
        <TitleSection color={text} data={menu ? menuMock : []} title={title ? title : "Destaque"}/>
        <div className="products-container">
            {highMock.map((product, index) => (
                <ProductCard key={index} data={product}/>
            ))}
        </div>
      </div>
    );
  }
  