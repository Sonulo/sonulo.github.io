
import { Swiper, SwiperSlide } from "swiper/react"

import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import VideoBox from "../elements/VideoBox"
export default function HeroSlider3() {
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
            nextEl: '.h3n',
            prevEl: '.h3p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }
    return (
        <>
            <section className="slider style_two  nav_position_one">


                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel owl-themebanner_carousel  owl_nav_block owl_dots_none theme_carousel owl-theme">

                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_right">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-3-bg.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                Hands On Professional Touch
                                            </h1>
                                            <p className="animated _flipInY">
                                                On the other hand, we denounce with righteous indignation and dislike
                                                men who are so beguiled.
                                            </p>
                                            <ul>
                                                <li>
                                                    <Link href="#" className="theme-btn three  animated _zoomIn">Read More</Link >
                                                </li>
                                                <li>
                                                    <div className="video_box animated _flipInX">
                                                        <VideoBox />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px -70px' }}>
                                            <img src="/assets/images/sliders/slider-3-2.jpg" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-3-bg.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                In House Specialists On Demand
                                            </h1>
                                            <p className="animated _flipInY">
                                                Duty obligations of business it will frequently occur that pleasures
                                                have to be repudiated and annoyances accepted.
                                            </p>
                                            <ul>
                                                <li>
                                                    <Link href="#" className="theme-btn three  animated _zoomIn">Read More</Link >
                                                </li>
                                                <li>
                                                    <div className="video_box animated _flipInX">
                                                        <VideoBox />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px 50px' }}>
                                            <img src="/assets/images/sliders/slider-3-3.jpg" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-3-bg.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                Be spoke Outsourced HR Solutions
                                            </h1>
                                            <p className="animated _flipInY">
                                                These cases are perfectly simple and easy to distinguish. In a free
                                                hour, when our power of choice is untrammelled.
                                            </p>
                                            <ul>
                                                <li>
                                                    <Link href="#" className="theme-btn three animated _zoomIn">
                                                        Read More</Link >
                                                </li>
                                                <li>
                                                    <div className="video_box animated _flipInX">
                                                        <VideoBox />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px 50px' }}>
                                            <img src="/assets/images/sliders/slider-3-1.jpg" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h3p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h3n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
