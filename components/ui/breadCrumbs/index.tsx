import './styles.css';
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";

export const BreadCrumbs = ({breadCrumbs}: any) => {
    return(
        <div className='bread-cointainer'>
            <div className='bread-content'>
                <IoIosArrowBack />
                {breadCrumbs.map((item: any, index: number) => (
                    <Link key={index} href={item.link}>{item.label}</Link>
                ))}
            </div>
        </div>
    )
}