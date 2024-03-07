import { PrimaryButton } from '../primaryButton';
import './styles.css';

export const ApplicationContactBanner = () => {
    return(
        <div className="application-contact-banner-container" style={{
            backgroundImage:`url('/about-banner.jpg')`
        }}>
            <div className="banner-content">
                <h1>Precisando de uma solução desta aplicação para sua empresa?</h1>
                <PrimaryButton link={'#'}>Entre em contato</PrimaryButton>
            </div>
        </div>
    )
}