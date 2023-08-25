import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Service9() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        }
    };
    return (
        <>
            <section className="service-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="title_all_box style_one">
                                <div className="title_sections">
                                    <h2 className="title">Focus on your Business</h2>
                                    <p>When you work with HR Solutions, you get the best. We provide adaptable solutions
                                        that allow you to be a part of the entire process</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="theme_btn_all color_one text-md-end">
                                <Link href="#" className="theme-btn one">View All Services</Link >
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_20" />
                        {/*===============spacing==============*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-1 hidden-xl" />
                    <div className="col-xxl-10 col-xl-12">
                        <div className="service_caro_section carousel style_one">
                            <div className="swiper-container">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="service_carousel style_one">
                                            <div className="image">
                                                <div className="overlay" />
                                                <img width={500} height={500} src="/assets/images/service/service-image-5.jpg" className="attachment-creote-service-image size-creote-service-image" alt="img" />
                                            </div>
                                            <div className="content">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icon" />
                                                </div>
                                                <h2 className="title_service"><Link href="/service" >Health Care
                                                    Benefits</Link ></h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_carousel style_one">
                                            <div className="image">
                                                <div className="overlay" />
                                                <img width={500} height={500} src="/assets/images/service/service-image-4.jpg" className="attachment-creote-service-image size-creote-service-image" alt="img" />
                                            </div>
                                            <div className="content">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icon" />
                                                </div>
                                                <h2 className="title_service"><Link href="/service" >Risk
                                                    Management</Link ></h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_carousel style_one">
                                            <div className="image">
                                                <div className="overlay" />
                                                <img width={500} height={500} src="/assets/images/service/service-image-3.png" className="attachment-creote-service-image size-creote-service-image" alt="img" />
                                            </div>
                                            <div className="content">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icon" />
                                                </div>
                                                <h2 className="title_service"><Link href="/service" >Compliance
                                                    Audits</Link ></h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_carousel style_one">
                                            <div className="image">
                                                <div className="overlay" />
                                                <img width={500} height={500} src="/assets/images/service/service-image-2.png" className="attachment-creote-service-image size-creote-service-image" alt="img" />
                                            </div>
                                            <div className="content">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icon" />
                                                </div>
                                                <h2 className="title_service"><Link href="/service" >Employee
                                                    Relations</Link ></h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_carousel style_one">
                                            <div className="image">
                                                <div className="overlay" />
                                                <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-6.jpg" className="attachment-creote-service-image size-creote-service-image" alt="img" />
                                            </div>
                                            <div className="content">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icon" />
                                                </div>
                                                <h2 className="title_service"><Link href="/service" >Talent
                                                    Management</Link ></h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_carousel style_one">
                                            <div className="image">
                                                <div className="overlay" />
                                                <img width={500} height={500} src="/assets/images/service/service-image-5.jpg" className="attachment-creote-service-image size-creote-service-image" alt="img" />
                                            </div>
                                            <div className="content">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icon" />
                                                </div>
                                                <h2 className="title_service"><Link href="/service" >Health Care
                                                    Benefits</Link ></h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="p_pagination">
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-1 hidden-xl" />
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
