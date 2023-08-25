import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function HeroSlider9() {
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
            nextEl: '.h9n',
            prevEl: '.h9p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };
    return (
        <>
            <section className="slider style_page_eleven  nav_position_one">
                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-11-1.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h6 className="animate_up">Business, Reduce Cost</h6>
                                            <h1 className="animate_left"> Focus on your Business,
                                                Reduce Cost andLimit Liability,
                                                with HR Solutions </h1>
                                            <div className="animate_down">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-11-2.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h6 className="animate_up"> Health Care Benefits </h6>
                                            <h1 className="animate_right">
                                                We offer health care benefits ,
                                                planning, benefit programs, and ,
                                                employee  programs.,
                                            </h1>
                                            <div className="animate_down">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h9p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h9n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
