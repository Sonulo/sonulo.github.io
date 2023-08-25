
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
export default function HeroSlider5() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h5n',
            prevEl: '.h5p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };
    return (
        <>
            <section className="slider slider_version_v2 style_four nav_position_one">
                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-5-3.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                Solid Technology <br /> <span> Platform that Scales Your Growth<span>
                                                </span></span>
                                            </h1>
                                            <p className="animated _fadeInDownBig">
                                                On the other hand, we denounce with righteous indignation and <br />
                                                dislike men who are so beguiled.
                                            </p>
                                            <div className="thm_btn animated _zoomIn">
                                                <Link href="#" className="theme-btn one  animated _zoomIn">
                                                    Read More </Link >
                                                <Link href="#" className="theme-btn two  animated _zoomIn">
                                                    Contact Us </Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-5-1.jpg)' }} />
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                Perfect Fit <span> For Your Organization.</span>
                                            </h1>
                                            <p className="animated _fadeInDownBig">
                                                These cases are perfectly simple and easy to distinguish. In a free <br />
                                                hour, when our power of choice is untrammelled.
                                            </p>
                                            <div className="thm_btn animated _zoomIn">
                                                <Link href="#" className="theme-btn one  animated _zoomIn">
                                                    Read More </Link >
                                                <Link href="#" className="theme-btn two  animated _zoomIn">
                                                    Contact Us </Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-5-2.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                It’s Time to <br /> <span> Grow Your Startup.</span>
                                            </h1>
                                            <p className="animated _fadeInDownBig">
                                                Duty obligations of business it will frequently occur that pleasures
                                                <br /> have to be repudiated and annoyances accepted.
                                            </p>
                                            <div className="thm_btn animated _zoomIn">
                                                <Link href="#" className="theme-btn one  animated _zoomIn">
                                                    Read More </Link >
                                                <Link href="#" className="theme-btn two  animated _zoomIn">
                                                    Contact Us </Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h5p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h5n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
