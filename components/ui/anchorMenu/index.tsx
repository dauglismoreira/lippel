'use client';

import { useEffect, useState } from 'react';
import './styles.css';
import useScreenSize from '@/components/hooks/useScreenSize';
import useScrollHeight from '@/components/hooks/useScrollHeight';

export const AnchorMenu = () => {
    const [fixeBar, setFixeBar] = useState(false)
    const {isLargeScreen} = useScreenSize(1024)
    const scrollHeight = useScrollHeight()

    useEffect(() => {
        if(isLargeScreen){
            if(scrollHeight > 790){
                setFixeBar(true)
            }else{
                setFixeBar(false)
            }
        }else{
            if(scrollHeight > 325){
                setFixeBar(true)
            }else{
                setFixeBar(false)
            }
        }
    }, [scrollHeight])

    return(
        <div className={`anchorcmenu ${fixeBar ? 'fixe' : ''}`}>
            <div className="anchorcmenu-container">
                <div className="menu-item">Sobre</div>
                <div className="menu-item">Especificações técnicas</div>
                <div className="menu-item">Características e aplicações</div>
                <div className="menu-item">Imagens</div>
                <div className="menu-item">Vídeos</div>
            </div>
        </div>
    )
}