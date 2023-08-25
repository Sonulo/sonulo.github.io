
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link"
export default function HeroSlider8() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h8n',
            prevEl: '.h8p',
        },
    };
    return (
        <>
            <section className="slider style_one slider_version_v4 nav_position_one">
                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-8-1.jpg)' }} />
                            <div className="auto-container">
                                <div className="contnet_d_flex">
                                    <div className="text_box_content">
                                        <div className="slider_content">
                                            <h6>
                                                Dining Sets &amp; Tables
                                            </h6>
                                            <h1>
                                                Curate a picture <br />perfect Living Room
                                            </h1>
                                            <p>
                                                A Living room isn't only a place where we spend the most time, <br /> but it also
                                                sets the mood for the rest of the home
                                            </p>
                                            <ul>
                                                <li>
                                                    <div className="thm_btn">
                                                        <Link href="#" className="theme-btn one">
                                                            Shop Now
                                                        </Link >
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tag_content">
                                                        $218
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-8-2.jpg)' }} />
                            <div className="auto-container">
                                <div className="contnet_d_flex">
                                    <div className="text_box_content">
                                        <div className="slider_content">
                                            <h6>
                                                Modern &amp; Colonial
                                            </h6>
                                            <h1>
                                                Right To The Latest <br /> Trends We Got Your Style
                                            </h1>
                                            <p>
                                                Make a great first impression with a living room that reflects <br /> your
                                                aesthetics and personality.
                                            </p>
                                            <ul>
                                                <li>
                                                    <div className="thm_btn">
                                                        <Link href="#" className="theme-btn one">
                                                            Shop Now
                                                        </Link >
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tag_content animated _bounceInUp">
                                                        $167
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-8-3.jpg)' }} />
                            <div className="auto-container">
                                <div className="contnet_d_flex">
                                    <div className="text_box_content">
                                        <div className="slider_content">
                                            <h6>
                                                Light &amp; Glamorous Metals
                                            </h6>
                                            <h1>
                                                Decorate your Life <br /> with Full of Lights
                                            </h1>
                                            <p>
                                                Your home is a reflection of you. Nail your aesthetic with products <br /> our
                                                stylists love and recommend.
                                            </p>
                                            <ul>
                                                <li>
                                                    <div className="thm_btn">
                                                        <Link href="#" className="theme-btn one">
                                                            Select Options
                                                        </Link >
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tag_content">
                                                        $324
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h8p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h8n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
