'use client'
import { useState } from 'react'
import ArrowIcon from '../../shared/ArrowIcon'
import styles from './SubNav.module.scss'
import classNames from 'classnames/bind'
import Link from 'next/link'
const cx = classNames.bind(styles)

interface SubNavProps {
  title: string
  items: SubNavItem[]
  className: string
}

export interface SubNavItem {
  text: string
  url: string
}

function SubNav({ title, items, className }: SubNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cx('sub-nav', { isBlack: className.includes('black') })}>
      <button className={cx(className, 'sub-nav-button')} onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <span>{title}</span>
        <ArrowIcon className={cx('arrow-icon')} direction={isOpen ? 'up' : 'bottom'} />
      </button>
      <section className={cx('sub-nav-modal', { visible: isOpen })}>
        {items.map(({ url, text }, i) => (
          <Link className={cx('link')} key={url + text} href={url}>
            {text}
          </Link>
        ))}
      </section>
    </div>
  )
}

export { SubNav }
