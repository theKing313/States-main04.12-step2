import Image from 'next/image'
import styles from './ListingsScroll.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface ListingsScrollProps {}

function ListingsScroll({}: ListingsScrollProps) {
  return <section className={cx('listings-scroll-wrapper')}>Здесь должен быть скролл с недвижимостью</section>
}

export { ListingsScroll }
