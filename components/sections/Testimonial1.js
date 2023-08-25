
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial1() {
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
            nextEl: '.prev-single-one',
            prevEl: '.prev-single-one',
        },

        // Pagination
        pagination: {
            el: '.number-pagination',
            clickable: true,
            type: "fraction"
        }
    };
    return (
        <>
            <section className="testimonial bg_op_1" style={{ backgroundImage: 'url(/assets/images/testimonialbg.jpg)' }}>
                <div className="row align-items-center">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                        <div className="image">
                            <img src="/assets/images/testi-image.jpg" className="object-fit-cover img-fluid height_560px" alt="image" />
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                        <div className="testimonial_sec_wrapper pd_left_70">
                            <div className="title_all_box style_one light_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Quote About
                                    </div>
                                    <h2> Customers Experience</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="testimonial_sec light_color style_one">
                                <div className="icon_quotes">
                                    <i className="icon-quote" />
                                </div>
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testi-3.png" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Jacob Leonardo</h2>
                                                        <span>Senior Manager of Excel Solution</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testi-2.png" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Jacob Leonardo</h2>
                                                        <span>Senior Manager of Excel Solution</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testi-1.png" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Jacob Leonardo</h2>
                                                        <span>Senior Manager of Excel Solution</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="arrows">
                                        <div className="prev-single-one" />
                                        <div className="next-single-one" />
                                    </div>
                                    <div className="num_pagination">
                                        <div className="number-pagination">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </div>
                    {/*-empty column-*/}
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12">
                    </div>
                    {/*-empty column-*/}
                </div>
            </section>

        </>
    )
}
