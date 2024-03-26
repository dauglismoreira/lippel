import './styles.css';

interface ContactInfoProps {
  data:any;
}

export const ContactInfo = ({data}: ContactInfoProps) => {
  return(
    <>
      <div className="contact-info-container">
        <div className="contact-info-content">
          <div className="col">
            <h3>Telefones</h3>
            <label>Atendimento Geral</label>
            <p>{data.phone1}</p>
            <label>Comercial e vendas</label>
            <p>{data.phone2}</p>
          </div>
          <div className="col">
            <h3>Localização</h3>
            <label>Escritório</label>
            <p>{data.address}</p>
          </div>
          <div className="col">
            <h3>Horário</h3>
            <p>{data.work}</p>
          </div>
          <div className="col">
            <h3>Email</h3>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <div dangerouslySetInnerHTML={{ __html: data.map }}></div>
      </div>
    </>
  )
}