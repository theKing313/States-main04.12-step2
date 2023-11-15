import 'node_modules/modern-normalize/modern-normalize.css'
import './globals.css'
import { italiana, roboto } from './utils/fonts'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'



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
      <body className={`${italiana.variable} ${roboto.className} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
