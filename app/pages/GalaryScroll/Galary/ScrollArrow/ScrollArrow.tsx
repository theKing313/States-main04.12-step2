import styles from './ScrollArrow.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface ScrollArrowProps {
  className?: string
  style?: { [key: string]: string }
  onClick?: () => any
}

function ScrollArrow({ className, onClick }: ScrollArrowProps) {
  return (
    <h4
      onClick={onClick}
      className={cx('lp-arrow', 'lp-arrow--dark', `lp-arrow--${className?.slice(-4)}`)}></h4>
  )
}

export { ScrollArrow }
