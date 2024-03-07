import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { getI18n } from '@/locales/server';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { UnderstandCard } from '@/components/ui/understandCard';
import {understandMock} from './mock.js'

export default async function UnderstandMore() {
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
  ]

  const page = {
    title:'Understand More',
  }

  return (
    <main id="UnderstandMore">
      <PagesTitle title={page.title}/>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>

      <div className="page-content">
        {understandMock.map((item:any, index:number) => (
          <UnderstandCard key={index} data={item}/>
        ))}
      </div>
    </main>
  );
}
