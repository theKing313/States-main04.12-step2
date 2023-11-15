import styles from './ArrowIcon.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface ArrowIconProps {
  className?: string
  direction: 'left' | 'right' | 'bottom' | 'up'
  fill?: string
}

function ArrowIcon({ className, direction = 'right', fill = 'white' }: ArrowIconProps) {
  return (
    <svg
      className={cx(className, 'arrow-icon', `direction-${direction}`)}
      width='14'
      height='8'
      viewBox='0 0 14 8'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M6.9987 1.1391e-06C6.9987 1.1391e-06 9.96005 4.97922 13.6654 7.78568L13.4699 8C11.7032 7.2 9.15274 6.2873 6.9987 3.87806C4.84285 6.2873 2.29239 7.2 0.525714 8L0.332031 7.78383C4.03191 4.97737 6.9987 1.1391e-06 6.9987 1.1391e-06Z'></path>
    </svg>
  )
}

export { ArrowIcon }
