import Button from '../shared/Button'
import { ContactBlock } from '@/app/api/types'
import styles from './Contact.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default function Contact({ backgroundUrl, titleText, buttonText }: ContactBlock) {
  return (
    <section
      className={cx('contact')}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${backgroundUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      data-header-style='black'>
      <div className={cx('contactContainer')}>
        <h2 className={cx('contactTitle')}>{titleText}</h2>
        <Button url='' className={cx('contactButton')} content={buttonText} scalable={true} />
      </div>
    </section>
  )
}
