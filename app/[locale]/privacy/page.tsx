import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { getI18n } from '@/locales/server';

export default async function Privacy(){
    const t = await getI18n();

    const breadCrumbs = [
      {
        label:'Home',
        link:'/'
      },
      {
        label:'Privacidade',
        link:'/privacy'
      },
    ]
  
    const page = {
      title:'Política de Privacidade',
      content:`
        <h3>Proteção de dados</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, lacus ut imperdiet tempor, nisl elit laoreet nunc, sed porta nisl lacus vitae metus. Etiam vitae urna ligula. Nam rhoncus, nisi ac imperdiet semper, nisl erat tristique tortor, sed viverra massa mi sit amet urna. Phasellus dignissim metus metus, nec convallis ex ornare lacinia. Quisque blandit cursus lacinia. Ut sodales sed risus et tincidunt. Donec molestie, nulla viverra finibus porttitor, neque enim bibendum leo, id lobortis metus eros sed ipsum. Nam metus metus, porta quis venenatis a, fermentum vel sem.</p>
        <p>Nam sed ullamcorper nulla, non tristique ligula. Vivamus vestibulum orci sit amet sem aliquet mattis. Suspendisse pulvinar tristique mollis. Maecenas id fermentum elit. Ut vulputate, purus pretium consequat consectetur, justo erat malesuada ipsum, ut semper enim magna a est. Aliquam auctor lorem nec justo molestie bibendum. Duis mauris nulla, dapibus sed commodo sodales, blandit at urna. Nulla et fermentum sem. Proin dapibus orci nisl, non commodo lacus sodales sit amet. Donec a pharetra arcu, sit amet aliquet augue. Morbi ut blandit nisl, non pharetra dolor. Proin lorem odio, venenatis quis dictum ut, luctus eget felis. Aliquam consequat massa id pharetra elementum.</p>
        <h3>Definições</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, lacus ut imperdiet tempor, nisl elit laoreet nunc, sed porta nisl lacus vitae metus. Etiam vitae urna ligula. Nam rhoncus, nisi ac imperdiet semper, nisl erat tristique tortor, sed viverra massa mi sit amet urna. Phasellus dignissim metus metus, nec convallis ex ornare lacinia. Quisque blandit cursus lacinia. Ut sodales sed risus et tincidunt. Donec molestie, nulla viverra finibus porttitor, neque enim bibendum leo, id lobortis metus eros sed ipsum. Nam metus metus, porta quis venenatis a, fermentum vel sem.</p>
        <p>Nam sed ullamcorper nulla, non tristique ligula. Vivamus vestibulum orci sit amet sem aliquet mattis. Suspendisse pulvinar tristique mollis. Maecenas id fermentum elit. Ut vulputate, purus pretium consequat consectetur, justo erat malesuada ipsum, ut semper enim magna a est. Aliquam auctor lorem nec justo molestie bibendum. Duis mauris nulla, dapibus sed commodo sodales, blandit at urna. Nulla et fermentum sem. Proin dapibus orci nisl, non commodo lacus sodales sit amet. Donec a pharetra arcu, sit amet aliquet augue. Morbi ut blandit nisl, non pharetra dolor. Proin lorem odio, venenatis quis dictum ut, luctus eget felis. Aliquam consequat massa id pharetra elementum.</p>
        <ul>
            <li>
                <h3>1. Pessoal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, lacus ut imperdiet tempor, nisl elit laoreet nunc, sed porta nisl lacus vitae metus. Etiam vitae urna ligula. Nam rhoncus, nisi ac imperdiet semper, nisl erat tristique tortor, sed viverra massa mi sit amet urna. Phasellus dignissim metus metus, nec convallis ex ornare lacinia. Quisque blandit cursus lacinia. Ut sodales sed risus et tincidunt. Donec molestie, nulla viverra finibus porttitor, neque enim bibendum leo, id lobortis metus eros sed ipsum. Nam metus metus, porta quis venenatis a, fermentum vel sem</p>
            </li>
            <li>
                <h3>2. Dados Subjetivos</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, lacus ut imperdiet tempor, nisl elit laoreet nunc, sed porta nisl lacus vitae metus. Etiam vitae urna ligula. Nam rhoncus, nisi ac imperdiet semper, nisl erat tristique tortor, sed viverra massa mi sit amet urna. Phasellus dignissim metus metus, nec convallis ex ornare lacinia. Quisque blandit cursus lacinia. Ut sodales sed risus et tincidunt. Donec molestie, nulla viverra finibus porttitor, neque enim bibendum leo, id lobortis metus eros sed ipsum. Nam metus metus, porta quis venenatis a, fermentum vel sem</p>
            </li>
            <li>
                <h3>3. Processamentos</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, lacus ut imperdiet tempor, nisl elit laoreet nunc, sed porta nisl lacus vitae metus. Etiam vitae urna ligula. Nam rhoncus, nisi ac imperdiet semper, nisl erat tristique tortor, sed viverra massa mi sit amet urna. Phasellus dignissim metus metus, nec convallis ex ornare lacinia. Quisque blandit cursus lacinia. Ut sodales sed risus et tincidunt. Donec molestie, nulla viverra finibus porttitor, neque enim bibendum leo, id lobortis metus eros sed ipsum. Nam metus metus, porta quis venenatis a, fermentum vel sem</p>
            </li>
        </ul>
        <h3>Cookies</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, lacus ut imperdiet tempor, nisl elit laoreet nunc, sed porta nisl lacus vitae metus. Etiam vitae urna ligula. Nam rhoncus, nisi ac imperdiet semper, nisl erat tristique tortor, sed viverra massa mi sit amet urna. Phasellus dignissim metus metus, nec convallis ex ornare lacinia. Quisque blandit cursus lacinia. Ut sodales sed risus et tincidunt. Donec molestie, nulla viverra finibus porttitor, neque enim bibendum leo, id lobortis metus eros sed ipsum. Nam metus metus, porta quis venenatis a, fermentum vel sem.</p>
        <p>Nam sed ullamcorper nulla, non tristique ligula. Vivamus vestibulum orci sit amet sem aliquet mattis. Suspendisse pulvinar tristique mollis. Maecenas id fermentum elit. Ut vulputate, purus pretium consequat consectetur, justo erat malesuada ipsum, ut semper enim magna a est. Aliquam auctor lorem nec justo molestie bibendum. Duis mauris nulla, dapibus sed commodo sodales, blandit at urna. Nulla et fermentum sem. Proin dapibus orci nisl, non commodo lacus sodales sit amet. Donec a pharetra arcu, sit amet aliquet augue. Morbi ut blandit nisl, non pharetra dolor. Proin lorem odio, venenatis quis dictum ut, luctus eget felis. Aliquam consequat massa id pharetra elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, lacus ut imperdiet tempor, nisl elit laoreet nunc, sed porta nisl lacus vitae metus. Etiam vitae urna ligula. Nam rhoncus, nisi ac imperdiet semper, nisl erat tristique tortor, sed viverra massa mi sit amet urna. Phasellus dignissim metus metus, nec convallis ex ornare lacinia. Quisque blandit cursus lacinia. Ut sodales sed risus et tincidunt. Donec molestie, nulla viverra finibus porttitor, neque enim bibendum leo, id lobortis metus eros sed ipsum. Nam metus metus, porta quis venenatis a, fermentum vel sem.</p>
        <p>Nam sed ullamcorper nulla, non tristique ligula. Vivamus vestibulum orci sit amet sem aliquet mattis. Suspendisse pulvinar tristique mollis. Maecenas id fermentum elit. Ut vulputate, purus pretium consequat consectetur, justo erat malesuada ipsum, ut semper enim magna a est. Aliquam auctor lorem nec justo molestie bibendum. Duis mauris nulla, dapibus sed commodo sodales, blandit at urna. Nulla et fermentum sem. Proin dapibus orci nisl, non commodo lacus sodales sit amet. Donec a pharetra arcu, sit amet aliquet augue. Morbi ut blandit nisl, non pharetra dolor. Proin lorem odio, venenatis quis dictum ut, luctus eget felis. Aliquam consequat massa id pharetra elementum.</p>
      `
    }
  
    return (
      <main id="Privacy">
        <PagesTitle title={page.title}/>
        <BreadCrumbs breadCrumbs={breadCrumbs}/>
  
        <div className="page-content">
            <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
        </div>
      </main>
    );
}