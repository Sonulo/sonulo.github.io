

import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Navigation, Pagination } from "swiper"

import Link from "next/link"
export default function HeroSlider2() {
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
            <section className="slider style_one pag_position_two">
                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_none owl_dots_block theme_carousel">
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-2-bg.jpg)' }} />
                            <div className="auto-container">
                                <div className="d-flex align-items-center">
                                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1>Skilled Industry Professionals</h1>
                                            <h6>Shared Time Human Resources Management</h6>
                                            <p className="description">Duty obligations of business it will
                                                frequently occur that pleasures have to be repudiated and annoyances accepted.
                                            </p>
                                            <Link href="#" className="theme-btn one  animated _zoomIn">
                                                Read More </Link >
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image">
                                            <img src="/assets/images/sliders/slider-2-1.png" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_right">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-2-bg.jpg)' }} />
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1>We Help Businesses</h1>
                                            <h6>Organizations Reduce risk by providing employment</h6>
                                            <p className="description">Duty obligations of business it will
                                                frequently occur that pleasures have to be repudiated and annoyances accepted.
                                            </p>
                                            <Link href="#" className="theme-btn one">
                                                Read More </Link >
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image">
                                            <img src="/assets/images/sliders/slider-2-2.png" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-2-bg.jpg)' }} />
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1>Recruit the best employees</h1>
                                            <h6>Our search results mitigate your company's exposure
                                            </h6>
                                            <p className="description">Duty obligations of business it will
                                                frequently occur that pleasures have to be repudiated and annoyances accepted.
                                            </p>
                                            <Link href="#" className="theme-btn one">
                                                Read More </Link >
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image">
                                            <img src="/assets/images/sliders/slider-2-3.png" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </section>

        </>
    )
}
