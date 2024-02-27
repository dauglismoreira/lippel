'use client';

import { FaWhatsapp } from "react-icons/fa6";
import './styles.css'
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import Link from "next/link";

export const HeaderContact = () => {
    const t = useI18n()
    const locale: "pt-BR" | "en" | "es" = useCurrentLocale()
    const changeLocale = useChangeLocale()

    return(
        <>
            <div className="header-contact">
                <p>{t('Commercial and sales')}: <Link href={'https://wa.me/5555473534426'} target="_blank">+55 47 3534.4266 <FaWhatsapp /></Link></p>
            </div>
            <div className="locale">
                <li
                    className={`${locale === 'pt-BR' ? 'current-locale' : ''}`}
                    onClick={() => changeLocale('pt-BR')}
                >PT</li>
                <span className="separate"></span>
                <li
                    className={`${locale === 'es' ? 'current-locale' : ''}`}
                    onClick={() => changeLocale('es')}
                >EN</li>
                <span className="separate"></span>
                <li
                    className={`${locale === 'en' ? 'current-locale' : ''}`}
                    onClick={() => changeLocale('es')}
                >ES</li>
            </div>
        </>
    )
}