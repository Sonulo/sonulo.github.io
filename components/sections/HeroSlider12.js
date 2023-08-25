
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link"
export default function HeroSlider12() {
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
            nextEl: '.h12n',
            prevEl: '.h12p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };
    return (
        <>
            <section className="slider style_page_fourteen nav_position_one position-relative">
                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-home-14-1.jpg)' }}>
                            </div>
                            <div className="medium-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 m-auto">
                                        <div className="slider_content">
                                            <h6 className="animate_left">
                                                Strategy &amp; Planning
                                            </h6>
                                            <h1 className="animate_up">
                                                Skilled Industry
                                                Professionals
                                            </h1>
                                            <p className="animate_right pd_bottom_40">
                                                Who are so beguiled and demoralized the charms Long established fact
                                                <br /> that a reader will be distracted
                                            </p>
                                            <ul className="animate_down">
                                                <li className="theme_btn_all">
                                                    <Link href="#" className="theme-btn one">About Us </Link >
                                                </li>
                                                <li className="theme_btn_all ">
                                                    <Link href="#" className="theme-btn one color_white_1">Our Service
                                                    </Link >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-home-14-2.jpg)' }}>
                            </div>
                            <div className="medium-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h6 className="animate_left">
                                                Solutions for your business
                                            </h6>
                                            <h1 className="animate_up">
                                                Performance and Productivity
                                            </h1>
                                            <p className="animate_right pd_bottom_40">
                                                Who are so beguiled and demoralized the charms Long established fact
                                                <br /> that a reader will be distracted
                                            </p>
                                            <ul className="animate_down">
                                                <li className="theme_btn_all">
                                                    <Link href="#" className="theme-btn one">Our Service</Link >
                                                </li>
                                                <li className="theme_btn_all">
                                                    <Link href="#" className="theme-btn one color_white_1">Projects</Link >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-home-14-3.jpg)' }}>
                            </div>
                            <div className="medium-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 m-auto">
                                        <div className="slider_content">
                                            <h6 className="animate_left">
                                                Solutions for your business
                                            </h6>
                                            <h1 className="animate_up">
                                                Excellence for
                                                people in business
                                            </h1>
                                            <p className="animate_right pd_bottom_40">
                                                Who are so beguiled and demoralized the charms Long established fact
                                                <br /> that a reader will be distracted
                                            </p>
                                            <ul className="animate_down">
                                                <li className="theme_btn_all">
                                                    <Link href="#" className="theme-btn one">Our Service</Link >
                                                </li>
                                                <li className="theme_btn_all">
                                                    <Link href="#" className="theme-btn one color_white_1">Projects</Link >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h12p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h12n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
