import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function HeroSlider10() {
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
    };
    return (
        <>
            <section className="slider style_page_twelve nav_position_one">
                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-12-1.jpg)' }}>
                            </div>
                            <div className="medium-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animate_up">Risk management <br />
                                                and workplace audits to identify potential <br />
                                                areas </h1>
                                            <div className="animate_down theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider_image animate_left slider_content">
                                            <img src="/assets/images/sliders/slider-12-i-1.jpg" className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-12-1.jpg)' }}>
                            </div>
                            <div className="medium-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animate_left">Risk management <br />
                                                and workplace audits to identify potential <br />
                                                areas </h1>
                                            <div className="animate_right theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider_image animate_right slider_content">
                                            <img src="/assets/images/sliders/slider-12-i-2.jpg" className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h10p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h10n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
