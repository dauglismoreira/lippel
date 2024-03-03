import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { JobsForm } from '@/components/ui/jobsForm';
import { getI18n } from '@/locales/server';

export default async function Curriculum(){
    const t = await getI18n();

    const breadCrumbs = [
      {
        label:'Home',
        link:'/'
      },
      {
        label:'Currículos',
        link:'/curriculum'
      },
    ]
  
    const page = {
      title:'Currículos',
    }
  
    return (
      <main id="Curriculum">
        <PagesTitle title={page.title}/>
        <BreadCrumbs breadCrumbs={breadCrumbs}/>
  
        <div className="page-content">
            <div className="container-form">
                <JobsForm
                title=""
                subTitle="Enviei seu currículo para nosso banco de dados, quando abrir uma vaga que você se encaixar entraremos em contato."
                />
            </div>
        </div>
      </main>
    );
}