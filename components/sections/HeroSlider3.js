
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
                                            Your Trusted Digital Partner
                                            </h1>
                                            <br></br>
                                            <p className="animated _flipInY">
                                            At Sonulo, we transcend being just a software company; we're your trusted digital partner. Your vision becomes our mission. Together, we navigate the intricate digital landscape, working tirelessly to ensure unparalleled success in the digital age. Our partnership is built on trust, expertise, and a shared commitment to your digital journey.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px -70px' }}>
                                            <img src="/assets/images/sliders/slider-new-1.jpg" className="img-fluid" alt="slider image" />
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
                                            Leading the Tech Revolution
                                            </h1>
                                            <br></br>
                                            <p className="animated _flipInY">
                                            At Sonulo, we're pioneers at the forefront of the tech revolution. Our unwavering commitment to innovation and excellence allows us to set new industry standards. With innovative solutions and a passion for pushing boundaries, we redefine the digital landscape, propelling your business into a future brimming with cutting-edge possibilities.
                                            </p>                                         
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px 50px' }}>
                                            <img src="/assets/images/sliders/slider-new-2.jpg" className="img-fluid" alt="slider image" />
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
                                            Tailored Solutions for Success
                                            </h1>
                                            <br></br>
                                            <p className="animated _flipInY">
                                            Our mission at Sonulo is to craft tailored solutions that drive your success. We firmly believe in the power of customization and reject the one-size-fits-all approach. Your unique needs are our primary focus. In a rapidly evolving digital landscape, adaptability is paramount, and we ensure your solutions are perfectly aligned with your goals.
                                            </p>
                                           
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px 50px' }}>
                                            <img src="/assets/images/projects/project-3-img.jpg" className="img-fluid" alt="slider image" />
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
