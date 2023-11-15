'use client'
import styles from './MagazineScroll.module.scss'
import classNames from 'classnames/bind'
import Magazine from './Magazine'
const cx = classNames.bind(styles)
import Slider, { Settings } from 'react-slick'
import '@/app/lib/slick/slick.min.css'
import '@/app/lib/slick/slick-theme.min.css'
import { MagazinesScrollBlock } from '@/app/api/types'
import ScrollArrow from './ScrollArrow'

const settings: Settings = {
  arrows: true,
  centerMode: true,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  speed: 700,
  autoplaySpeed: 6500,
  // adaptiveHeight: true,
  prevArrow: <ScrollArrow />,
  nextArrow: <ScrollArrow />,
}

interface MagazinesScrollProps {
  magazinesList: MagazinesScrollBlock
}

function MagazineScroll({ magazinesList }: MagazinesScrollProps) {
  return (
    <section className={cx('magazine-scroll-wrapper')} data-header-style='black'>
      <Slider {...settings}>
        {magazinesList.map((mag, i) => (
          <Magazine key={mag.title + i} {...mag} />
        ))}
      </Slider>
    </section>
  )
}

export { MagazineScroll }
