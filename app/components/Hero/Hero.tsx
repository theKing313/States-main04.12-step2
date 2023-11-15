import type { HeroBlock } from '@/app/api/types'
import Button from '../shared/Button'
import styles from './Hero.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Hero({ upperText, middleText, bottomText, bgVideoUrl, bgVideoMimeType, bgVideoPoster }: HeroBlock) {
  return (
    <section className={cx('hero-wrapper')} data-header-style='black'>
      <div className={cx('video-wrapper')}>
        <div className={cx('video-wrapper', 'hiddable')}>
          <video loop={true} muted={true} autoPlay={true} poster={bgVideoPoster} playsInline={true}>
            <source src={bgVideoUrl} type={bgVideoMimeType} />
          </video>
        </div>
        <div //? зачем он нужен, если есть video poster
          className='poster'
          style={{
            backgroundImage: `url(
              '${bgVideoPoster}'
              )`,
          }}
        />
      </div>
      <div className={cx('content-wrapper')}>
        <span className={cx('text-upper')}>{upperText}</span>
        <h2 className={cx('text-middle')}>
          <AnimatedText text={middleText} />
        </h2>
        <span className={cx('text-bottom')}>{bottomText}</span>
        <Button className={cx('text-button')} url={''} content='Найти все дома' />
      </div>
    </section>
  )
}

const AnimatedText = ({ text }: { text: string }) => {
  let counter = 35
  return text?.split(' ').map((word) => (
    <span key={word} className={cx('word')}>
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
  ))
}

export { Hero }
