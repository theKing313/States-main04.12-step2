import 'node_modules/modern-normalize/modern-normalize.css'
import './globals.css'
import { italiana, roboto } from './utils/fonts'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Providers from './utils/provider'
import ClientOnly from './components/AuthProvider/GoogleOnTop'
import PageAuth from './components/AuthProvider/page'


import Script from "next/script";


export const metadata: Metadata = {
  title: 'Estates',
}


export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang='ru'>
      <head>


        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(95068534, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
              });`,
          }}
        />
        <noscript>
          <div>
            <img
              src='https://mc.yandex.ru/watch/95068534'
              style={{ position: 'absolute', left: '-9999px' }}
              alt=''
            />
          </div>
        </noscript>
      </head>

      <body className={`${italiana.variable} ${roboto.className} ${roboto.variable}`}>

        {/* <div id="g_id_onload"
          data-client_id="438776048708-hq1a59vs7l3j6hf1f4uj6pl79kctjq3h.apps.googleusercontent.com"
          data-context="use"
          data-callback="easde"
          data-close_on_tap_outside="false"
          data-itp_support="true">
        </div> */}
        <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive" />

        <Providers>

          {children}
        </Providers>


      </body>

    </html>
  )
}


