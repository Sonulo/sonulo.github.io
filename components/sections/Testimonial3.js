import { Autoplay, Navigation, Pagination } from "swiper";
export default function Testimonial3() {
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
            <section className="testimonial-section pd_left_100 pd_right_100">
                {/*===============spacing==============*/}
                <div className="pd_top_85" />
                {/*===============spacing==============*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_two text-center dark_color">
                                <div className="title_sections two">
                                    <div className="before_title">Quote About</div>
                                    <h2>Customers Experience</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-11 m-auto">
                            <div className="testimonial_sec dark_color style_two">
                                <div className="swiper  single_swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial_box">
                                                <div className="authour_image">
                                                    <i className="icon-quote" />
                                                    <img src="/assets/images/team/team-2.jpg" alt="image" />
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial_box">
                                                <div className="authour_image">
                                                    <i className="icon-quote" />
                                                    <img src="/assets/images/team/team-1.jpg" alt="image" />
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial_box">
                                                <div className="authour_image">
                                                    <i className="icon-quote" />
                                                    <img src="/assets/images/team/team-3.png" alt="image" />
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial_box">
                                                <div className="authour_image">
                                                    <i className="icon-quote" />
                                                    <img src="/assets/images/team/team-2.jpg" alt="image" />
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial_box">
                                                <div className="authour_image">
                                                    <i className="icon-quote" />
                                                    <img src="/assets/images/team/team-1.jpg" alt="image" />
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial_box">
                                                <div className="authour_image">
                                                    <i className="icon-quote" />
                                                    <img src="/assets/images/team/team-3.png" alt="image" />
                                                </div>
                                                <div className="comment">
                                                    While running an early stage startup everything feels
                                                    hard, that’s why it’s been so nice to have our accounting
                                                    feel easy. We recommed Qetus.
                                                </div>
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                </div>
                                <div className="swiper single_swiper_tab">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="auth_details">
                                                <h2>Ivoroy Herbert</h2>
                                                <span>Senior Manager of Excel Solution</span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="auth_details">
                                                <h2>Fleix Everard</h2>
                                                <span>President, in Blue Software Solution</span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="auth_details">
                                                <h2>Hazel Penelope</h2>
                                                <span>Senior Manager of Excel Solution</span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="auth_details">
                                                <h2>Ivoroy Herbert</h2>
                                                <span>Senior Manager of Excel Solution</span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="auth_details">
                                                <h2>Fleix Everard</h2>
                                                <span>President, in Blue Software Solution</span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="auth_details">
                                                <h2>Hazel Penelope</h2>
                                                <span>Senior Manager of Excel Solution</span>
                                            </div>
                                        </div>
                                    </div>
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
