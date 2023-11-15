import { Italiana, Roboto } from 'next/font/google'

//? docs: https://nextjs.org/docs/app/building-your-application/optimizing/fonts

const italiana = Italiana({ weight: ['400'], subsets: ['latin'], variable: '--font-italiana' })
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export { italiana, roboto }
