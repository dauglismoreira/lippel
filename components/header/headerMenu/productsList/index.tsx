'use client'

import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import './styles.css'
import { useI18n } from "@/locales/client";
import Link from "next/link";

interface ProductsListProps {
    activeOverlayMenu:boolean;
    selectedMenu:string;
    data:any;
}

export const ProductsList = ({activeOverlayMenu, selectedMenu, data}: ProductsListProps) => {
    const t = useI18n()

    return(
        <div className={`overlay-menu-container ${activeOverlayMenu ? 'active' : ''}`}>
            <h3>{t('Products')}</h3>
            <div className="products-menu-container">
            
                {data.map((item:any, index:number) => (
                    <div key={index} className="products-menu-col">
                        <div className="products-menu-category">
                            <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                            <h2>{item.label}</h2>
                        </div>
                        <div className="products-menu-list">
                            {item.items.map((product:any, i:number) => (
                                <Link href={'/products/1'}  key={i}><li><MdOutlineKeyboardArrowRight /><p>{product.label}</p></li></Link>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}