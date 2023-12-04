'use client'

import styles from './SideMenu.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
import Link from 'next/link'
import Button from '../shared/Button'
import { useState } from 'react'
import Image from 'next/image'
import { useResize } from '@/app/hooks/useResize'

interface SideMenuProps {
  isSideMenuOpened: boolean
  onSideMenuClose: () => void
}

export default function SideMenu({ isSideMenuOpened, onSideMenuClose }: SideMenuProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [circleHovered, setCircleHovered] = useState(false)
  const { width } = useResize()

  function handleLinkHoverOn(event: React.MouseEvent) {
    setHoveredLink(event.currentTarget.id)
  }

  function handleLinkHoverOff() {
    setHoveredLink(null)
  }

  function handleCircleHoverOn() {
    setCircleHovered(true)
  }

  function handleCircleHoverOff() {
    setCircleHovered(false)
  }

  return (
    <section className={cx('sideMenu', { sideMenuOpened: isSideMenuOpened })}>
      <div className={cx('sideMenuContainer')}>
        {isSideMenuOpened && (
          <div className={cx('sideMenuCloseButton')} onClick={onSideMenuClose}>
            <p className={cx('sideMenuCloseButtonText')}>CLOSE</p>
            <Button type='close' className={cx('button-close-sideMenu')} />
          </div>
        )}

        <div className={cx('sideMenuLineWrapper')}></div>
        <div className={cx('sideMenuNavigation')}>
          <div className={cx('sideMenuBigLinksContainer')}>
            <Link
              href={'/'}
              id='1'
              className={cx('sideMenuLink', 'sideMenuLinkOdd')}
              onMouseOver={handleLinkHoverOn}
              onMouseOut={handleLinkHoverOff}>
              <span className={cx('sideMenuLinkCounter')}>01</span>
              <span className={cx('sideMenuLinkContent')}>
                {isSideMenuOpened && <AnimatedText text='Home' baseDelay={100} />}
              </span>
            </Link>
            <Link
              href={'/'}
              id='2'
              className={cx('sideMenuLink')}
              onMouseOver={handleLinkHoverOn}
              onMouseOut={handleLinkHoverOff}>
              <span className={cx('sideMenuLinkCounter')}>02</span>
              <span className={cx('sideMenuLinkContent')}>
                {isSideMenuOpened && <AnimatedText text='About Jade' baseDelay={200} />}
              </span>
            </Link>
            <Link
              href={'/'}
              id='3'
              className={cx('sideMenuLink', 'sideMenuLinkOdd')}
              onMouseOver={handleLinkHoverOn}
              onMouseOut={handleLinkHoverOff}>
              <span className={cx('sideMenuLinkCounter')}>03</span>
              <span className={cx('sideMenuLinkContent')}>
                {isSideMenuOpened && <AnimatedText text='Exclusive Listings' baseDelay={300} />}
              </span>
            </Link>
            <Link
              href={'/'}
              id='4'
              className={cx('sideMenuLink')}
              onMouseOver={handleLinkHoverOn}
              onMouseOut={handleLinkHoverOff}>
              <span className={cx('sideMenuLinkCounter')}>04</span>
              <span className={cx('sideMenuLinkContent')}>
                {isSideMenuOpened && <AnimatedText text='Sold Listings' baseDelay={400} />}
              </span>
            </Link>
            <Link
              href={'/'}
              id='5'
              className={cx('sideMenuLink', 'sideMenuLinkOdd')}
              onMouseOver={handleLinkHoverOn}
              onMouseOut={handleLinkHoverOff}>
              <span className={cx('sideMenuLinkCounter')}>05</span>
              <span className={cx('sideMenuLinkContent')}>
                {isSideMenuOpened && <AnimatedText text='Global Collective™' baseDelay={500} />}
              </span>
            </Link>
          </div>
          <div className={cx('sideMenuSmallLinksContainer')}>
            {isSideMenuOpened && (
              <div className={cx('sideMenuSmallLinksBlock')}>
                <Link href={'/'} className={cx('sideMenuSmallLink')}>
                  <span className={cx('sideMenuSmallLinkContent')}>
                    {isSideMenuOpened && <AnimatedSmallLinks text='Communities' baseDelay={100} />}
                  </span>
                </Link>
                <Link href={'/'} className={cx('sideMenuSmallLink')}>
                  <span className={cx('sideMenuSmallLinkContent')}>
                    {isSideMenuOpened && <AnimatedSmallLinks text='Home Search' baseDelay={200} />}
                  </span>
                </Link>
                <Link href={'/'} className={cx('sideMenuSmallLink')}>
                  <span className={cx('sideMenuSmallLinkContent')}>
                    {isSideMenuOpened && <AnimatedSmallLinks text='Malibu Real Estate' baseDelay={300} />}
                  </span>
                </Link>
                <Link href={'/'} className={cx('sideMenuSmallLink')}>
                  <span className={cx('sideMenuSmallLinkContent')}>
                    {isSideMenuOpened && <AnimatedSmallLinks text='News' baseDelay={400} />}
                  </span>
                </Link>
                <Link href={'/'} className={cx('sideMenuSmallLink')}>
                  <span className={cx('sideMenuSmallLinkContent')}>
                    {isSideMenuOpened && <AnimatedSmallLinks text='Blog' baseDelay={500} />}
                  </span>
                </Link>
                <Link href={'/'} className={cx('sideMenuSmallLink')}>
                  <span className={cx('sideMenuSmallLinkContent')}>
                    {isSideMenuOpened && <AnimatedSmallLinks text='Elite Global Agents' baseDelay={600} />}
                  </span>
                </Link>
                <Link href={'/pages/home-search/account'} className={cx('sideMenuSmallLink')}>
                  <span className={cx('sideMenuSmallLinkContent')}>
                    {isSideMenuOpened && <AnimatedSmallLinks text='My Account' baseDelay={700} />}
                  </span>
                </Link>
              </div>
            )}
          </div>
          {isSideMenuOpened && (
            <div className={cx('sideMenuCircleArea')}>
              <div className={cx('sideMenuCirclePlacer')}>
                <div
                  className={cx('sideMenuCircleWrapper')}
                  onMouseOver={handleCircleHoverOn}
                  onMouseOut={handleCircleHoverOff}>
                  <svg className={cx('sideMenuCircleIcon')}>
                    <circle className={cx('sideMenuCircleLine', 'sideMenuCircleBase')}></circle>
                    <circle className={cx('sideMenuCircleLine', 'sideMenuCircleHover')}></circle>
                  </svg>
                  <Button url={'/'} content='CONTACT' type='in-circle' circleHovered={circleHovered} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage0', { sideMenuImage0Shown: hoveredLink === '1' })}
        style={{ inset: width > 1500 ? '4vh auto auto 40vw' : '34vh auto auto 4vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/oyrkxpcb3toaiaje8stf/01'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '20vw', maxHeight: '21vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage1', { sideMenuImage1Shown: hoveredLink === '1' })}
        style={{ inset: 'auto auto 0px 21vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ueqpp84sl3psx5pbwlxe/bnumu7tbcaazcyg5yto7'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '35vw', maxHeight: '30vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage2', { sideMenuImage2Shown: hoveredLink === '1' })}
        style={{ inset: '33vh 6vw auto auto' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/mhomjx8sk56tgiohoola/vno9kabb2jxcuksfn3wx'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '28vw', maxHeight: '41vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage3', { sideMenuImage3Shown: hoveredLink === '2' })}
        style={{ inset: width > 1200 ? '4vh auto auto 40vw' : 'auto auto 54vh 6vw' }}>
        <Image
          src={'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/bqe9mwaimbqs9h2jlaoy/image-10'}
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '20vw', maxHeight: '21vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage4', { sideMenuImage4Shown: hoveredLink === '2' })}
        style={{ inset: 'auto auto 0px 21vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/bohzwhppoebtdb2igilb/ahfpyu096mxblkq6kdd5'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '35vw', maxHeight: '30vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage5', {
          sideMenuImage5Shown: hoveredLink === '2',
        })}
        style={{ inset: '33vh 6vw auto auto' }}>
        <Image
          src={'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/afdjq4dnpbljwzte7c30/jade-mills'}
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '28vw', maxHeight: '41vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage6', { sideMenuImage6Shown: hoveredLink === '3' })}
        style={{ inset: '0px auto auto 47vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tqvqg5zbpuupttcsiepu/tdbwragc8vlttrwtkrte'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: width > 1500 ? '25vw' : '20vw', maxHeight: width > 1500 ? '37vh' : '21vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage7', { sideMenuImage7Shown: hoveredLink === '3' })}
        style={{ inset: 'auto auto 5vh 4vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/qfy3amq52rci41feo5ug/mls-31'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '25vw', maxHeight: '24vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage2', { sideMenuImage2Shown: hoveredLink === '3' })}
        style={{ inset: 'auto 4vw 20vh auto' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ikb1lolrn7iclyfi0jrc/jade_beverly-park'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '28vw', maxHeight: '28vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage9', { sideMenuImage9Shown: hoveredLink === '4' })}
        style={{ inset: '0px auto auto 37vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/nhemppbh8jkwjkuchvaa/wurxvt46sriwwkkmdkdo'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: width > 1500 ? '28vw' : '21vw', maxHeight: width > 1500 ? '41vh' : '20vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage10', {
          sideMenuImage10Shown: hoveredLink === '4',
        })}
        style={{ inset: 'auto auto 5vh 6vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/msa1gsf7qzezyjyfsq4j/g5zus7fyukyt3vdppt1s'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '20vw', maxHeight: '23vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage2', { sideMenuImage2Shown: hoveredLink === '4' })}
        style={{ inset: 'auto 4vw 43vh auto' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/jb255jgutdkwhnohct6y/tjub2ndedhs3tecnfsoo'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage', 'sideMenuImageBottomSide')}
          style={{ maxWidth: '28vw', maxHeight: '54vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage9', { sideMenuImage9Shown: hoveredLink === '5' })}
        style={{ inset: '0px auto auto 37vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/st9kno1zmcs8aha4ao5j/vfgdrhyoxrgfd863j52j'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '28vw', maxHeight: '41vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage13', {
          sideMenuImage13Shown: hoveredLink === '5',
        })}
        style={{ inset: width > 1500 ? 'auto auto 5vh 6vw' : 'auto auto 34vh 6vw' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/cpksxmyzjfneffi9gxv4/sanger-santaynez-24'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage')}
          style={{ maxWidth: '20vw', maxHeight: '18vh' }}
        />
      </div>

      <div
        className={cx('sideMenuImageHolder', 'sideMenuImage2', { sideMenuImage2Shown: hoveredLink === '5' })}
        style={{ inset: 'auto 4vw 32vh auto' }}>
        <Image
          src={
            'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/khqked0ukm6qhohskubr/4411-noeline-best'
          }
          alt='Картинка'
          width={1920}
          height={1080}
          className={cx('sideMenuImage', 'sideMenuImageBottomSide')}
          style={{ maxWidth: '28vw', maxHeight: '65vh' }}
        />
      </div>
    </section>
  )
}

const AnimatedText = ({ text, baseDelay }: { text: string; baseDelay: number }) => {
  let counter = baseDelay
  const { width } = useResize()
  return text.split(' ').map((word) => (
    <>
      <span key={word} className={cx('word')} style={{ whiteSpace: 'nowrap' }}>
        {word.split('').map((letter, i) => {
          counter += 35
          return (
            <span
              data-aos={cx('fade-in-down')}
              key={letter + i}
              className={cx('letter')}
              style={{
                animationDelay: counter + 'ms',
              }}>
              {letter}
            </span>
          )
        })}{' '}
      </span>
      {width < 1320 && width > 1200 && word.length > 5 && <br />}
      {width < 420 && width > 320 && word.length > 5 && <br />}
      {width <= 320 && <br />}
    </>
  ))
}

const AnimatedSmallLinks = ({ text, baseDelay }: { text: string; baseDelay: number }) => {
  let counter = baseDelay
  return text.split(' ').map((word) => {
    return (
      <span key={word} className={cx('smallLinkWord')}>
        {word.split('').map((letter, i) => {
          counter += 50
          return (
            <span
              key={letter + i}
              className={cx('smallLinkLetter')}
              style={{ animationDelay: counter + 'ms' }}>
              {letter}
            </span>
          )
        })}{' '}
      </span>
    )
  })
}
