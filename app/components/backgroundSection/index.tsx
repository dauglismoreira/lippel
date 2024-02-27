import { PrimaryButton } from '../ui/primaryButton';
import './styles.css'

export const BackgroundSection = () => {


    return (
        <div className="section-background-banner" style={{
            backgroundImage:`url('/banner-home.jpg')`
        }}>
            <div className="banner-content">
                <h1>Seja o motor da mudança.</h1>
                <PrimaryButton
                    label={'Conheça nossos produtos agora'}
                    link={'#'}
                />
            </div>
        </div>
    );
  }
  