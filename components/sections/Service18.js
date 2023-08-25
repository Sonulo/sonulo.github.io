import Link from "next/link"
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Service18() {
    const swiperOptions = {
        modules: [Autoplay],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };
    return (
        <>
            <section className="service-section-two pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                <div className="inner_section bg_light_1 rounded_radius">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="default-container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="title_all_box style_one text-center">
                                    <div className="title_sections">
                                        <div className="title">Key Areas of Expertise</div>
                                        <p>
                                            Our power of choice is untrammelled and when nothing prevents
                                            being able to do what we like best every pleasure.
                                        </p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-xs-12">
                                <div className="service_all_styles carousel owl_new_one">
                                    <Swiper {...swiperOptions} className="owl_nav_none owl_dots_none owl_type_two theme_carousel">
                                        <SwiperSlide className="service_box  type_one clearfix">
                                            <div className="image_box">
                                                <img src="/assets/images/service/service-image-6.jpg" className="img-fluid" alt="img" />
                                                <div className="overlay" />
                                            </div>
                                            <div className="content_box">
                                                <div className="icon_box clearfix">
                                                    <div className="icon_box_inner">
                                                        <i className="icon icon-thumbs-up icon" />
                                                    </div>
                                                </div>
                                                <h2 className="entry-title">
                                                    <Link href="/service-details">Talent Management</Link >
                                                </h2>
                                                <p>Once your company has hired the best employees, the next step.
                                                </p>
                                                <Link href="/service-details" className="read_more type_one">
                                                    <span className="icon-arrow-right" />
                                                    Read More
                                                </Link >
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="service_box  type_one clearfix">
                                            <div className="image_box">
                                                <img src="/assets/images/service/service-image-5.jpg" className="img-fluid" alt="img" />
                                                <div className="overlay" />
                                            </div>
                                            <div className="content_box">
                                                <div className="icon_box clearfix">
                                                    <div className="icon_box_inner">
                                                        <i className="icon icon-thumbs-up icon" />
                                                    </div>
                                                </div>
                                                <h2 className="entry-title">
                                                    <Link href="/service-details">Health Care Benefits
                                                    </Link >
                                                </h2>
                                                <p>Workplace conflict can become a costly and time-consuming process
                                                    .</p>
                                                <Link href="/service-details" className="read_more type_one">
                                                    <span className="icon-arrow-right" />
                                                    Read More
                                                </Link >
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="service_box  type_one clearfix">
                                            <div className="image_box">
                                                <img src="/assets/images/service/service-image-4.jpg" className="img-fluid" alt="img" />
                                                <div className="overlay" />
                                            </div>
                                            <div className="content_box">
                                                <div className="icon_box clearfix">
                                                    <div className="icon_box_inner">
                                                        <i className="icon icon-thumbs-up icon" />
                                                    </div>
                                                </div>
                                                <h2 className="entry-title"><Link href="/service-details">Risk
                                                    Management</Link ></h2>
                                                <p>Mitigate workplace issues before they escalate ,Shared Time
                                                    Human.</p>
                                                <Link href="/service-details" className="read_more type_one">
                                                    <span className="icon-arrow-right" />
                                                    Read More
                                                </Link >
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_60" />
                    {/*===============spacing==============*/}
                </div>
            </section>

        </>
    )
}
