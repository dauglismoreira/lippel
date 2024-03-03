import { JobsForm } from '../jobsForm';
import { IoClose } from "react-icons/io5";
import './styles.css';

export const Modal = ({data, isOpen, onClose}:any) => {
    return(
        <div className={`modal ${isOpen ? 'active' : ''}`}>
            <div className="modal-container">
                <div className="close-btn" onClick={onClose}><IoClose /></div>

                <h1>Enviar Currículo</h1>
                <JobsForm
                    title={data.cargo}
                    subTitle="Nosso setor responsável irá receber seu currículo e analisa-lo."
                />
            </div>
            <div className='modal-overlay' onClick={onClose}></div>
        </div>
    )
}