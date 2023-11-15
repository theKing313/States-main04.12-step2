import Link from 'next/link'
import ArrowIcon from '../ArrowIcon'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface ButtonProps {

  type?: string
  content?: string
  url?: string
  className?: string
  scalable?: boolean
  circleHovered?: boolean
  onClickCallback?: () => void
}

function Button({
  type,
  content = '',
  url = '',
  scalable,
  className = '',
  circleHovered = false,
  onClickCallback,
}: ButtonProps) {
  return (
    <>
      {type === 'close' ? (
        <button className={cx(className, 'button-close')} onClick={onClickCallback}></button>
      ) : type === 'in-circle' ? (
        <div className={cx(className, 'button-wrapper-in-circle')}>
          <Link href={url} className={cx('button-in-circle', { 'button-in-circle-hovered': circleHovered })}>
            {content}

          </Link>
        </div>
      ) : (
        <div className={cx(className, 'button-wrapper')}>
          <Link href={url} className={cx('button-default', { buttonScaled: scalable })}>
            {content}
            {/* <ArrowIcon direction='right' /> */}
          </Link>
        </div>
      )}
    </>
  )
}

export { Button }
