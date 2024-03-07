import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { ApplicationsList } from '@/components/ui/applicationsList';

export default async function Applications() {
  const t = await getI18n();

  const breadCrumbs = [
    {
      label:'Home',
      link:'/'
    },
    {
      label:t('Applications'),
      link:'/applications'
    },
  ]

  const page = {
    title:t('Applications'),
  }

  return (
    <main id="Applications">
      <PagesTitle title={page.title}/>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>

      <div className="page-content">
          <ApplicationsList/>
      </div>
    </main>
  );
}
