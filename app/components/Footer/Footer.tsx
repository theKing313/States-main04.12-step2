import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'
import type { FooterBlock } from '@/app/api/types'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
const cx = classNames.bind(styles)

export default function Footer(props: FooterBlock) {
  const date = new Date()
  return (
    <footer className={cx('footer')} data-header-style='white'>
      <Newsletter {...props} />

      {/* <Image
        src='https://res.cloudinary.com/luxuryp/image/upload/v1675615709/jademillsestates.com/jademills-footer-logo-V1.png'
        alt='Спонсор'
        width={1920}
        height={1080}
        className={cx('footerDescriptionImage')}
      /> */}
      <p className={cx('footerDescription')}>
        The property information herein is derived from various sources that may include, but not be limited
        to, county records and the Multiple Listing Service, and it may include approximations. Although the
        information is believed to be accurate, it is not warranted and you should not rely upon it without
        personal verification. Not intended as a solicitation if your property is already listed by another
        broker. Affiliated real estate agents are independent contractor sales associates, not employees. ©
        {date.getFullYear()} md. All Rights Reserved.
      </p>

      <div className={cx('footerBottomBlock')}>
        <div className={cx('footerPartnerBlock')}>
          {/* <Image
            src='https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/yolvcdxm8a2vso9htrca/group-2147206425-1-1'
            alt='Партнёр'
            width={1920}
            height={1080}
            className={cx('footerPartnerImage')}
          /> */}
          <p className={cx('footerPartnerText')}>
            Powered by{' '}
            <Link href='/' className={cx('footerPartnerLink')}>
              medvedev & razdorsky
            </Link>
          </p>
        </div>
        <p className={cx('footerCopyright')}>
          Copyright &copy; {date.getFullYear()} |{' '}
          <Link href={'/'} className={cx('footerPolicy')}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  )
}
