import { api } from '@/app/api'
import Contact from './Contact'

const defaultData = {
  backgroundUrl:
    'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/ekx5oanyqhqthp7xtotw/pjyibgug3kl9m2nh3nw2',
  titleText: 'Connect With Jade',
  buttonText: 'Contact Jade',
}

async function ContactWrapper() {
  const data = await api.getContact()
  return data && <Contact {...data} />
}

export { ContactWrapper }
