'use client'
import Header from '@/app/components/Header'
import { HeroWrapper } from '@/app/components/Hero/HeroWrapper'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'
import styles from './GalaryPage.module.scss'
import classNames from 'classnames/bind'
import Button from '@/app/components/shared/Button'
import { api } from '@/app/api'
import { GalaryI } from '@/app/api/types'
import CustomMouse from '@/app/components/shared/CustomMouse'
import { ReadMore } from '@/app/components/shared/ReadMore/ReadMore'
import FooterWrapper from '@/app/components/Footer'
import FloatingContacts from '@/app/components/FloatingContacts'
import ScrollArrow from '../ScrollArrow'
const cx = classNames.bind(styles)
//
function Page({ params }: any) {
    const id = params.id;
    const [nav1, setNav1] = useState<any>();
    const [nav2, setNav2] = useState<any>();
    const [galary, setGalary] = useState<GalaryI[]>([]);
    const [galaryInfo, setGalaryInfo] = useState<GalaryI>();

    const [limitTo, setLimitTo] = useState<number>(2)
    const onLoadMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLimitTo(prev => prev + 30)
    }
    async function SingleGalaryWrapper() {
        const data = await api.getGalaryScroll()
        const newdata = data.filter((data: any) => {
            if (data.$id === id) {
                console.log(data)
                setGalaryInfo(data);
                return true
            }
        })
        setGalary(newdata)
    }
    useEffect(() => {
        SingleGalaryWrapper()
    }, [])

    const settingsMainSLider: Settings = {
        // infinite: true,
        variableWidth: true,
        autoplay: true,
        speed: 700,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplaySpeed: 6500,
        adaptiveHeight: true,
        arrows: true,
        // touchMove: true,
        prevArrow: <ScrollArrow />,
        nextArrow: <ScrollArrow />,
        // swipeToSlide: true,
        // swipe: true,
        // fade: true,

    }
    const settings: Settings = {
        arrows: false,
        slidesToScroll: 1,
        // variableWidth: true,
        slidesToShow: 3,
        touchMove: true,
    }


    return (
        <>
            <Header />
            <section className={cx('single-galary')} >
                <div className={cx('')} >
                    <div className={cx('carousel')} >
                        {/* <Image className={cx('image-main')} fill alt={'title'} src={galary[0]?.mainPhoto} /> */}
                        <div className={cx('carousel-main')}>
                            <CustomMouse type='single-page' />
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settingsMainSLider} className={cx('carouselMain')}>
                                {galary.map((mag: GalaryI, i: number) => (
                                    // <div className={cx('image-block-main')} key={mag.features + i}>
                                    //     <Image className={cx('image-main')} fill alt={'title'} src={mag.mainPhoto} />
                                    // </div>
                                    mag?.photos?.map((url: string, i: number) => {
                                        if (url !== undefined && url !== null) {
                                            return (<div className={cx('image-block-main')} key={mag.features + i}>
                                                <Image key={i + url} className={cx('image-main')} fill alt={'title'} src={url} />

                                            </div>)

                                        }

                                        // return (<Image key={i + url} className={cx('image')} height={96} width={112} alt={'title'} src={url} />)
                                    })


                                ))}

                            </Slider>
                        </div>

                        <div className={cx('')}>
                            <div className={cx('container', 'middle-row')}>
                                <div className={cx('info')}>
                                    <p className={cx('price')}>${galaryInfo?.price}</p>
                                </div>
                                <Slider asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)} {...settings} className={cx('slider-nav')}>
                                    {galary.map((mag: GalaryI, i: number) => (


                                        mag?.photos?.map((url: string, i: number) => {
                                            if (url !== undefined && url !== null) {
                                                return (<div className={cx('image-block')} key={mag.features + i}>
                                                    <Image key={i + url} className={cx('image')} height={96} width={112} alt={'title'} src={url} />
                                                </div>)

                                            }
                                            // return (<Image key={i + url} className={cx('image')} height={96} width={112} alt={'title'} src={url} />)
                                        })


                                    ))}
                                </Slider>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <section className={cx('details ')}>
                <div className={cx('property-details ', 'container')}>
                    <div className={cx('property-details-features')}>
                        <div className={cx('subsection')}>
                            <div className={cx('subsection__title')}>
                                Features
                            </div>
                            <ul className={cx('subsection__details')} >
                                <li className={cx('features__details-item')}>
                                    {galaryInfo?.features}
                                </li>
                            </ul>
                        </div>
                        <div className={cx('subsection')}>
                            <div className={cx('subsection__title')}>
                                Description
                            </div>
                            <ul className={cx('subsection__details')} >
                                <li className={cx('features__details-item')}>
                                    {galaryInfo?.description && galaryInfo?.description.length > 300 ?
                                        <ReadMore>
                                            {galaryInfo?.description}
                                        </ReadMore >
                                        : galaryInfo?.description}

                                </li>
                            </ul>
                        </div>
                        <div className={cx('subsection')}>
                            <div className={cx('subsection__title')}>
                                Location
                            </div>
                            <ul className={cx('subsection__details')} >
                                <li className={cx('features__details-item')}>
                                    {galaryInfo?.location}
                                </li>
                                <div className={cx('button')} >
                                    <Button className={cx('subsection__button')} url={''} content='SHOW ON GOOGLE MAPS ' />
                                </div>
                            </ul>
                        </div>
                        <div className={cx('subsection')}>
                            <div className={cx('subsection__title')}>
                                Status
                            </div>
                            <ul className={cx('subsection__details')} >
                                <li className={cx('features__details-item')}>
                                    {galaryInfo?.status}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('sectoin-image')}>
                <div className={cx('container')}>
                    <div className={cx('image-list')}>
                        {galary.map((mag: GalaryI, i: number) => (


                            mag?.photos?.slice(0, limitTo)?.map((url: string, i: number) => {
                                if (url !== undefined && url !== null) {
                                    return (
                                        <>
                                            <div className={cx('image-list__item')} >
                                                <div className={cx('image-wrap')}>
                                                    {/* sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" */}
                                                    <Image className={cx('image-main')} fill alt={'title'} src={url} />
                                                </div>
                                            </div>
                                        </>

                                    )
                                }
                                // return (<Image key={i + url} className={cx('image')} height={96} width={112} alt={'title'} src={url} />)
                            })


                        ))}
                        {galary?.length > 0 &&
                            <button onClick={onLoadMore} className={cx('load-more')}>
                                Load more
                            </button>}
                    </div>
                </div>
            </section>
            {/* <HeroWrapper /> */}
            {/* <TwoSides /> */}
        </>
    )
}

// export { page }
export default Page