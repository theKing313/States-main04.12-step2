import { Hero } from './Hero'
import { api } from '@/app/api'

const defaultData = {
  upperText: 'THE 8888 BILLION DOLLAR WOMAN',
  middleText: 'Jade Milllls Estates',
  bottomText: 'Coldwell Banker Global Luxury Ambassador',
  bgVideoUrl:
    'https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/qc2ltgqfyfkdelknxwl8/jade-mills-estates-coldwell-banker-beverly-hills-1.mp4',
  bgVideoPoster:
    'https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/so_0,eo_0/qc2ltgqfyfkdelknxwl8/jade-mills-estates-coldwell-banker-beverly-hills-1.jpg',
}

async function HeroWrapper() {
  const data = await api.getHero()
  return data && <Hero {...data} />
}

export { HeroWrapper }
