'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useResize } from '@/app/hooks/useResize'
import Button from '../shared/Button'
import { VideoPlayerBlock } from '@/app/api/types'
import styles from './VideoPlayer.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

function VideoPlayer({ videoUrl, backgroundImageUrl }: VideoPlayerBlock) {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const { width } = useResize()

  const handleVideoPopupOpen = () => {
    setIsVideoPopupOpen(true)
    setIsVideoPlaying(true)
  }

  const handleVideoPopupClose = () => {
    setIsVideoPlaying(false)
    setIsVideoPopupOpen(false)
  }

  const handlePopupCloseByFreeSpace = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleVideoPopupClose()
    }
  }

  const handlePopupCloseByEsc = (e: React.KeyboardEvent) => {
    if (e.key === 'Esc') {
      handleVideoPopupClose()
    }
  }

  return (
    <>
      <section
        className={cx('videoPlayer')}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        data-header-style='white'>
        <div className={cx('videoPlayerExternalButton')} onClick={handleVideoPopupOpen}>
          <button className={cx('videoPlayerInternalButton')} onClick={handleVideoPopupOpen}>
            <svg width='14' height='20' viewBox='0 0 14 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0.375058 20C5.28637 14.442 14 10 14 10C14 10 5.28961 5.54982 0.378291 0L0 0.290524L2.32882 7.55855C2.8376 9.14641 2.83754 10.8536 2.32862 12.4414L0 19.7068L0.375058 20Z'
                fill='white'></path>
            </svg>
          </button>
        </div>
      </section>
      <div className={cx('videoPlayerPopup', { videoPlayerPopupOpen: isVideoPopupOpen })}>
        <div className={cx('videoPlayerPopupContainer')} onClick={handlePopupCloseByFreeSpace}>
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width={'100%'}
            height={
              width > 1024
                ? '100%'
                : width <= 1024 && width > 960
                ? '80%'
                : width <= 960 && width > 540
                ? '400px'
                : '300px'
            }
            playing={isVideoPlaying}
          />
        </div>
        <Button
          type='close'
          className={cx('closeButtonVideoPlayer')}
          onClickCallback={handleVideoPopupClose}
        />
      </div>
    </>
  )
}

export { VideoPlayer }
