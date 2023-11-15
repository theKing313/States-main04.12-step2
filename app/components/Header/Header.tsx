'use client'

import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import SubNav from './SubNav'
import classNames from 'classnames/bind'
import { subNavList } from '@/app/utils/consts'
const cx = classNames.bind(styles)
import { useState, useEffect } from 'react'
import { useResize } from '@/app/hooks/useResize'
import SideMenu from '../SideMenu'
import { api } from '@/app/api'

type HeaderStyles = 'transparent' | 'white' | 'black'

function Header() {
  const [headerStyle, changeHeaderStyle] = useState<HeaderStyles>('transparent')
  const [isHidden, setIsHidden] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  let lastScroll = 0
  const { width } = useResize()
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false)

  const handleSideMenuOpen = () => {
    setIsSideMenuOpened(true)
  }

  const handleSideMenuClose = () => {
    setIsSideMenuOpened(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        //scroll down
        if (window.scrollY < 20) {
          changeHeaderStyle('black')
        }
        if (window.scrollY >= 125) {
          setIsHidden(true)
        }
        if (window.scrollY >= 160) {
          setIsSmall(true)
        }
      } else if (window.scrollY < lastScroll) {
        //scroll up
        if (window.scrollY < 5) {
          changeHeaderStyle('transparent')
        }
        if (window.scrollY < 175) {
          setIsSmall(false)
        }

        setIsHidden(false)
        let bgBlockStyle = //@ts-expect-error wtf
          document.elementsFromPoint(5, 5).find((el) => el.dataset.headerStyle)?.dataset?.headerStyle
        if (bgBlockStyle && window.scrollY > 5) {
          changeHeaderStyle(bgBlockStyle)
        }
      }
      lastScroll = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cx('header', `header${headerStyle[0]?.toUpperCase() + headerStyle.slice(1)}`, {
          headerHidden: isHidden,
          headerChangedHeight: isSmall,
        })}>
        <nav className={cx('headerContainer')}>
          {!!width && width > 1024 && (
            <ul className={cx('blockOne')}>
              <li className={cx('navItem')}>
                <SubNav
                  className={cx('navLink', 'navLinkFirstLeft', { black: headerStyle === 'white' })}
                  title={'properties'.toUpperCase()}
                  items={subNavList}
                />
              </li>

              <li className={cx('navItem')}>
                <Link href='/' className={cx('navLink', 'navLinkSecondLeft')}>
                  HOME SEARCH
                </Link>
              </li>
            </ul>
          )}

          <div className={cx('logoBlock', { logoBlockScrolled: headerStyle !== 'transparent' })}>
            <Link href='/' className={cx('logoLink')}>
              <Image
                src={api.sdk.storage.getFileView(api.otherImagesBucket, 'logo').href}
                alt='Логотип компании'
                className={cx('logoImage')}
                height={720}
                width={1280}
              />
            </Link>
          </div>
          <ul className={cx('blockTwo')}>
            {width > 560 ? (
              width > 1024 ? (
                <>
                  <li className={cx('navItem')}>
                    <Link href='/' className={cx('navLink', 'navLinkFirstRight')}>
                      310.285.7508
                    </Link>
                  </li>
                  <li className={cx('navItem')}>
                    <Link href='/' className={cx('navLink', 'navLinkSecondRight')}>
                      CONTACT
                    </Link>
                  </li>{' '}
                </>
              ) : (
                <>
                  <li className={cx('navItem')}>
                    <Link href='/' className={cx('navLink', 'navLinkSecondLeft')}>
                      HOME SEARCH
                    </Link>
                  </li>
                  <li className={cx('navItem')}>
                    <SubNav
                      className={cx('navLink', 'navLinkFirstLeft')}
                      title={'properties'.toUpperCase()}
                      items={subNavList}
                    />
                  </li>
                </>
              )
            ) : (
              <></>
            )}
          </ul>
          <div className={cx('navButton')} onClick={handleSideMenuOpen}>
            <div className={cx('container')}>
              {width > 560 && (
                <div className={cx('navItem')}>
                  <p className={cx('navLink', 'navLinkThirdRight')}>MENU</p>{' '}
                </div>
              )}

              {/* //TODO: вынести в отдельный компонент рядом */}
              <button
                className={cx('hamburger', {
                  hamburgerScrolled: isHidden && !isSmall,
                  hamburgerScrolledFar: isSmall && isHidden,
                })}
                onClick={handleSideMenuOpen}>
                <span className={cx('hamIcon')}>
                  <div className={cx('hamLine')}>
                    <svg
                      className={cx('hamLineIcon')}
                      width='32'
                      height='2'
                      viewBox='0 0 32 2'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M0 0.750001C0 0.750001 7 1.5 16 1.5C25 1.5 32 0.750001 32 0.750001C32 0.750001 25 0 16 0C7 0 0 0.750001 0 0.750001Z'></path>
                    </svg>
                  </div>
                  <div className={cx('hamLine')}>
                    <svg
                      className={cx('hamLineIcon')}
                      width='32'
                      height='2'
                      viewBox='0 0 32 2'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M0 0.750001C0 0.750001 7 1.5 16 1.5C25 1.5 32 0.750001 32 0.750001C32 0.750001 25 0 16 0C7 0 0 0.750001 0 0.750001Z'></path>
                    </svg>
                  </div>
                  <div className={cx('hamLine')}>
                    <svg
                      className={cx('hamLineIcon')}
                      width='32'
                      height='2'
                      viewBox='0 0 32 2'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M0 0.750001C0 0.750001 7 1.5 16 1.5C25 1.5 32 0.750001 32 0.750001C32 0.750001 25 0 16 0C7 0 0 0.750001 0 0.750001Z'></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <SideMenu isSideMenuOpened={isSideMenuOpened} onSideMenuClose={handleSideMenuClose} />
    </>
  )
}

export { Header }
