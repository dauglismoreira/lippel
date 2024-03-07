'use client';

import useScreenSize from '@/components/hooks/useScreenSize';
import './styles.css';
import { PrimaryButton } from '../primaryButton';

interface ProductsBenefitsProps{
    data:any;
}

export const ProductsBenefits = ({data}: ProductsBenefitsProps) => {
    const {width, isLargeScreen} = useScreenSize(1024)

    return(
        <div className="benefits-container">
            <div className="benefits-items" style={{paddingLeft:`${width > 1400 ? (width - 1400) / 2 : 15}px`}}>
                <h3>Vantagens</h3>
                {data.vantagens.map((item:any, index:number) => (
                    <li key={index}>{item.label}</li>
                ))}
            </div>
            <div className="benefits-image">
                <img src={data.sencondary_image}/>
                <div className="contact-bar">
                    <h5>{data.contact.label}</h5>
                    <PrimaryButton link={data.contact.link}>{data.contact.button}</PrimaryButton>
                </div>
            </div>
        </div>
    )
}