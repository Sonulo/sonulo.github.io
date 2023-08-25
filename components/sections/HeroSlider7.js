import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link"
export default function HeroSlider7() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
    };
    return (
        <>
            <section className="slider style_one slider_version_v3">
                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-7-bg.jpg)' }} />
                            <div className="auto-container">
                                <div className="contnet_d_flex">
                                    <div className="text_box_content">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Our Vision to Grow Better
                                            </h6>
                                            <h1 className="animate_up">
                                                Excellence for
                                                people in business
                                            </h1>
                                            <p className="animate_up">
                                                Helping Clients Achieve Results Through Their People.
                                            </p>
                                            <ul className="animate_up">
                                                <li>
                                                    Reducing Redundancy
                                                </li>
                                                <li>
                                                    Uncovering Hidden Resources
                                                </li>
                                                <li>
                                                    Increasing Company’s Agility
                                                </li>
                                            </ul>
                                            <div className="thm_btn animate_down">
                                                <Link href="#" className="theme-btn two">
                                                    Read More </Link >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image_content">
                                        <div className="slider_image animate_right">
                                            <img src="/assets/images/sliders/slider-7-1.png" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-7-bg.jpg)' }} />
                            <div className="auto-container">
                                <div className="contnet_d_flex">
                                    <div className="text_box_content">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Our Vision to Grow Better
                                            </h6>
                                            <h1 className="animate_up">
                                                Excellence for
                                                people in business
                                            </h1>
                                            <p className="animate_up">
                                                Helping Clients Achieve Results Through Their People.
                                            </p>
                                            <ul className="animate_up">
                                                <li>
                                                    Reducing Redundancy
                                                </li>
                                                <li>
                                                    Uncovering Hidden Resources
                                                </li>
                                                <li>
                                                    Increasing Company’s Agility
                                                </li>
                                            </ul>
                                            <div className="thm_btn animate_down">
                                                <Link href="#" className="theme-btn two">Read More</Link >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image_content">
                                        <div className="slider_image animate_right">
                                            <img src="/assets/images/sliders/slider-7-1.png" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-7-bg.jpg)' }} />
                            <div className="auto-container">
                                <div className="contnet_d_flex">
                                    <div className="text_box_content">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Our Vision to Grow Better
                                            </h6>
                                            <h1 className="animate_up">
                                                Excellence for
                                                people in business
                                            </h1>
                                            <p className="animate_up">
                                                Helping Clients Achieve Results Through Their People.
                                            </p>
                                            <ul className="animate_up">
                                                <li>
                                                    Reducing Redundancy
                                                </li>
                                                <li>
                                                    Uncovering Hidden Resources
                                                </li>
                                                <li>
                                                    Increasing Company’s Agility
                                                </li>
                                            </ul>
                                            <div className="thm_btn animate_down">
                                                <Link href="#" className="theme-btn two">Read More</Link >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image_content">
                                        <div className="slider_image animate_right">
                                            <img src="/assets/images/sliders/slider-7-1.png" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="auto-container pr_relative">
                    <div className="contact_box_ban">
                        <div className="icon_bx">
                            <span className="icon-phone" />
                        </div>
                        <div className="conent_bx">
                            <h6>General Enquires</h6>
                            <p>Phone: +98 060 712 34 &amp; Email: sendmail@qetus.com</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
