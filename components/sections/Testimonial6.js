
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial6() {
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
            nextEl: '.next-single-one',
            prevEl: '.prev-single-one',
        },
    };
    return (
        <>
            <section className="testimonial-section">
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections ">
                                    <div className="before_title">Our Clients</div>
                                    <h2>Customers Experience</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_15" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="testimonial_sec position-relative style_v2_one">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="testimonial_box clearfix">
                                                <div className="image">
                                                    <img src="/assets/images/banner-four-bg.jpg" alt="image" />
                                                </div>
                                                <div className="authour_details">
                                                    <div className="b_image">
                                                        <img src="/assets/images/CLIENT-logo-1.png" alt="image" />
                                                    </div>
                                                    <div className="comment">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Qetus.
                                                    </div>
                                                    <div className="details clearfix">
                                                        <div className="c_image">
                                                            <img src="/assets/images/testi-2.png" alt="image" />
                                                        </div>
                                                        <div className="c_content">
                                                            <div className="content_in">
                                                                <h2>Jacob Leonardo</h2>
                                                                <span>Senior Manager of Excel Solution</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box clearfix">
                                                <div className="image">
                                                    <img src="/assets/images/banner-five-bg.jpg" alt="image" />
                                                </div>
                                                <div className="authour_details">
                                                    <div className="b_image">
                                                        <img src="/assets/images/CLIENT-logo-1.png" alt="image" />
                                                    </div>
                                                    <div className="comment">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Qetus.
                                                    </div>
                                                    <div className="details clearfix">
                                                        <div className="c_image">
                                                            <img src="/assets/images/testi-1.png" alt="image" />
                                                        </div>
                                                        <div className="c_content">
                                                            <div className="content_in">
                                                                <h2>Jacob Leonardo</h2>
                                                                <span>Senior Manager of Excel Solution</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box clearfix">
                                                <div className="image">
                                                    <img src="/assets/images/banner-four-bg.jpg" alt="image" />
                                                </div>
                                                <div className="authour_details">
                                                    <div className="b_image">
                                                        <img src="/assets/images/CLIENT-logo-1.png" alt="image" />
                                                    </div>
                                                    <div className="comment">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Qetus.
                                                    </div>
                                                    <div className="details clearfix">
                                                        <div className="c_image">
                                                            <img src="/assets/images/testi-2.png" alt="image" />
                                                        </div>
                                                        <div className="c_content">
                                                            <div className="content_in">
                                                                <h2>Jacob Leonardo</h2>
                                                                <span>Senior Manager of Excel Solution</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="arrows">
                                    <div className="prev-single-one" />
                                    <div className="next-single-one" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
