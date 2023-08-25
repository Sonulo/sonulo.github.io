import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonial10() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.t10n',
            prevEl: '.t10p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
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
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    };
    return (
        <>
            <section className="testimonial-section">
                {/*===============spacing==============*/}
                <div className="pd_top_50" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="title_all_box style_six text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        <span className="icon-briefcase icon" />
                                        TESTIMONIAL
                                    </div>
                                    <div className="title">Words From Our Customers</div>
                                    <p>Which is the same as saying through shrinking from toil and pain. These cases are
                                        perfectly simple and easy to distinguish.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial_all owl_new_one ">
                                <Swiper {...swiperOptions} className=" owl_nav_block owl_dots_none owl_type_two theme_carousel">
                                    <SwiperSlide className="testimonial_box type_one">
                                        <span className="icon-quote" />
                                        <div className="testimonial_inner">
                                            <div className="description">
                                                <p>I love creote everyone has been great to work
                                                    with and you’re all great partner for company,
                                                    we thank you ... </p>
                                            </div>
                                            <div className="lower_content clearfix">
                                                <div className="image_box">
                                                    <img decoding="async" src="/assets/images/testi-2.png" alt="image" />
                                                </div>
                                                <div className="authour_name">
                                                    <h2>Boris Elbert </h2>
                                                    <h6>Green Tech</h6>
                                                    <p>
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star empty" />
                                                        <i className="fa fa-star empty" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonial_box type_one">
                                        <span className="icon-quote" />
                                        <div className="testimonial_inner">
                                            <div className="description">
                                                <p>We hired creote to assist us with refining
                                                    marketing plans, you truly understands &amp;
                                                    gave us very good ideas. </p>
                                            </div>
                                            <div className="lower_content clearfix">
                                                <div className="image_box">
                                                    <img decoding="async" src="/assets/images/testi-3.png" alt="image" />
                                                </div>
                                                <div className="authour_name">
                                                    <h2>Ivor Herbert</h2>
                                                    <h6>Manager, Airlines</h6>
                                                    <p>
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star empty" />
                                                        <i className="fa fa-star empty" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonial_box type_one">
                                        <span className="icon-quote" />
                                        <div className="testimonial_inner">
                                            <div className="description">
                                                <p>You bring tremendous value to company. We have
                                                    generated more leads in the last 45 days. </p>
                                            </div>
                                            <div className="lower_content clearfix">
                                                <div className="image_box">
                                                    <img decoding="async" src="/assets/images/testi-1.png" alt="image" />
                                                </div>
                                                <div className="authour_name">
                                                    <h2>Fleix Everard </h2>
                                                    <h6>HR, Blue Soft Sol</h6>
                                                    <p>
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star empty" />
                                                        <i className="fa fa-star empty" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="owl-nav">
                                        <div className="owl-prev t10p">
                                            <span>‹</span>
                                        </div>
                                        <div className="owl-next t10n">
                                            <span>›</span>
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
