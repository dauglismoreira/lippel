import './styles.css'
import { BlogCard } from '../blogCard';
import { TitleSection } from '../sectionTitle/intex';

interface HighBlogProps{
    title:string;
}

export const HighBlog = ({title}: HighBlogProps) => {
    const highMock = [
        {
            cover:'',
            category:'Tag',
            title:'Waste Expo Brasil 2023',
            description:'Caros clientes Lippel, Gostaríamos de compartilhar algumas informações sobre a Waste Expo Brasil 2023, a maior feira da América Latina na ...',
            date:'12 de outubro 2023',
            id:1
        },
        {
            cover:'',
            category:'Tag',
            title:'Alternativas para produção e fornecimento de energia para granjas',
            description:'Alternativas para produção e fornecimento de energia para granjas Cavacos de madeira são de longe o combustível mais abundante, viável e econômico ... ',
            date:'12 de outubro 2023',
            id:1
        },
        {
            cover:'',
            category:'Tag',
            title:'Picador RAPTOR Impulsiona a Transformação Sustentável na ...',
            description:'A Lippel, líder no fornecimento de soluções avançadas para o processamento de biomassa e energia renovável, alcançou um novo marco  ...',
            date:'12 de outubro 2023',
            id:1
        },
    ]


    return (
    <div className="section-blog">
        <TitleSection color="text-primary" title={title ? title : "Últimas Notícias"}/>
        <div className="blog-container">
            {highMock.map((post, index) => (
                <BlogCard key={index} data={post}/>
            ))}
        </div>
      </div>
    );
  }
  