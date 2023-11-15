import { api } from '@/app/api'
import { TwoSides } from './TwoSides'

const defaultData = {
  headerText: 'The 88888 Billion Dollar Woman',
  mainText:
    'With over $8 Billion in sales, Jade Mills has developed a global reputation as the top Los Angeles & Beverly Hills real estate agent. She is ranked as the #1 Agent Worldwide for Coldwell Banker. Due to her expertise in the Beverly Hills real estate market and her integrity, loyalty, and professionalism, Jade is sought out by A-list celebrities, tech founders, and business leaders. Jade is frequently featured as a luxury real estate expert on national media and appears as a keynote speaker at real estate conferences around the globe. Contact Jade Mills to sell & find houses, gated estates, condos, mansions, and luxury homes for sale in Beverly Hills, Malibu, Bel Air & more.',
  buttonContent: 'Узнать Джейд',
  posterUrl: 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/afdjq4dnpbljwzte7c30/jade-mills',
  posterAlt: 'Фотография Джейд',
}

async function TwoSidesWrapper() {
  const data = await api.getTwoSides()
  return data && <TwoSides {...data} />
}

export { TwoSidesWrapper }
