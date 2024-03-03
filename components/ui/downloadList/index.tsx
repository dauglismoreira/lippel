'use client';

import { useEffect, useState } from 'react';
import { PrimaryButton } from '../primaryButton';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";
import './styles.css';

export const DownloadList = ({data}:any) => {

    const [downloadsItems, setDownloadsItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 15

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = downloadsItems.slice(indexOfFirstItem, indexOfLastItem);

    const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      };
    
      const handleNextPage = () => {
        const totalPages = Math.ceil(downloadsItems.length / itemsPerPage);
        if (currentPage < totalPages) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      };

    useEffect(() => {
        if(data){
            setDownloadsItems(data)
        }
    }, [data])

    return(
        <div className="download-list">
            <div className="list header-list">
                <div className="list-item" style={{flex:1}}>
                </div>
                <div className="list-item" style={{flex:8}}>
                    <label>TÍTULO</label>
                </div>
                <div className="list-item hidden lg:block" style={{flex:2}}>
                    <label>AUTOR(es)</label>
                </div>
                <div className="list-item" style={{flex:3}}>
                </div>
            </div>

            {currentItems.map((item:any, index:number) => (
                <div key={index} className="list body-list">
                    <div className="list-item" style={{flex:1}}>
                        <img src={item.flag}/>
                    </div>
                    <div className="list-item" style={{flex:8}}>
                        <h5>{item.label}</h5>
                        <p className="lg:hidden block">{item.author}</p>
                    </div>
                    <div className="list-item hidden lg:block" style={{flex:2}}>
                        <p>{item.author}</p>
                    </div>
                    <div className="list-item text-center hidden lg:block" style={{flex:3}}>
                        <PrimaryButton>Download</PrimaryButton>
                    </div>
                    <div className="list-item text-center lg:hidden block" style={{flex:3}}>
                        <PrimaryButton><LuDownload /></PrimaryButton>
                    </div>
                </div>
            ))}

            <div className="download-pagination">
                <span>{`${indexOfFirstItem + 1} - ${indexOfLastItem} items`}</span>
                <button className="pagination-btn prev-btn" onClick={handlePrevPage}><BsArrowLeft /></button>
                <button className="pagination-btn next-btn" onClick={handleNextPage}><BsArrowRight /></button>
            </div>

        </div>
    )
}