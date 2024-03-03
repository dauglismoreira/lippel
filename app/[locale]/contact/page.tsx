import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { ContactPage } from '@/components/ui/contactPage';

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
  }

  return (
    <main id="Contact">
      <PagesTitle title={page.title}/>
      
      <div className="page-content">
        <ContactPage breadCrumbs={breadCrumbs}/>
      </div>
      <span className="bg-fix"></span>
    </main>
  );
}
