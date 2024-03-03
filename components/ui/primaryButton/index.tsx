import { ReactNode } from 'react';
import Link from 'next/link';
import './styles.css';

interface PrimaryButtonProps {
    link?:string;
    children:ReactNode;
    action?:() => void;
    className?:string;
    disabled?:boolean;
}

export const PrimaryButton = ({link, action, children, className, disabled}: PrimaryButtonProps) => {
    return(
        link ?
        <Link href={link}>
            <button className={`primary-button  ${className ? className : 'default'}`}>{children}</button>
        </Link>
        :
        <button
            onClick={action}
            disabled={disabled ? disabled : false}
            className={`primary-button ${className ? className : 'default'}`}
        >
            {children}
        </button>
    )
}