import { IoSearchOutline } from "react-icons/io5"
import './styles.css';

export const SearchResult = () => {
    return(
        <div className="search-page">
            <div className="search-input-container">
                <input type="text" placeholder="O que você Procura?"></input>
                <IoSearchOutline/>
            </div>
        </div>
    )
}