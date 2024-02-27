import '@/app/globals.css'
import {ReactNode} from "react";
import {I18nProviderClient} from '@/locales/client';

export default function RootLayout({params: {locale}, children}: { params: { locale: string }, children: ReactNode }) {
  return <html lang={locale}>
  <body>
  <I18nProviderClient locale={locale}>
    {children}
  </I18nProviderClient>
  </body>
  </html>
}
