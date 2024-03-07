import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { CatalogBlog } from '@/components/ui/catalogBlog';

export default async function News() {
  const t = await getI18n();

  const breadCrumbs = [
    {
      label:'Home',
      link:'/'
    },
    {
      label:'News',
      link:'/news'
    },
  ]

  const page = {
    title:'News',
  }

  return (
    <main id="News">
      <PagesTitle title={page.title}/>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>

      <div className="page-content">
        <CatalogBlog/>
      </div>
    </main>
  );
}
