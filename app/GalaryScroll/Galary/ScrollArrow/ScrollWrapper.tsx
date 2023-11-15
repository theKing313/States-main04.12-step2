'use client'
// import { api } from '@/app/api'
import { api } from '@/app/api'
import { ScrollArrow } from './ScrollArrow'



function ScrollWrapper() {
    // const data = await api.getMagazinesScroll()
    // return data && <ScrollArrow magazinesList={data} /
    return (
        <>
            <div className="slider-nav container">
                <div className="arrow-progress">
                    <div className="">
                        <ScrollArrow />
                    </div>
                    {/* <div className="arrows js-arrows"><button className="lp-arrow lp-arrow--prev slick-arrow" ></button><button className="lp-arrow lp-arrow--next slick-arrow" ></button></div> */}
                    {/* <div className="progress js-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="43.333333333333336"></div></div> */}
                </div>
                {/* <div className="btn-wrap">
                    <a href="/properties/sale" className="link--arrow">View Properties</a>
                </div> */}
            </div>
        </>
    )
}

export { ScrollWrapper }

// export default ScrollWrapper