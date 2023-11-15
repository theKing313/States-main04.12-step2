import Image from 'next/image'
import styles from './Magazine.module.scss'
import type { MagazineI } from '@/app/api/types'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Magazine({ title, subtitle, imageUrl }: MagazineI) {

  return (
    <section className={cx('magazine-wrapper', 'item')}>
      <div className={cx('top')}>
        <p className={cx('title')}>{title}</p>
        <p className={cx('subtitle')}>{subtitle}</p>
      </div>
      <div className={cx('image-wrapper')}>
        <Image className={cx('image')} src={imageUrl} fill={true} alt={title} />
      </div>
      <div className={cx('bottom')}>
        <p className={cx('title')}>{title}</p>
        <p className={cx('subtitle')}>{subtitle}</p>
      </div>
    </section>
  )
}

export { Magazine }
