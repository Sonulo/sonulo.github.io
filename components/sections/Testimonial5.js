import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial5() {
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
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial_sec light_color style_four">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="box_inner not_ovelay">
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="description">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Qetus.
                                                    </p>
                                                    <div className="client_bx">
                                                        <div className="image_box">
                                                            <img src="/assets/images/testi-2.png" alt="image" />
                                                        </div>
                                                        <div className="left_s">
                                                            <h2 className="title">Tommy Reaves</h2>
                                                            <h6 className="from">President</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="box_inner not_ovelay">
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="description">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Qetus.
                                                    </p>
                                                    <div className="client_bx">
                                                        <div className="image_box">
                                                            <img src="/assets/images/testi-1.png" alt="image" />
                                                        </div>
                                                        <div className="left_s">
                                                            <h2 className="title">Jacob Leonardo</h2>
                                                            <h6 className="from">CEO Founder</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="box_inner not_ovelay">
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="description">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Qetus.
                                                    </p>
                                                    <div className="client_bx">
                                                        <div className="image_box">
                                                            <img src="/assets/images/testi-3.png" alt="image" />
                                                        </div>
                                                        <div className="left_s">
                                                            <h2 className="title">Steven Kelly</h2>
                                                            <h6 className="from">Secretary &amp; Founder</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="box_inner not_ovelay">
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="description">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Qetus.
                                                    </p>
                                                    <div className="client_bx">
                                                        <div className="image_box">
                                                            <img src="/assets/images/testi-2.png" alt="image" />
                                                        </div>
                                                        <div className="left_s">
                                                            <h2 className="title">Tommy Reaves</h2>
                                                            <h6 className="from">President</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="box_inner not_ovelay">
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="description">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Qetus.
                                                    </p>
                                                    <div className="client_bx">
                                                        <div className="image_box">
                                                            <img src="/assets/images/testi-1.png" alt="image" />
                                                        </div>
                                                        <div className="left_s">
                                                            <h2 className="title">Jacob Leonardo</h2>
                                                            <h6 className="from">CEO Founder</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
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
