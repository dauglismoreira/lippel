import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { CatalogProducts } from '@/components/ui/catalogProducts';

export default async function Products() {
  const t = await getI18n();

  const breadCrumbs = [
    {
      label:'Home',
      link:'/'
    },
    {
      label:'Products',
      link:'/products'
    },
    {
      label:'Compostagem',
      link:'/products/compostagem'
    },
    {
      label:'Trituradores',
      link:'/products/compostagem/trituradores'
    },
  ]

  const page = {
    title:'Trituradores',
    content:`
      <p>Os trituradores de resíduos são capazes de processar diversos tipos de materiais, permitindo adequar os resíduos ou materiais as necessidades granulométricas para diversos fins industriais, ambientais e governamentais. Entre os resíduos que podem ser processados pelos trituradores podemos citar: madeira, papelão, papel, plástico, borrachas, alumínio, eletrodomésticos, lixo eletrônico, lixo hospitalar entre outros.</p>
      <p>Cada modelo de triturador possui características que o tornam mais eficiente para determinados processos.</p>
      <p>Possuímos trituradores de pequenos a grande porte que variam de potencias de 2 a perto de milhares de cavalos de potência para suprir uma demanda variável de aplicações e necessidades produtivas.</p>
      <p>Possuímos trituradores de pequenos a grande porte que variam de potencias de 2 a perto de milhares de cavalos de potência para suprir uma demanda variável de aplicações e necessidades produtivas.</p>
    `,
  }

  const paragraphs = page.content.split(/<\/p>/).filter(Boolean);
  const middleIndex = Math.ceil((paragraphs.length - 1) / 2);
  const firstColumn = paragraphs.slice(0, middleIndex).join('</p>');
  const secondColumn = paragraphs.slice(middleIndex).join('</p>');

  return (
    <main id="Products">
      <PagesTitle bg="/img1.jpg" title={page.title}/>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>

      <div className="page-content">
        <div className="column">
          <div dangerouslySetInnerHTML={{ __html: firstColumn + '</p>' }}></div>
        </div>
        <div className="column">
          <div dangerouslySetInnerHTML={{ __html: secondColumn + '</p>' }}></div>
        </div>
      </div>
      <div className="catalog-products">
        <div className="catalog-container">
          <CatalogProducts/>
        </div>
      </div>
    </main>
  );
}