import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { JobsList } from '@/components/ui/jobsList';
import { JobsForm } from '@/components/ui/jobsForm';

export default async function Jobs() {
  const t = await getI18n();

  const breadCrumbs = [
    {
      label:'Home',
      link:'/'
    },
    {
      label:'Jobs',
      link:'/jobs'
    },
  ]

  const page = {
    title:'Vagas de Emprego',
    description:'A Lippel oferece assistência técnica e o fornecimento de peças de reposição para seus equipamentos em todo o território nacional e internacional, com atendimento especializado e ágil.',
  }

  return (
    <main id="Jobs">
      <PagesTitle title={page.title}/>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>

      <div className="page-content">
        <JobsList/>
        <div className="container-form">
          <JobsForm
            title="Não há vagas para o que você procura?"
            subTitle="Enviei seu currículo para nosso banco de dados, quando abrir uma vaga que você se encaixar entraremos em contato."
          />
        </div>
      </div>
    </main>
  );
}
