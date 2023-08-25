
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial7() {
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
            <section className="testimonial-section bg_op_1" style={{ backgroundImage: 'url(/assets/images/testi-home-9.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center light_color">
                                <div className="title_sections">
                                    <div className="before_title color_white">Customer Reviews</div>
                                    <h2 className="title color_white">See What Our Clients Speak</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_top_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 m-auto">
                            <div className="testimonial_sec style_v2_two">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="testimonial_box clearfix">
                                                <div className="authour_details">
                                                    <div className="c_image">
                                                        <img src="/assets/images/team/team-6.png" alt="image" />
                                                    </div>
                                                    <div className="comment">
                                                        Affordable and refreshingly easy to use HR management software for small to
                                                        medium businesses. CakeHR is built with ease of use in mind.Unlike older HR
                                                        platforms which can be painfully slow and complex
                                                    </div>
                                                    <div className="details clearfix">
                                                        <div className="c_content">
                                                            <div className="content_in">
                                                                <h2>Jacob Leonardo</h2>
                                                                <span>Senior Manager of Excel Solution</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box clearfix">
                                                <div className="authour_details">
                                                    <div className="c_image">
                                                        <img src="/assets/images/team/team-4.jpg" alt="image" />
                                                    </div>
                                                    <div className="comment">
                                                        Affordable and refreshingly easy to use HR management software for small to
                                                        medium businesses. CakeHR is built with ease of use in mind.Unlike older HR
                                                        platforms which can be painfully slow and complex
                                                    </div>
                                                    <div className="details clearfix">
                                                        <div className="c_content">
                                                            <div className="content_in">
                                                                <h2>Jacob Leonardo</h2>
                                                                <span>Senior Manager of Excel Solution</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box clearfix">
                                                <div className="authour_details">
                                                    <div className="c_image">
                                                        <img src="/assets/images/team/team-5.png" alt="image" />
                                                    </div>
                                                    <div className="comment">
                                                        Affordable and refreshingly easy to use HR management software for small to
                                                        medium businesses. CakeHR is built with ease of use in mind.Unlike older HR
                                                        platforms which can be painfully slow and complex
                                                    </div>
                                                    <div className="details clearfix">
                                                        <div className="c_content">
                                                            <div className="content_in">
                                                                <h2>Jacob Leonardo</h2>
                                                                <span>Senior Manager of Excel Solution</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box clearfix">
                                                <div className="authour_details">
                                                    <div className="c_image">
                                                        <img src="/assets/images/team/team-6.png" alt="image" />
                                                    </div>
                                                    <div className="comment">
                                                        Affordable and refreshingly easy to use HR management software for small to
                                                        medium businesses. CakeHR is built with ease of use in mind.Unlike older HR
                                                        platforms which can be painfully slow and complex
                                                    </div>
                                                    <div className="details clearfix">
                                                        <div className="c_content">
                                                            <div className="content_in">
                                                                <h2>Jacob Leonardo</h2>
                                                                <span>Senior Manager of Excel Solution</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" />
                                                            </li>
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
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
