import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import {productPage} from './mock.js'
import { ProductTitle } from '@/components/ui/productTitle';
import { ProductsBenefits } from '@/components/ui/productsBenefits';
import { ProductsSkills } from '@/components/ui/productsSkills';
import { ProductsPhotos } from '@/components/ui/productsPhotos';
import { ProductsVideos } from '@/components/ui/productsVideos';
import { VariationProducts } from '@/components/ui/variationProducts';
import { ProductsForm } from '@/components/ui/productsForm';
import { HighProducts } from '@/components/ui/highProducts';
import { HighBlog } from '@/components/ui/highBlog';
import { AnchorMenu } from '@/components/ui/anchorMenu';

export default async function Product() {
  const t = await getI18n();

  const breadCrumbs = [
    {
      label:'Home',
      link:'/'
    },
    {
      label:'Trituradores',
      link:'/products/trituradores'
    },
    {
      label:productPage.title,
      link:`/products/trituradores/${productPage.slug}`
    },
  ]

  const paragraphs = productPage.description.split(/<\/p>/).filter(Boolean);
  const middleIndex = Math.ceil((paragraphs.length - 1) / 2);
  const firstColumn = paragraphs.slice(0, middleIndex).join('</p>');
  const secondColumn = paragraphs.slice(middleIndex).join('</p>');

  return (
    <main id="Product">
      <ProductTitle data={productPage}/>
      <AnchorMenu/>

      <div className="page-content">
        <BreadCrumbs breadCrumbs={breadCrumbs}/>
        <div className="introduction-container">
          <h3>{productPage.description_title}</h3>
          <div className="introduction">
            <div className="column">
              <div dangerouslySetInnerHTML={{ __html: firstColumn + '</p>' }}></div>
            </div>
            <div className="column">
              <div dangerouslySetInnerHTML={{ __html: secondColumn + '</p>' }}></div>
            </div>
          </div>
        </div>
      </div>
      <ProductsBenefits data={productPage}/>
      <ProductsSkills data={productPage}/>
      <ProductsPhotos data={productPage.gallery}/>
      <ProductsVideos data={productPage.videos}/>
      <VariationProducts data={productPage.variations}/>
      <HighProducts bg="bg-ultraSoftBlue" text="text-primary" title="Produtos relacionados" menu={false}/>
      <div className="contact-form">
        <ProductsForm
          title="Ficou interessado?"
          subTitle="Preencha os dados para orçamentos, pedidos ou mais Informações que entraremos em contato o mais breve possível"
        />
      </div>
      <HighBlog title="Notícias relacionadas"/>
    </main>
  );
}
