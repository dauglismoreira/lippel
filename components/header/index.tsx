'use client';

import './styles.css'
import { HeaderContact } from "./headerContact";
import { HeaderMenu } from "./headerMenu";
import { FullSearch } from './headerMenu/fullSearch';
import { ProductsList } from './headerMenu/productsList';
import { useEffect, useState } from 'react';
import {productMenuMock} from './mock'
import {servicesMenuMock} from './mock'
import { ApplicationsList } from './headerMenu/applicationsList';
import { ToogleMenu } from './headerMenu/toogleMenu';

export const Header = () => {
    const [activeOverlayMenu, setActiveOverlayMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    const [activeSearchMenu, setActiveSearchMenu] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState('')

    const handleSearchMenu = () => {
        setActiveSearchMenu(!activeSearchMenu)
        setActiveOverlayMenu(false)
        setActiveMenu(false)
    }

    const handleProductsMenu = (item:string) => {
        if(item === selectedMenu || item === ''){
            setActiveOverlayMenu(false)
            setSelectedMenu('')
            setActiveMenu(false)
            setActiveSearchMenu(false)
        }else{
            setActiveOverlayMenu(true)
            setSelectedMenu(item)
            setActiveMenu(false)
            setActiveSearchMenu(false)
        }
    }

    const handleMenu = () => {
        setActiveMenu(!activeMenu)
        setActiveSearchMenu(false)
        setActiveOverlayMenu(false)
        setSelectedMenu('')
    }

    useEffect(() => {
        document.documentElement.style.overflow = (activeOverlayMenu || activeMenu || activeSearchMenu) ? 'hidden' : 'auto';

        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, [activeSearchMenu, activeMenu, activeOverlayMenu]);

    return(
        <>
        <div className="header">
            <div className="header-locale" onMouseOver={() => handleProductsMenu('')}>
                <div className="header-container">
                    <HeaderContact/>
                </div>
            </div>
            <div className="header-menu">
                <div className="header-container">
                    <HeaderMenu
                        handleSearchMenu={handleSearchMenu}
                        handleProductsMenu={handleProductsMenu}
                        handleMenu={handleMenu}
                        activeMenu={activeMenu}
                        selectedMenu={selectedMenu}
                    />
                </div>
            </div>
        </div>
        <div className="margin-fix"></div>

        {selectedMenu === 'products' && <ProductsList data={productMenuMock} activeOverlayMenu={activeOverlayMenu} selectedMenu={selectedMenu}/>}
        {selectedMenu === 'applications' && <ApplicationsList data={servicesMenuMock} activeOverlayMenu={activeOverlayMenu} selectedMenu={selectedMenu}/>}

        <FullSearch activeSearchMenu={activeSearchMenu}/>

        <ToogleMenu activeToogleMenu={activeMenu} onClose={() => setActiveMenu(false)}/>

        {activeOverlayMenu &&
            <div className="menu-overlay" onMouseOver={() => handleProductsMenu('')}></div>
        }
        {activeMenu &&
            <div className="menu-toogle-overlay" onClick={() => setActiveMenu(false)}></div>
        }
        </>
    )
}