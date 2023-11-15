import { api } from '@/app/api'
import { MagazineScroll } from './MagazineScroll'

const defaultMagazinesList = [
  {
    title: 'Inman news',
    subtitle: 'Jade Mills inducted into the Inman Golden I Hall of Fame.',
    imageUrl:
      'https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/uybm0z3udizc3zawgfri/a2r53917-1-scaled',
  },
  {
    title: 'Wall Street jhournal',
    subtitle: 'Jade Mills Sells Coachella Valley Home for $42 Million',
    imageUrl:
      'https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/v1mio2r87xaxgrkwjfly/im-469832-1',
  },
  {
    title: 'Mansion Global',
    subtitle: 'Jade Mills sells famed Beverly Park home for $70 Million.',
    imageUrl:
      'https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/fnv6lpn7xvcrql8uvdg7/jade-mills',
  },
  {
    title: 'Variety magazine',
    subtitle: "Mills is Coldwell Banker's No. 1 agent worldwide, and her expertise",
    imageUrl:
      'https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/ikb1lolrn7iclyfi0jrc/jade_beverly-park',
  },
]

async function MagazineScrollWrapper() {
  const data = await api.getMagazinesScroll()
  return data && <MagazineScroll magazinesList={data} />
}

export { MagazineScrollWrapper }
