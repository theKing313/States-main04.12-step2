'use client'
import styles from './CustomMouse.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
const cx = classNames.bind(styles)

interface mouseProps {
  type?: string
  content?: string
  url?: string
  className?: string
  scalable?: boolean
  circleHovered?: boolean
  onClickCallback?: () => void
}

function CustomMouse({ type = 'default' }: mouseProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);


  return (
    <>
      {/* <div
        className='cursor'
      // variants={variants}
      // animate={cursorVariant}
      /> */}
      {/* <motion.div variants={variants} animate={'default'} className={cx("cursorr")} /> */}
      <div >
        {type === 'default' ? (
          <div className="collection-container js-cursor-area">
            <div className="slider-holder js-slider-holder wow custom-slideInRight">
              <div className="collection js-collection jsIGContainer"></div>
            </div>
            <section style={{ top: ` ${mousePosition.y - 45}px`, left: `${mousePosition.x - 45}px` }} className={cx('cursor-container')}  >
              <div className={cx("cursor")} >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0056 5.00558L17 17.5L4.63701 28.3741L4.12152 27.8587L15 15.5L27.4901 4.49009L28.0056 5.00558Z" fill="#f5f3ef" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.74442 5.00558L14.75 17.5L27.113 28.3741L27.6285 27.8587L16.75 15.5L4.25991 4.49009L3.74442 5.00558Z" fill="#f5f3ef" />
                </svg>
              </div>
            </section>
          </div>
        ) : (<div>
          <section style={{ top: ` ${mousePosition.y - 45}px`, left: `${mousePosition.x - 45}px` }} className={cx('cursor-container-single')}  >
            <div className={cx("cursor-single")} >

            </div>
          </section>
        </div>)}

      </div>
    </>
  )
}

export { CustomMouse }
