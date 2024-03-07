'use client';

import './styles.css';
import {applicationsMock} from './mock.js'
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export const ApplicationsList = () => {
    
    const [activeAcc, setActiveAcc] = useState('')

    return(
        <>
            <div className="applications-list-container">
                {applicationsMock.map((item, index) => (
                    <div key={index} className="application-list-item">
                        <h3>{item.label}</h3>
                        <ul>
                            {item.items.map((opt, i) => (
                                <li key={i}><Link href={opt.link}>{opt.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="applications-accordion-container">
                {applicationsMock.map((item, index) => (
                    <div
                        key={index}
                        className={`application-accordion-item ${activeAcc === item.label ? 'open' : 'close'}`}
                        onClick={() => setActiveAcc(item.label)}
                    >
                        <div className="accordion-title">
                            <h3>{item.label}</h3><IoIosArrowDown />
                        </div>
                        <ul className="accordion-body">
                            {item.items.map((opt, i) => (
                                <li key={i}><Link href={opt.link}>{opt.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}
