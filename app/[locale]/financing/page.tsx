import { PagesTitle } from '@/components/ui/pagesTitle';
import './styles.css';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { getI18n } from '@/locales/server';
import Link from 'next/link'

export default async function Financing(){
    const t = await getI18n();

    const breadCrumbs = [
      {
        label:'Home',
        link:'/'
      },
      {
        label:'Financiamentos',
        link:'/financing'
      },
    ]
  
    const page = {
      title:'Financiamentos',
    }

    const financingMock = [
      {
        label:'Cartão BNDS',
        content:`
          <p>O que é o cartão BNDES? O cartão BNDES é um produto voltado para todas as empresas de micro, pequeno e médio portes que estejam em dia com suas obrigações com INSS, FGTS, RAIS e demais tributos federais.</p>
          <p>O que pode ser financiado pelo cartão BNDES? Máquinas, equipamentos e outros bens de produção que tenham fabricação total ou parcial no país e que, a critério do BNDES estejam relacionados à realização de investimentos, constantes dos catálogos expostos no portal de operações do BNDES.</p>
        `,
      },
      {
        label:'BNDES Finame',
        content:`
          <p>Financiamentos, sem limite de valor, para aquisição isolada de máquinas e equipamentos novos, de fabricação nacional, credenciados pelo BNDES, e capital de giro associado para micro, pequenas e médias empresas, através de instituições financeiras credenciadas.</p>
          <p>Taxa de juros</p>
          <p>Custo financeiro + Remuneração do BNDES + Remuneração da Instituição Financeira credenciada.</p>
          <p>Custo financeiro</p>
          <p>Taxa de juros de longo prazo - TJLP</p>
        `,
      },
      {
        label:'PROGER - Programa de Geração de Renda',
        content:`
          <p>Seus recursos são destinados ao financiamento de micro e pequenos produtores urbanos, de forma individual ou coletiva que desejam investir no crescimento do seu negócio ou obter recursos para o custeio de sua atividade. Seus agentes financeiros são: Banco do Brasil, Banco do Nordeste, Banco da Amazônia e Caixa Econômica Federal.</p>
          <p>Taxa de juros</p>
          <p>Varia conforme a finalidade do financiamento.</p>
        `,
      },
    ]
  
    return (
      <main id="Financing">
        <PagesTitle title={page.title}/>
        <BreadCrumbs breadCrumbs={breadCrumbs}/>
  
        <div className="page-content">
          {financingMock.map((item, index) => (
            <div key={index} className="financing-row">
              <div className="financing-sidebar">
                <h3>{item.label}</h3>
              </div>
              <div className="financing-body">
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>

                <Link href="#">Conheça mais</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
}