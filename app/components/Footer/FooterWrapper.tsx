import { api } from '../../api'
import Footer from './Footer'

const defaultData = {
  phoneNumber: '310.285.7508',
  mail: 'homes@jademills.com',
  contactsInfo: 'Jade Mills CA DRE #00526877',
  address: '301 N Canon Dr. Suite R-05 Beverly Hills, CA 90210',
  socialLinks: [
    { href: '', title: 'Facebook' },
    { href: '', title: 'Instagram' },
    { href: '', title: 'Linkedin' },
    { href: '', title: 'Youtube' },
  ],
}

async function FooterWrapper() {
  const data = await api.getFooter()
  return data && <Footer {...data} />
}

export { FooterWrapper }
