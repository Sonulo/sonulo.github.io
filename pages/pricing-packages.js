import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    }

    return (
        <>
            <Layout breadcrumbTitle="Pricing">
                <div>
                    {/*tab section*/}
                    <section className="tab-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title_all_box style_one text-center dark_color">
                                        <div className="title_sections">
                                            <div className="before_title"> Flexible Plan</div>
                                            <h2>Perfect for Small &amp; Large Brands</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gutter_40px">
                                <div className="col-lg-12">
                                    <div className="price_plan_with_tab price_tb_style_one">
                                        <div className="tab_pricing_list">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}>
                                                        Monthly</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)}>
                                                        Anually</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content price_tab_content" id="myTabContent">
                                            <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                <div className="row">
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="price_plan_box style_one ">
                                                            <div className="inner_box">
                                                                <div className="top">
                                                                    <h2>Bronze Package</h2>
                                                                    <p>Pricing plan for startup company</p>
                                                                </div>
                                                                <div className="mid">
                                                                    <h4>149<span>$</span></h4>
                                                                    <p>Loves or pursues or desires obtain pain of itself is pain
                                                                        occasionally.</p>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul>
                                                                        <li>
                                                                            <span> 4-5 Weeks from to finish</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Data sprint</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Results revision</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                        <li>
                                                                            <span> 20 Days of support</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Organisational Strategy</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">Get
                                                                        Now</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="price_plan_box style_one tag_enables">
                                                            <div className="tag">Popular</div>
                                                            <div className="inner_box">
                                                                <div className="top">
                                                                    <h2>Silver Package</h2>
                                                                    <p>Pricing plan for startup company</p>
                                                                </div>
                                                                <div className="mid">
                                                                    <h4>249<span>$</span></h4>
                                                                    <p>Loves or pursues or desires obtain pain of itself is pain
                                                                        occasionally.</p>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul>
                                                                        <li>
                                                                            <span> 4-5 Weeks from to finish</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Data sprint</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Results revision</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                        <li>
                                                                            <span> 20 Days of support</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Organisational Strategy</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">Get
                                                                        Now</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="price_plan_box style_one">
                                                            <div className="inner_box">
                                                                <div className="top">
                                                                    <h2>Gold Package</h2>
                                                                    <p>Pricing plan for startup company</p>
                                                                </div>
                                                                <div className="mid">
                                                                    <h4>349<span>$</span></h4>
                                                                    <p>Loves or pursues or desires obtain pain of itself is pain
                                                                        occasionally.</p>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul>
                                                                        <li>
                                                                            <span> 4-5 Weeks from to finish</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Data sprint</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Results revision</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> 20 Days of support</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Organisational Strategy</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">Get
                                                                        Now</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                <div className="row">
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="price_plan_box style_one ">
                                                            <div className="inner_box">
                                                                <div className="top">
                                                                    <h2>Bronze Package </h2>
                                                                    <p>Pricing plan for startup company</p>
                                                                </div>
                                                                <div className="mid">
                                                                    <h4>349<span>$</span></h4>
                                                                    <p>Loves or pursues or desires obtain pain of itself is pain
                                                                        occasionally.</p>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul>
                                                                        <li>
                                                                            <span> 4-5 Weeks from to finish</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Data sprint</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Results revision</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> 20 Days of support</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Organisational Strategy</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">
                                                                        Get Now
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="price_plan_box style_one  tag_enables ">
                                                            <div className="tag">Popular</div>
                                                            <div className="inner_box">
                                                                <div className="top">
                                                                    <h2>Silver Package</h2>
                                                                    <p>Pricing plan for startup company</p>
                                                                </div>
                                                                <div className="mid">
                                                                    <h4>549<span>$</span></h4>
                                                                    <p>Loves or pursues or desires obtain pain
                                                                        of itself is pain occasionally.
                                                                    </p>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul>
                                                                        <li>
                                                                            <span> 4-5 Weeks from to finish</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Data sprint</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Results revision</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> 20 Days of support</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Organisational Strategy</span>
                                                                            <i className="fa fa-times" />
                                                                        </li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">
                                                                        Get Now
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="price_plan_box style_one  tag_enables ">
                                                            <div className="tag">Popular</div>
                                                            <div className="inner_box">
                                                                <div className="top">
                                                                    <h2>Gold <br /> Package</h2>
                                                                    <p>Pricing plan for startup company</p>
                                                                </div>
                                                                <div className="mid">
                                                                    <h4>949<span>$</span></h4>
                                                                    <p>Loves or pursues or desires obtain pain
                                                                        of itself is pain occasionally.
                                                                    </p>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul>
                                                                        <li>
                                                                            <span> 4-5 Weeks from to finish</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Data sprint</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Results revision</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> 20 Days of support</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                        <li>
                                                                            <span> Organisational Strategy</span>
                                                                            <i className="fa fa-check" />
                                                                        </li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">
                                                                        Get Now
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*tab section*/}
                    {/*-call to action-*/}
                    <section className="call-to-action mr_bottom_minus_140 position-relative z_99">
                        <div className="container">
                            <div className="call_to_action style_two">
                                <div className="image">
                                    <img src="/assets/images/call-to-pric-bg-1.jpg" className="img-fluid" alt="image" />
                                </div>
                                <div className="auto-container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="left_content">
                                                <div className="main_content">
                                                    <h1>For More Information About Our Prcing &amp; Plans</h1>
                                                    <div className="bottom_content">
                                                        <div className="call_content">
                                                            <span className="icon-phone-call1 icon" />
                                                            <div className="content_bx">
                                                                <h2>Get In Touch</h2>
                                                                <p> Email: sendmail@qetus.com &amp; Phone: +98 060 712 34 </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="image_right">
                                                <img src="/assets/images/cal-img.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*-call to action-*/}
                    <section className="service-box-section bg_light_1">
                        {/*===============spacing==============*/}
                        <div className="pd_top_230" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title_all_box style_one text-center dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Check Out</div>
                                            <h2>Customer Service Section</h2>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_25" />
                                        {/*===============spacing==============*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="service_box style_four dark_color">
                                        <div className="service_content">
                                            <Link href="#">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-6-img.jpg" className="img-fluid" alt="Service Image" />
                                                    <span className=" icon-video-player" />
                                                </div>
                                            </Link>
                                            <div className="content_inner">
                                                <h2><Link href="#">Chat With a Live</Link></h2>
                                                <p>Live Chat</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service_box style_four dark_color">
                                        <div className="service_content">
                                            <Link href="#">
                                                <div className="image_box">
                                                    <img src="/assets/images/about/about-12.jpg" className="img-fluid" alt="Service Image" />
                                                    <span className=" icon-businessman-1" />
                                                </div>
                                            </Link>
                                            <div className="content_inner">
                                                <h2><Link href="#">Ask Professionals</Link></h2>
                                                <p>our Team</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service_box style_four dark_color">
                                        <div className="service_content">
                                            <Link href="#">
                                                <div className="image_box">
                                                    <img src="/assets/images/blog/blog-image-10.jpg" className="img-fluid" alt="Service Image" />
                                                    <span className="icon-development" />
                                                </div>
                                            </Link>
                                            <div className="content_inner">
                                                <h2><Link href="#">Support to Grow</Link></h2>
                                                <p>User Guides</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_90" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*-call to action-*/}
                    {/*-client-*/}
                    <section className="client-brand">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-3 mb-lg-0 mb-xl-0">
                                    <div className="title_all_box style_one  dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">List of Our</div>
                                            <h2>Business Partners</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <p>Denounce with righteous indignation and dislike men who are beguiled and demoralized by the
                                        charms of pleasure.</p>
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn four">Contact Us <i className="icon-right-arrow" /></Link>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="client_logo_carousel type_one">
                                        <div className="swiper-container">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="image">
                                                        <img src="/assets/images/CLIENT-logo-1.png" alt="clients-logo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="image">
                                                        <img src="/assets/images/CLIENT-logo-2.png" alt="clients-logo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="image">
                                                        <img src="/assets/images/CLIENT-logo-3.png" alt="clients-logo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="image">
                                                        <img src="/assets/images/CLIENT-logo-4.png" alt="clients-logo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="image">
                                                        <img src="/assets/images/CLIENT-logo-1.png" alt="clients-logo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="image">
                                                        <img src="/assets/images/CLIENT-logo-2.png" alt="clients-logo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="image">
                                                        <img src="/assets/images/CLIENT-logo-3.png" alt="clients-logo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="image">
                                                        <img src="/assets/images/CLIENT-logo-4.png" alt="clients-logo" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*-client-*/}
                    {/*-newsteller-*/}
                    <section className="newsteller style_one bg_dark_1">
                        {/*===============spacing==============*/}
                        <div className="pd_top_40" />
                        {/*===============spacing==============*/}
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content">
                                        <h2>Join Our Mailing List</h2>
                                        <p>For receiving our news and updates in your inbox directly. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="item_scubscribe">
                                        <div className="input_group">
                                            <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                    <input type="submit" defaultValue="Sign up" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_40" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*-newsteller end-*/}
                </div>

            </Layout>
        </>
    )
}