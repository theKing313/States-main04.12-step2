import styles from './Sponsor.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
import Image from 'next/image'

interface SponsorProps {
  imageUrl: string
  alt: string
  description: string
}

export default function Sponsor({ imageUrl, alt, description }: SponsorProps) {
  return (
    <div className={cx('sponsor')}>
      <Image
        src={imageUrl}
        alt={alt}
        width={1920}
        height={1080}
        className={cx('sponsorImage')}
        draggable={false}
      />
    </div>
  )
}
