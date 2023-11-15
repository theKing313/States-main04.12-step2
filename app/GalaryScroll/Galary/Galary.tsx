import Image from 'next/image'
import styles from './Galary.module.scss'
import type { GalaryI } from '@/app/api/types'
import classNames from 'classnames/bind'
import Link from 'next/link'
const cx = classNames.bind(styles)

function Galary({ updatedAt, description, features, lat, location, lon, mainPhoto, price, status, $id }: GalaryI) {
    return (
        <section className={cx('galary-wrapper', 'item')}>
            <Link href={`/GalaryScroll/Galary/${$id}`} className="gallery-card " data-slick-index="0" aria-hidden="false" >
                <div className={cx('image-wrapper')}>
                    <Image className={cx('image')} src={mainPhoto} fill={true} alt={features} />
                </div>
                <div className={cx('details')}  >
                    <p className={cx('title')} >{features}</p>
                    <p className={cx('price')} >${price}</p>
                    <p className={cx('subtitle')} >{features}</p>
                </div>
            </Link>
        </section>
    )
}

export { Galary }
