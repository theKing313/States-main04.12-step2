import { api } from '@/app/api'
import Sponsors from './Sponsors'

const defaultData = {
  imageUrls: [
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/iss8yr03xffevzv4jdjh/5',
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/volkas9i8wcxh2inruel/4',
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dvjvff80qkb33x6ncmjk/3',
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ygdkpm8d8qlqqrhj6rbn/2',
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/yhidsutgt2iindtal38b/01',
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/omkgl3ukf0jc37mlhg4y/therealdeal-logo',
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rlusb36fg1tayibigigd/9',
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/s1iddcsrd7slbie50bnf/8',
    'https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/jwjwox0t8fvncbtlqvt8/7',
    'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/b78dzpo1xtjyvifexs9m/6',
  ],
}

async function SponsorsWrapper() {
  const data = await api.getSponsors()
  return data && <Sponsors {...data} />
}

export { SponsorsWrapper }
