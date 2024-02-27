import './styles.css';

interface PrimaryButtonProps {
    label:string;
    link:string;
}

export const PrimaryButton = ({label, link}: PrimaryButtonProps) => {
    return(
        <button className="primary-button">{label}</button>
    )
}