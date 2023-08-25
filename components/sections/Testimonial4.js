import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial4() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.next-single-one_three',
            prevEl: '.prev-single-one_three',
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
            <section className="testimonial-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_75" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">
                                    <div className="before_title">Quote About</div>
                                    <h2>Customers Experience</h2>
                                    <p>Shared Time Human Resources Management, Inc. performs executive <br /> searches and
                                        professional recruitment for our clients.</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_25" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="testimonial_sec light_color style_three">
                        <div className="swiper-container">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <p className="description">
                                            While running an early stage startup everything feels
                                            hard, that’s why it’s been so nice to have our accounting
                                            feel easy. We recommed Qetus.
                                        </p>
                                        <h3 className="title">Jacob Leonardo</h3>
                                        <p className="from">Senior Manager of Excel Solution</p>
                                        <div className="pic">
                                            <img src="/assets/images/blog/blog-image-5.jpg" alt="image" />
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <p className="description">
                                            While running an early stage startup everything feels
                                            hard, that’s why it’s been so nice to have our accounting
                                            feel easy. We recommed Qetus.
                                        </p>
                                        <h3 className="title">Jacob Leonardo</h3>
                                        <p className="from">Senior Manager of Excel Solution</p>
                                        <div className="pic">
                                            <img src="/assets/images/team/team-4.jpg" alt="image" />
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <p className="description">
                                            While running an early stage startup everything feels
                                            hard, that’s why it’s been so nice to have our accounting
                                            feel easy. We recommed Qetus.
                                        </p>
                                        <h3 className="title">Jacob Leonardo</h3>
                                        <p className="from">Senior Manager of Excel Solution</p>
                                        <div className="pic">
                                            <img src="/assets/images/team/team-4.jpg" alt="image" />
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <p className="description">
                                            While running an early stage startup everything feels
                                            hard, that’s why it’s been so nice to have our accounting
                                            feel easy. We recommed Qetus.
                                        </p>
                                        <h3 className="title">Jacob Leonardo</h3>
                                        <p className="from">Senior Manager of Excel Solution</p>
                                        <div className="pic">
                                            <img src="/assets/images/blog/blog-image-5.jpg" alt="image" />
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <p className="description">
                                            While running an early stage startup everything feels
                                            hard, that’s why it’s been so nice to have our accounting
                                            feel easy. We recommed Qetus.
                                        </p>
                                        <h3 className="title">Jacob Leonardo</h3>
                                        <p className="from">Senior Manager of Excel Solution</p>
                                        <div className="pic">
                                            <img src="/assets/images/team/team-4.jpg" alt="image" />
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="arrows">
                            <div className="prev-single-one_three" />
                            <div className="next-single-one_three" />
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_55" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
