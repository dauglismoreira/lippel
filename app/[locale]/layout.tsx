import '@/app/globals.css'
import {ReactNode} from "react";
import {I18nProviderClient} from '@/locales/client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function RootLayout({params: {locale}, children}: { params: { locale: string }, children: ReactNode }) {
  return <html lang={locale}>
  <body>
  <I18nProviderClient locale={locale}>
    <Header/>
    {children}
    <Footer/>
  </I18nProviderClient>
  </body>
  </html>
}
