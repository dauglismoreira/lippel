import './styles.css'
import { useI18n } from "@/locales/client";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderMenuProps{
    handleSearchMenu:() => void;
    handleProductsMenu:(item:string) => void;
    handleMenu:() => void;
    activeMenu:boolean;
    selectedMenu:string;
}

export const HeaderMenu = ({
    handleSearchMenu, handleProductsMenu, handleMenu, activeMenu, selectedMenu
}: HeaderMenuProps) => {
    const router = useRouter()
    const t = useI18n()
    const [activeItemMenu, setActiveItemMenu] = useState('')

    const setProductsMenu = (item:string) => {
        handleProductsMenu(item)
        if(item === activeItemMenu){
            setActiveItemMenu('')
        }else{
            setActiveItemMenu(item)
        }
    }

    return(
        <>
        <div className="header-col">
            <div className="logo">
                <Link href="/"><Image
                    src="/logo-lippel.png"
                    alt="Logo Lippel"
                    height='36'
                    width='171'
                ></Image></Link>
            </div>
            <div className="menu">
                <li
                    className={`${selectedMenu === 'products' ? 'active' : ''}`}
                    onClick={() => setProductsMenu('products')}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.73329 8.7335L12.3291 4.446L10.6083 1.58766C10.375 1.19877 10.0395 1.00433 9.60204 1.00433C9.16454 1.00433 8.82913 1.19877 8.59579 1.58766L5.73746 6.34183L9.73329 8.7335ZM21.0208 16.6668L18.425 12.3502L22.4791 10.0168L24.3458 13.1377C24.5597 13.4682 24.6763 13.8377 24.6958 14.246C24.7152 14.6543 24.6277 15.0335 24.4333 15.3835C24.2388 15.7724 23.952 16.0835 23.5729 16.3168C23.1937 16.5502 22.7805 16.6668 22.3333 16.6668H21.0208ZM17.6666 24.8335L13 20.1668L17.6666 15.5002V17.8335H23.2083L21.5166 21.2168C21.3027 21.6057 21.0111 21.9168 20.6416 22.1502C20.2722 22.3835 19.8638 22.5002 19.4166 22.5002H17.6666V24.8335ZM6.37913 22.5002C5.99024 22.5002 5.63538 22.3981 5.31454 22.1939C4.99371 21.9897 4.75552 21.7224 4.59996 21.3918C4.4444 21.0807 4.37149 20.755 4.38121 20.4147C4.39093 20.0745 4.48329 19.7585 4.65829 19.4668L5.64996 17.8335H10.6666V22.5002H6.37913ZM3.49163 19.1752L1.59579 15.3835C1.42079 15.0335 1.33815 14.6592 1.34788 14.2606C1.3576 13.862 1.4694 13.4877 1.68329 13.1377L2.14996 12.3502L0.166626 11.1543L6.55413 9.55016L8.15829 15.9668L6.14579 14.7418L3.49163 19.1752ZM19.2416 9.20016L12.8541 7.596L14.8666 6.40016L11.2208 0.333496H15.3333C15.7416 0.333496 16.1257 0.435579 16.4854 0.639746C16.8451 0.843913 17.1319 1.121 17.3458 1.471L18.8625 4.0085L20.8458 2.7835L19.2416 9.20016Z"/>
                    </svg>
                    {t('Products')}</li>
                <li
                    className={`${selectedMenu === 'applications' ? 'active' : ''}`}
                    onClick={() => setProductsMenu('applications')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.38914 20.6102C2.33003 19.5509 1.5004 18.3268 0.900241 16.938C0.30008 15.5491 0 14.1132 0 12.6301C0 11.1471 0.282428 9.68176 0.847285 8.23404C1.41214 6.78633 2.33003 5.42689 3.60096 4.15573C4.42471 3.33182 5.44263 2.62562 6.65472 2.03712C7.86681 1.44862 9.30249 0.983703 10.9618 0.642372C12.621 0.301041 14.5156 0.0950656 16.6456 0.0244454C18.7756 -0.0461747 21.1586 0.0362155 23.7946 0.271616C23.9829 2.76686 24.0417 5.06202 23.9711 7.15708C23.9005 9.25215 23.7063 11.1412 23.3886 12.8244C23.0709 14.5075 22.6237 15.9787 22.0471 17.2381C21.4704 18.4975 20.7585 19.5509 19.9112 20.3984C18.6638 21.646 17.3399 22.5582 15.9396 23.1349C14.5392 23.7116 13.1094 24 11.6502 24C10.1204 24 8.62584 23.6999 7.16662 23.0996C5.70741 22.4993 4.44825 21.6695 3.38914 20.6102ZM7.34314 20.0453C8.02568 20.4454 8.72586 20.7338 9.4437 20.9104C10.1615 21.0869 10.897 21.1752 11.6502 21.1752C12.7328 21.1752 13.8037 20.9574 14.8628 20.522C15.9219 20.0865 16.9339 19.3861 17.8989 18.421C18.3225 17.9973 18.7521 17.4029 19.1875 16.6378C19.6229 15.8728 19.9995 14.8723 20.3172 13.6365C20.6349 12.4006 20.8762 10.9058 21.0409 9.15211C21.2057 7.39837 21.2292 5.30919 21.1115 2.88456C19.9583 2.83748 18.6579 2.81983 17.2105 2.8316C15.763 2.84337 14.3215 2.95518 12.8858 3.16704C11.4501 3.3789 10.0851 3.72024 8.79059 4.19104C7.49612 4.66184 6.43702 5.30919 5.61327 6.13309C4.55416 7.19239 3.82455 8.23993 3.42445 9.27569C3.02434 10.3115 2.82428 11.3119 2.82428 12.277C2.82428 13.6659 3.08906 14.8841 3.61861 15.9316C4.14817 16.9792 4.613 17.7148 5.01311 18.1385C6.00161 16.2553 7.30784 14.4486 8.9318 12.7184C10.5558 10.9882 12.4504 9.56994 14.6157 8.46356C12.9211 9.94658 11.4442 11.6238 10.1851 13.4952C8.92592 15.3667 7.9786 17.55 7.34314 20.0453Z"/>
                    </svg>
                    {t('Applications')}</li>
                <li
                    className={`${selectedMenu === 'services' ? 'active' : ''}`}
                    onClick={() => router.replace('/services')}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9916 24.4708C19.836 24.4708 19.6902 24.4465 19.5541 24.3979C19.418 24.3493 19.2916 24.2667 19.1749 24.15L13.2249 18.2C13.1083 18.0833 13.0256 17.9569 12.977 17.8208C12.9284 17.6847 12.9041 17.5389 12.9041 17.3833C12.9041 17.2278 12.9284 17.0819 12.977 16.9458C13.0256 16.8097 13.1083 16.6833 13.2249 16.5667L15.7041 14.0875C15.8208 13.9708 15.9471 13.8882 16.0833 13.8396C16.2194 13.791 16.3652 13.7667 16.5208 13.7667C16.6763 13.7667 16.8221 13.791 16.9583 13.8396C17.0944 13.8882 17.2208 13.9708 17.3374 14.0875L23.2874 20.0375C23.4041 20.1542 23.4867 20.2806 23.5353 20.4167C23.5839 20.5528 23.6083 20.6986 23.6083 20.8542C23.6083 21.0097 23.5839 21.1556 23.5353 21.2917C23.4867 21.4278 23.4041 21.5542 23.2874 21.6708L20.8083 24.15C20.6916 24.2667 20.5652 24.3493 20.4291 24.3979C20.293 24.4465 20.1471 24.4708 19.9916 24.4708ZM19.9916 21.7L20.8374 20.8542L16.5499 16.5667L15.7041 17.4125L19.9916 21.7ZM3.97909 24.5C3.82353 24.5 3.67284 24.4708 3.527 24.4125C3.38117 24.3542 3.24992 24.2667 3.13325 24.15L0.683252 21.7C0.566585 21.5833 0.479085 21.4521 0.420752 21.3062C0.362419 21.1604 0.333252 21.0097 0.333252 20.8542C0.333252 20.6986 0.362419 20.5528 0.420752 20.4167C0.479085 20.2806 0.566585 20.1542 0.683252 20.0375L6.86659 13.8542H9.34575L10.3374 12.8625L5.52492 8.05H3.86242L0.333252 4.52083L3.62909 1.225L7.15825 4.75417V6.41667L11.9708 11.2292L15.3541 7.84583L14.0999 6.59167L15.7333 4.95833H12.4374L11.6208 4.14167L15.7624 0L16.5791 0.816667V4.1125L18.2124 2.47917L22.3541 6.62083C22.6846 6.95139 22.9374 7.32569 23.1124 7.74375C23.2874 8.16181 23.3749 8.60417 23.3749 9.07083C23.3749 9.5375 23.2874 9.98472 23.1124 10.4125C22.9374 10.8403 22.6846 11.2194 22.3541 11.55L19.8749 9.07083L18.2416 10.7042L17.0166 9.47917L10.9791 15.5167V17.9667L4.79575 24.15C4.67909 24.2667 4.5527 24.3542 4.41659 24.4125C4.28047 24.4708 4.13464 24.5 3.97909 24.5ZM3.97909 21.7L8.93742 16.7417V15.8958H8.09159L3.13325 20.8542L3.97909 21.7ZM3.97909 21.7L3.13325 20.8542L3.57075 21.2625L3.97909 21.7Z"/>
                    </svg>
                    {t('Services')}</li>
                <li
                    className={`${selectedMenu === 'contact' ? 'active' : ''}`}
                    onClick={() => setProductsMenu('contact')}>
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.33333 18.6667C1.69167 18.6667 1.14236 18.4382 0.685417 17.9812C0.228472 17.5243 0 16.975 0 16.3333V2.33333C0 1.69167 0.228472 1.14236 0.685417 0.685417C1.14236 0.228472 1.69167 0 2.33333 0H21C21.6417 0 22.191 0.228472 22.6479 0.685417C23.1049 1.14236 23.3333 1.69167 23.3333 2.33333V16.3333C23.3333 16.975 23.1049 17.5243 22.6479 17.9812C22.191 18.4382 21.6417 18.6667 21 18.6667H2.33333ZM11.6667 10.5L2.33333 4.66667V16.3333H21V4.66667L11.6667 10.5ZM11.6667 8.16667L21 2.33333H2.33333L11.6667 8.16667ZM2.33333 4.66667V2.33333V16.3333V4.66667Z"/>
                    </svg>
                    {t('Contact')}</li>
            </div>
        </div>
        <div className="actions">
            <IoSearchOutline onClick={handleSearchMenu} className="search-icon"/>
            <div className={`toogle ${activeMenu ? 'active' : ''}`} onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </>
    )
}