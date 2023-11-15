import Image from 'next/image'
import styles from './Listing.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface ListingProps {}

function Listing({}: ListingProps) {
  return <section className={cx('listing-wrapper')}>Недвижимость</section>
}

export { Listing }
