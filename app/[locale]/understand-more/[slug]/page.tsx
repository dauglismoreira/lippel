import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import {understandPage} from './mock.js'
import { RelatedProductsCarousel } from '@/components/ui/relatedProductsCarousel';

export default async function Understand() {
  const t = await getI18n();

  const breadCrumbs = [
    {
      label:'Home',
      link:'/'
    },
    {
      label:'Understand More',
      link:'/understand-more'
    },
    {
      label:understandPage.title,
      link:`/understand-more/${understandPage.slug}`
    },
  ]

  return (
    <main id="Understand">
      <PagesTitle title={understandPage.title}/>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>

      <div className="page-content">
        <div dangerouslySetInnerHTML={{ __html: understandPage.content }}></div>
      </div>
      <div className="sub-title-container">
        <h3>Máquinas utilizadas nesta solução</h3>
      </div>
      <RelatedProductsCarousel data={understandPage.related}/>
    </main>
  );
}
