import {I18nProviderClient} from '@/locales/client';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ReactNode } from 'react';

export default function NotFound({params: {locale}, children}: { params: { locale: string }, children: ReactNode }) {

  return <html>
    <body>
      <I18nProviderClient locale={locale}>
      <Header/>
        {children}
      <Footer/>
      </I18nProviderClient>
    </body>
    </html>
}