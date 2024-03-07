import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import {applicationPage} from './mock.js'
import { ApplicationSlider } from '@/components/ui/applicationSlider';
import { ApplicationContactBanner } from '@/components/ui/applicationContactBanner';
import { ApplicationDescription } from '@/components/ui/applicationDescription';
import { ApplicationVideos } from '@/components/ui/applicationVideos';
import { ProductCard } from '@/components/ui/productCard';

export default async function Application() {
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
    {
      label:applicationPage.title,
      link:`/application/${applicationPage.slug}`
    },
  ]

  return (
    <main id="Application">
      <PagesTitle bg={'/img1.jpg'} title={applicationPage.title}/>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>

      <div className="page-content">
        <div dangerouslySetInnerHTML={{ __html: applicationPage.content }}></div>
      </div>
      <div className="application-gallery">
        <ApplicationSlider title="Galeria" data={applicationPage.gallery}/>
      </div>
      <ApplicationContactBanner/>
      <div className="application-desc">
        <ApplicationDescription data={applicationPage}/>
        <ApplicationVideos data={applicationPage.videos}/>
        <div className="sub-title-container">
          <h3>Máquinas utilizadas nesta Aplicação</h3>
        </div>
        <div className="products-container">
            {applicationPage.related.map((product, index) => (
                <ProductCard key={index} data={product}/>
            ))}
        </div>
      </div>
    </main>
  );
}
