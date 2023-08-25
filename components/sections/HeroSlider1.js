
import { Swiper, SwiperSlide } from "swiper/react"

import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
export default function HeroSlider1() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }
    return (
        <>
            <section className="slider style_four nav_position_one">

                <Swiper {...swiperOptions} className=" owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-1-1.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content pd_top_180 pd_bottom_200">
                                            <h6 className="animate_up d-inline-block"> Our Vision to Grow Better </h6>
                                            <h1 className="animate_left"> Inspired <br /> Performance </h1>
                                            <p className="description animate_right"> Duty obligations of business it
                                                will
                                                frequently occur that pleasures <br /> have to be repudiated and
                                                annoyances
                                                accepted. </p>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme-btn one  animated">Read
                                                    More</Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-1-2.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content pd_top_180 pd_bottom_200">
                                            <h6 className="animate_up d-inline-block"> Hire the Best </h6>
                                            <h1 className="animate_left"> Hire Better, <br /> Faster! </h1>
                                            <p className="description animate_right"> On the other hand, we denounce
                                                with
                                                righteous indignation and <br /> dislike men who are so beguiled. </p>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme-btn one  animated">Read
                                                    More</Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_right">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-1-3.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content pd_top_180 pd_bottom_200">
                                            <h6 className="animate_up d-inline-block"> Our Vision to Grow Better </h6>
                                            <h1 className="animate_left"> Countless <br /> Happy Clients </h1>
                                            <p className="description animate_right"> These cases are perfectly simple
                                                and easy
                                                to distinguish. In a free <br /> hour, when our power of choice is
                                                untrammelled.
                                            </p>
                                            <Link href="#" className="theme-btn one  animated _zoomIn"> Read
                                                More </Link >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h1p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h1n">
                            <span>›</span>
                        </div>
                    </div>

                </Swiper>

            </section>

        </>
    )
}
