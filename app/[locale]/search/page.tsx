import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { getI18n } from '@/locales/server';
import { SearchResult } from '@/components/ui/searchResult';

export default async function Search(){
    const t = await getI18n();

    const breadCrumbs = [
      {
        label:'Home',
        link:'/'
      },
      {
        label:'Search',
        link:'/search'
      },
    ]
  
    const page = {
      title:'Search',
    }

    return (
      <main id="Search">
        <PagesTitle title={page.title}/>
        <BreadCrumbs breadCrumbs={breadCrumbs}/>
  
        <div className="page-content">
            <SearchResult/>
        </div>
      </main>
    );
}