import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { ContactPage } from '@/components/ui/contactPage';
import { ContactInfo } from '@/components/ui/contactInfo';

export default async function Contact() {
  const t = await getI18n();

  const breadCrumbs = [
    {
      label:'Home',
      link:'/'
    },
    {
      label:t('Contact'),
      link:'/contact'
    },
  ]

  const page = {
    title:'Fale com a Lippel',
    phone1:'+55 47 3534.4266',
    phone2:'+55 47 3300.1222',
    address: 'Rua Pitangueira, 733, Centro, Agrolândia, Santa Catarina, 88.420-000',
    work:`Segunda à Sexta\n7h30 às 17h30`,
    email:'atendimento@lippel.com.br',
    map:'teste'
  }

  return (
    <main id="Contact">
      <PagesTitle title={page.title}/>
      
      <div className="page-content">
        <ContactPage breadCrumbs={breadCrumbs}/>
      </div>
      <ContactInfo data={page}/>
      <span className="bg-fix"></span>
    </main>
  );
}
