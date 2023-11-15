import Marquee from 'react-fast-marquee'
import Sponsor from './Sponsor'
import type { SponsorsBlock } from '@/app/api/types'
import styles from './Sponsors.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default function Sponsors({ imageUrls }: SponsorsBlock) {
  return (
    <section className={cx('sponsors')} data-header-style='black'>
      <div className={cx('sponsorsCarousel')}>
        <Marquee autoFill={true} speed={30}>
          {imageUrls.map((url, index) => {
            return <Sponsor key={index} imageUrl={url} alt='Спонсор' description='Описание' />
          })}
        </Marquee>
      </div>
    </section>
  )
}
