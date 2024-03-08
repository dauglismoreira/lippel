import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import './styles.css'
import { useI18n } from "@/locales/client";
import { useState } from "react";
import Link from "next/link";

interface ApplicationsListProps {
    activeOverlayMenu:boolean;
    selectedMenu:string;
    data:any;
}

export const ApplicationsList = ({activeOverlayMenu, selectedMenu, data}: ApplicationsListProps) => {
    const t = useI18n()
    const [selectedApplication, setSelectedApplication] = useState('')

    return(
        <div className={`overlay-menu-container ${activeOverlayMenu ? 'active' : ''}`}>
            <h3>{t('Applications')}</h3>
            <div className="application-menu-container">
                <div className="application-menu-col">
                    {data.map((item:any, index:number) => (
                        <div
                            key={index}
                            className={`application-item ${selectedApplication === item.label ? 'active' : ''}`}
                            onClick={() => setSelectedApplication(item.label)}
                        >
                            <h4>{item.label}</h4><MdOutlineKeyboardArrowRight />
                        </div>
                    ))}
                </div>
                <div className="application-menu-col sub-item">
                    {selectedApplication!== '' &&
                    data.filter((items:any) => items.label === selectedApplication)[0].items.map((item:any, index:number) => (
                        <div
                            key={index}
                            className="application-sub-item"
                        >
                            <Link href="/applications/1">{item.label}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}