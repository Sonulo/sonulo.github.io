import Layout from '@/components/layout/Layout';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const swiperOptions1 = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.next-single-one',
        prevEl: '.prev-single-one',
    },
};
const swiperOptions2 = {
    modules: [Autoplay, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    centerSlides: true,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
};
const swiperOptions3 = {
    modules: [Autoplay, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    centerSlides: true,
    loop: true,
    navigation: {
        nextEl: '.next-single-one_three',
        prevEl: '.prev-single-one_three',
    },
};

export default function ElementTestimonial() {
    return (
        <>
            <Layout breadcrumbTitle={"Testimonial"}>
                <div>
                    <div className="full_width_box">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        {/*-testimonial-*/}
                        <section className="testimonial bg_op_1" style={{ backgroundImage: 'url(../assets/images/testimonialbg.jpg)' }}>
                            <div className="row align-items-center">
                                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                                    <div className="image">
                                        <img src="../assets/images/testi-image.jpg" className="simp_img img-fluid height_560px" alt="image" />
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
                                                <Swiper {...swiperOptions1}>
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
                                                                    <img src="../assets/images/testi-3.png" alt="image" />
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
                                                                    <img src="../assets/images/testi-2.png" alt="image" />
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
                                                                    <img src="../assets/images/testi-1.png" alt="image" />
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
                        {/*-testimonial-end-*/}
                    </div>
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
                                            <Swiper {...swiperOptions3}>
                                                <SwiperSlide>
                                                    <div className="testimonial_box">
                                                        <div className="authour_image">
                                                            <i className="icon-quote" />
                                                            <img src="../assets/images/team/team-2.jpg" alt="image" />
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
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonial_box">
                                                        <div className="authour_image">
                                                            <i className="icon-quote" />
                                                            <img src="../assets/images/team/team-1.jpg" alt="image" />
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
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonial_box">
                                                        <div className="authour_image">
                                                            <i className="icon-quote" />
                                                            <img src="../assets/images/team/team-3.png" alt="image" />
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
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonial_box">
                                                        <div className="authour_image">
                                                            <i className="icon-quote" />
                                                            <img src="../assets/images/team/team-2.jpg" alt="image" />
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
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonial_box">
                                                        <div className="authour_image">
                                                            <i className="icon-quote" />
                                                            <img src="../assets/images/team/team-1.jpg" alt="image" />
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
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonial_box">
                                                        <div className="authour_image">
                                                            <i className="icon-quote" />
                                                            <img src="../assets/images/team/team-3.png" alt="image" />
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
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="swiper-button-next" />
                                            <div className="swiper-button-prev" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_80" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*--testimonial--*/}
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
                                    <Swiper {...swiperOptions3}>
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
                                                    <img src="../assets/images/blog/blog-image-5.jpg" alt="image" />
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
                                                    <img src="../assets/images/team/team-4.jpg" alt="image" />
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
                                                    <img src="../assets/images/about-us-1-min.png" alt="image" />
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
                                                    <img src="../assets/images/blog/blog-image-5.jpg" alt="image" />
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
                                                    <img src="../assets/images/team/team-4.jpg" alt="image" />
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
                    {/*--testimonial-end--*/}
                    {/*-testimonial--*/}
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
                                            <Swiper {...swiperOptions3}>
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
                                                                    <img src="../assets/images/testi-2.png" alt="image" />
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
                                                                    <img src="../assets/images/testi-1.png" alt="image" />
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
                                                                    <img src="../assets/images/testi-3.png" alt="image" />
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
                                                                    <img src="../assets/images/testi-2.png" alt="image" />
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
                                                                    <img src="../assets/images/testi-1.png" alt="image" />
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
                    {/*-testimonial-end--*/}
                    {/*testimonial*/}
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
                                            <Swiper {...swiperOptions1}>
                                                <SwiperSlide>
                                                    <div className="testimonial_box clearfix">
                                                        <div className="image">
                                                            <img src="../assets/images/banner-four-bg.jpg" alt="image" />
                                                        </div>
                                                        <div className="authour_details">
                                                            <div className="b_image">
                                                                <img src="../assets/images/CLIENT-logo-1.png" alt="image" />
                                                            </div>
                                                            <div className="comment">
                                                                While running an early stage startup everything feels
                                                                hard, that’s why it’s been so nice to have our accounting
                                                                feel easy. We recommed Qetus.
                                                            </div>
                                                            <div className="details clearfix">
                                                                <div className="c_image">
                                                                    <img src="../assets/images/testi-2.png" alt="image" />
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
                                                            <img src="../assets/images/banner-four-bg.jpg" alt="image" />
                                                        </div>
                                                        <div className="authour_details">
                                                            <div className="b_image">
                                                                <img src="../assets/images/CLIENT-logo-1.png" alt="image" />
                                                            </div>
                                                            <div className="comment">
                                                                While running an early stage startup everything feels
                                                                hard, that’s why it’s been so nice to have our accounting
                                                                feel easy. We recommed Qetus.
                                                            </div>
                                                            <div className="details clearfix">
                                                                <div className="c_image">
                                                                    <img src="../assets/images/testi-1.png" alt="image" />
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
                                                            <img src="../assets/images/banner-four-bg.jpg" alt="image" />
                                                        </div>
                                                        <div className="authour_details">
                                                            <div className="b_image">
                                                                <img src="../assets/images/CLIENT-logo-1.png" alt="image" />
                                                            </div>
                                                            <div className="comment">
                                                                While running an early stage startup everything feels
                                                                hard, that’s why it’s been so nice to have our accounting
                                                                feel easy. We recommed Qetus.
                                                            </div>
                                                            <div className="details clearfix">
                                                                <div className="c_image">
                                                                    <img src="../assets/images/testi-2.png" alt="image" />
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
                    {/*testimonial end*/}
                    {/*testimonial*/}
                    <section className="testimonial-section bg_op_1" style={{ backgroundImage: 'url(../assets/images/testi-home-9.jpg)' }}>
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
                                            <Swiper {...swiperOptions1}>
                                                <SwiperSlide>
                                                    <div className="testimonial_box clearfix">
                                                        <div className="authour_details">
                                                            <div className="c_image">
                                                                <img src="../assets/images/team/team-6.png" alt="image" />
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
                                                                <img src="../assets/images/team/team-4.jpg" alt="image" />
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
                                                                <img src="../assets/images/team/team-5.png" alt="image" />
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
                                                                <img src="../assets/images/team/team-6.png" alt="image" />
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
                    {/*testimonial end*/}
                    {/*-testimonial*/}
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
                                        <Swiper {...swiperOptions2} className="owl_nav_block owl_dots_none owl_type_two theme_carousel">
                                            <SwiperSlide  className="testimonial_box type_one">
                                                <span className="icon-quote" />
                                                <div className="testimonial_inner">
                                                    <div className="description">
                                                        <p>I love creote everyone has been great to work
                                                            with and you’re all great partner for company,
                                                            we thank you ... </p>
                                                    </div>
                                                    <div className="lower_content clearfix">
                                                        <div className="image_box">
                                                            <img decoding="async" src="../assets/images/testi-2.png" alt="image" />
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
                                            <SwiperSlide  className="testimonial_box type_one">
                                                <span className="icon-quote" />
                                                <div className="testimonial_inner">
                                                    <div className="description">
                                                        <p>We hired creote to assist us with refining
                                                            marketing plans, you truly understands &amp;
                                                            gave us very good ideas. </p>
                                                    </div>
                                                    <div className="lower_content clearfix">
                                                        <div className="image_box">
                                                            <img decoding="async" src="../assets/images/testi-3.png" alt="image" />
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
                                            <SwiperSlide  className="testimonial_box type_one">
                                                <span className="icon-quote" />
                                                <div className="testimonial_inner">
                                                    <div className="description">
                                                        <p>You bring tremendous value to company. We have
                                                            generated more leads in the last 45 days. </p>
                                                    </div>
                                                    <div className="lower_content clearfix">
                                                        <div className="image_box">
                                                            <img decoding="async" src="../assets/images/testi-1.png" alt="image" />
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
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_90" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*testimonial end*/}
                    {/*-testimonial*/}
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
                                            <p>Which is the same as saying through shrinking from toil and pain. These cases
                                                are
                                                perfectly simple and easy to distinguish.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="testimonial_all owl_new_one ">
                                        <Swiper {...swiperOptions2} className="owl_nav_block owl_dots_none owl_type_two theme_carousel">
                                            <SwiperSlide className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="../assets/images/testi-1.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote" />
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            You bring tremendous value to company. We have generated more
                                                            leads in the last 45 days than the last 2 days ...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Fleix Everard </h2>
                                                        <h6>HR, Blue Soft Sol</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star empty" />
                                                        <i className="fa fa-star empty" />
                                                    </p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="../assets/images/testi-3.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote" />
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            We hired creote to assist us with refining marketing plans, you
                                                            truly understands &amp; gave us very good ideas.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Ivor Herbert</h2>
                                                        <h6>Manager, Airlines</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star empty" />
                                                        <i className="fa fa-star empty" />
                                                    </p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="../assets/images/testi-2.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote" />
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            I love creote everyone has been great to work with and you’re
                                                            all
                                                            great partner for company, we thank you ...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Boris Elbert </h2>
                                                        <h6>Green Tech</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star fill" />
                                                        <i className="fa fa-star empty" />
                                                        <i className="fa fa-star empty" />
                                                    </p>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_90" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*testimonial end*/}
                </div>
            </Layout>
        </>
    )
}
