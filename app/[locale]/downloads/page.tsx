import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { getI18n } from '@/locales/server';
import Link from 'next/link'
import { DownloadList } from '@/components/ui/downloadList';

export default async function Downloads(){
    const t = await getI18n();

    const breadCrumbs = [
      {
        label:'Home',
        link:'/'
      },
      {
        label:'Downloads',
        link:'/downloads'
      },
    ]
  
    const page = {
      title:'Downloads',
    }

    const financingMock = [
      {
        label:'Revista Agro e Exportación - Región Fructífera Parte 2',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/espanha.jpg'
      },
      {
        label:'Revista Agro e Exportación - Región Fructífera Parte 1',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/espanha.jpg'
      },
      {
        label:'Woodchip Fuel Supply Chain Forest to Hopper',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'Energy Consumption in Wood Pellets Production',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'The European wood pellet markets - current status and prospects for 2020',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'Folder BL 55',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/brasil.jpg'
      },
      {
        label:'Revista Agro e Exportación - Región Fructífera Parte 2',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/espanha.jpg'
      },
      {
        label:'Revista Agro e Exportación - Región Fructífera Parte 1',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/espanha.jpg'
      },
      {
        label:'Woodchip Fuel Supply Chain Forest to Hopper',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'Energy Consumption in Wood Pellets Production',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'The European wood pellet markets - current status and prospects for 2020',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'Folder BL 55',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/brasil.jpg'
      },
      {
        label:'Energy Consumption in Wood Pellets Production',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'The European wood pellet markets - current status and prospects for 2020',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'Folder BL 55',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/brasil.jpg'
      },
      {
        label:'Revista Agro e Exportación - Región Fructífera Parte 2',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/espanha.jpg'
      },
      {
        label:'Revista Agro e Exportación - Región Fructífera Parte 1',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/espanha.jpg'
      },
      {
        label:'Woodchip Fuel Supply Chain Forest to Hopper',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
      {
        label:'Energy Consumption in Wood Pellets Production',
        author:'Fernando Cillóniz',
        link:'#',
        flag:'/flags/reino_unido.jpg'
      },
    ]
  
    return (
      <main id="Downloads">
        <PagesTitle title={page.title}/>
        <BreadCrumbs breadCrumbs={breadCrumbs}/>
  
        <div className="page-content">
          <DownloadList data={financingMock}/>
        </div>
      </main>
    );
}