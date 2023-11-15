import Button from '../shared/Button'
import Image from 'next/image'
import styles from './TwoSides.module.scss'
import classNames from 'classnames/bind'
import { TwoSidesBlock } from '@/app/api/types'
const cx = classNames.bind(styles)

function TwoSides({ headerText, mainText, buttonContent, posterUrl, posterAlt }: TwoSidesBlock) {
  return (
    <section className={cx('two-sides-wrapper')} data-header-style='white'>
      <div className={cx('left-side')}>
        <Image className={cx('image')} fill={true} src={posterUrl} alt={posterAlt || 'Боковая картинка'} />
      </div>
      <div className={cx('right-side')}>
        <h2 className={cx('header')}>{headerText}</h2>
        <p className={cx('main-text')}>{mainText}</p>
        <Button className={cx('button')} scalable={true} content={buttonContent} url='' />
      </div>
    </section>
  )
}

export { TwoSides }
