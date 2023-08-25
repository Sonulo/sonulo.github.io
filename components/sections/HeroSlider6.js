import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function HeroSlider6() {
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
            nextEl: '.h6n',
            prevEl: '.h6p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    return (
        <>
            <section className="slider slider_version_v2 style_five  nav_position_one">
                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-6-2.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content" style={{ padding: '200px 0px' }}>
                                            <h6 className="animated _fadeInDownBig">
                                                Our Vision to Grow Better
                                            </h6>
                                            <h1 className="animated _fadeInDownBig">
                                                End to End <br /> Solution
                                            </h1>
                                            <p className="animated _fadeInDownBig">
                                                These cases are perfectly simple and easy to distinguish. In a free
                                                <br />
                                                hour, when our power of choice is untrammelled.
                                            </p>
                                            <div className="thm_btn animated _zoomIn">
                                                <Link href="#" className="theme-btn one  animated _zoomIn">
                                                    Read More </Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-6-3.jpg)' }} />
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content" style={{ padding: '200px 0px' }}>
                                            <h6 className="animated _fadeInDownBig">
                                                Hire the Best
                                            </h6>
                                            <h1 className="animated _fadeInDownBig">
                                                High Touch <br /> Services
                                            </h1>
                                            <p className="animated _fadeInDownBig">
                                                On the other hand, we denounce with righteous indignation and <br />
                                                dislike men who are so beguiled.
                                            </p>
                                            <div className="thm_btn animated _zoomIn">
                                                <Link href="#" className="theme-btn one  animated _zoomIn">Read More</Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-6-1.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content" style={{ padding: '200px 0px' }}>
                                            <h6 className="animated _fadeInDownBig">
                                                Our Vision to Grow Better
                                            </h6>
                                            <h1 className="animated _fadeInDownBig">
                                                Operational <br /> Efficiency
                                            </h1>
                                            <p className="animated _fadeInDownBig">
                                                Duty obligations of business it will frequently occur that pleasures
                                                <br /> have to be repudiated and annoyances accepted.
                                            </p>
                                            <div className="thm_btn animated _zoomIn">
                                                <Link href="#" className="theme-btn one  animated _zoomIn">Read More</Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h6p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h6n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
