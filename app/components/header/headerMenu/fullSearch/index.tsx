import { IoSearchOutline } from "react-icons/io5"
import './styles.css'

interface FullSearchProps {
    activeSearchMenu:boolean
}

export const FullSearch = ({activeSearchMenu}: FullSearchProps) => {
    return(
        <div className={`full-search-menu ${activeSearchMenu ? 'active' : ''}`}>
            <div className="search-input-container">
                <input type="text" placeholder="O que você Procura?"></input>
                <IoSearchOutline/>
            </div>
        </div>
    )
}