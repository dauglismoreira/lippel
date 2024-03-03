import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { ContactForm } from '@/components/ui/contactForm';

export default async function Services() {
  const t = await getI18n();

  const breadCrumbs = [
    {
      label:'Home',
      link:'/'
    },
    {
      label:t('Services'),
      link:'/services'
    },
  ]

  const page = {
    title:t('Services'),
    description:'A Lippel oferece assistência técnica e o fornecimento de peças de reposição para seus equipamentos em todo o território nacional e internacional, com atendimento especializado e ágil.',
  }

  return (
    <main id="Services">
      <PagesTitle title={page.title}/>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>

      <div className="page-content">
        <p>{page.description}</p>

        <ContactForm
          extendEquip={true}
          title='Preencha os dados'
          subTitle='Nosso setor responsável irá lhe atender ao seu chamado o mais breve possível.'
        />
      </div>
    </main>
  );
}
