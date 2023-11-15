'use client'
import styles from './GalaryScroll.module.scss'
import classNames from 'classnames/bind'
// import Magazine from './Magazine'
const cx = classNames.bind(styles)
import Slider, { Settings } from 'react-slick'
import '@/app/lib/slick/slick.min.css'
import '@/app/lib/slick/slick-theme.min.css'
import { GalaryScrollBlock } from '@/app/api/types'
import { Galary } from './Galary/Galary'
import ScrollArrow from './ScrollArrow'
import { useRef, useState } from 'react'
import CustomMouse from '../components/shared/CustomMouse'
import Button from '../components/shared/Button'


interface GalaryScrollProps {
    galaryList: GalaryScrollBlock
}

function GalaryScroll({ galaryList }: GalaryScrollProps) {
    const [progressWidth, setProgressWidth] = useState(0);
    function setProgress(index: number) {
        let calc = (index + 1) / galaryList.length * 100;
        setProgressWidth(calc)
    }


    const settings: Settings = {
        // arrows: true,
        // centerMode: true,
        infinite: true,
        variableWidth: true,
        // autoplay: true,
        speed: 700,
        slidesToScroll: 1,

        autoplaySpeed: 6500,

        prevArrow: <ScrollArrow />,
        nextArrow: <ScrollArrow />,
        afterChange: (index) => {
            setProgress(index)
        },

    }

    return (
        <section className={cx('galary-scroll-wrapper')} data-header-style='black'>
            <div className={cx('galary-header')}>
                <div className={cx('top')}>
                    <p className={cx('title')}>JADE MILLS ESTATES </p>
                    <h2 className={cx('subtitle')}>Exclusive Listings</h2>
                </div>
            </div>
            <div className={cx("gallery")}>

                <Slider {...settings} className={cx('')}>
                    {galaryList.map((mag, i) => (
                        <Galary key={mag.features + i} {...mag} />

                    ))}

                </Slider>



                <CustomMouse />
            </div>

            <div className={cx("slider-nav-container")}>

                <div className={cx("slider-nav")}>
                    <div className={cx("progress")}>
                        <div
                            style={{ width: `${progressWidth}%` }}
                            className={cx("progress--fill")}
                        ></div>
                    </div>


                    <Button className={cx('slider-button')} url={''} content='VIEW PROPERTIES' />

                </div>
            </div>

        </section >
    )
}

export { GalaryScroll }
