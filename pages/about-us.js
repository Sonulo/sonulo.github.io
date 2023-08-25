import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from 'next/head'

export default function AboutUs() {

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
        centeredSlides: true,

        // Navigation
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
    };

    return (
        <>
            <Head>
                <title>Creote - About Us</title>
            </Head>

            <Layout breadcrumbTitle="About Us">
                {/*-about-*/}
                <section className="about-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 ">
                                <div className="about_content position-relative z_99">
                                    <div className="title_all_box style_one text-left  dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">We are</div>
                                            <h2>Leaders in HR Solution</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="extra_content image_with_content dark_color">
                                        <div className="simple_image">
                                            <img src="/assets/images/cuntry-1.png" alt="img" />
                                            <h2> Since 1998, <br /> Operating in Birmingham.</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>The great explorer of the truth, the master-builder of human happiness no one rejects
                                            dislikes avoids pleasure itself because it is pleasure but because know who do not
                                            those how to pursue pleasures rationally encounter consequences that are extremely
                                            painful desires to obtain. </p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_25" />
                                    {/*===============spacing==============*/}
                                    <div className="row gutter_15px">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all  style_two">
                                                <div className="icon_content  icon_imgs ">
                                                    <div className="icon">
                                                        <img src="/assets/images/icon-img-n-1.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3><Link href="#" >Tailored Advice &amp; Support</Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all  style_two">
                                                <div className="icon_content  icon_imgs ">
                                                    <div className="icon">
                                                        <img src="/assets/images/icon-img-n-2.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3><Link href="#" >Flexible Company Policies</Link></h3>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn five">Contact us<i className="icon-right-arrow" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="image_boxes style_two">
                                    <img src="/assets/images/shape-1.png" className="background_image" alt="image" />
                                    <div className="image one">
                                        <img src="/assets/images/about/about-6.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="image two">
                                        <img src="/assets/images/about/about-7.png" className="img-fluid" alt="image" />
                                        <div className="video_box">
                                            <VideoBox />
                                        </div>
                                    </div>
                                    <div className="authour_quotes">
                                        <i className="icon-quote" />
                                        <h6>Making What’s Possible in Human Resource</h6>
                                        <p>/ Liam Oliver</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_70" />
                    {/*===============spacing==============*/}
                </section>
                {/*-about end-*/}
                {/*-service-*/}
                <section className="service-icon-section bg_light_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">Our Business</div>
                                        <h2 className="title">Stand Out From The Rest</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="simple_image_boxes parallax_cover height_264px">
                                    <img src="/assets/images/icon-img-ab-1.jpg" className="simp_img cover-parallax" alt="image" />
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-bow-and-arrow" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Mission</Link></h3>
                                            <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                                the same as saying.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-growth" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Core Values</Link></h3>
                                            <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                                the same as saying.</p>
                                            <ul>
                                                <li>Integrity</li>
                                                <li>Commitment to excellence</li>
                                                <li>Consumer focus</li>
                                                <li>Accountability</li>
                                                <li>Inclusiveness</li>
                                            </ul>
                                            <div className="btn_left">
                                                <Link href="#" className="theme-btn one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-4 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-binoculars" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Vision</Link></h3>
                                            <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                                the same as saying.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="simple_image_boxes  height_264px">
                                    <img src="/assets/images/icon-img-ab-2.jpg" className="simp_img img-fluid" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                </section>
                {/*-service end-*/}
                {/*-timeline--*/}
                <section className="timeline-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Evaluation of</div>
                                    <h2 className="title">Our Company &amp; Partners</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 pd_zero">
                            <div className="time_line_section style_one">
                                <div className="swiper-container">
                                    <div className="swiper-button-next">
                                        <div className="border_one sme" />
                                    </div>
                                    <div className="swiper-button-prev">
                                        <div className="border_two sme" />
                                    </div>
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >Company Started</Link>
                                                        </h2>
                                                        <p>Expound the actual teachings of the great explorer the truth the masters
                                                            builder of human happiness one rejects.</p>
                                                    </div>
                                                    <div className="year">
                                                        1998
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/projects/project-3-img.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >New Milestone</Link>
                                                        </h2>
                                                        <p>No one rejects dislikes or avoids pleasures itself because it is pleasures,
                                                            but because those who pursue pleasure rationally.</p>
                                                    </div>
                                                    <div className="year">
                                                        2000
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/projects/project-5-img.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >
                                                                First Award </Link>
                                                        </h2>
                                                        <p> Undertakes laborious physical exercise except to obtain some advantage from
                                                            it
                                                            pursue pleasure rationally.
                                                        </p>
                                                    </div>
                                                    <div className="year">
                                                        2001
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/service/service-image-4.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >
                                                                100 Employees </Link>
                                                        </h2>
                                                        <p> Expound the actual teachings of the great
                                                            explorer the truth the masters builder of human
                                                            happiness one rejects.
                                                        </p>
                                                    </div>
                                                    <div className="year">
                                                        2004
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/blog/blog-image-8.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >
                                                                Company Started </Link>
                                                        </h2>
                                                        <p> Expound the actual teachings of the great
                                                            explorer the truth the masters builder of human
                                                            happiness one rejects.
                                                        </p>
                                                    </div>
                                                    <div className="year">
                                                        1998
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/projects/project-3-img.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >
                                                                New Milestone </Link>
                                                        </h2>
                                                        <p> No one rejects dislikes or avoids pleasures itself because it is pleasures,
                                                            but because those who
                                                            pursue pleasure rationally.
                                                        </p>
                                                    </div>
                                                    <div className="year">
                                                        2000
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/projects/project-5-img.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >Company Started</Link>
                                                        </h2>
                                                        <p>Expound the actual teachings of the great explorer the truth the masters
                                                            builder of human happiness one rejects.</p>
                                                    </div>
                                                    <div className="year">
                                                        1998
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/projects/project-3-img.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >New Milestone</Link>
                                                        </h2>
                                                        <p>No one rejects dislikes or avoids pleasures itself because it is pleasures,
                                                            but because those who pursue pleasure rationally.</p>
                                                    </div>
                                                    <div className="year">
                                                        2000
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/projects/project-5-img.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >
                                                                First Award </Link>
                                                        </h2>
                                                        <p> Undertakes laborious physical exercise except to obtain some advantage from
                                                            it
                                                            pursue pleasure rationally.
                                                        </p>
                                                    </div>
                                                    <div className="year">
                                                        2001
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/service/service-image-4.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >
                                                                100 Employees </Link>
                                                        </h2>
                                                        <p> Expound the actual teachings of the great
                                                            explorer the truth the masters builder of human
                                                            happiness one rejects.
                                                        </p>
                                                    </div>
                                                    <div className="year">
                                                        2004
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/blog/blog-image-8.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >
                                                                Company Started </Link>
                                                        </h2>
                                                        <p> Expound the actual teachings of the great
                                                            explorer the truth the masters builder of human
                                                            happiness one rejects.
                                                        </p>
                                                    </div>
                                                    <div className="year">
                                                        1998
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/projects/project-3-img.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="time_line_box">
                                                <div className="time_inner">
                                                    <div className="border_liner">
                                                        <span />
                                                        <span className="last" />
                                                    </div>
                                                    <div className="content">
                                                        <h2>
                                                            <Link href="#" >
                                                                New Milestone </Link>
                                                        </h2>
                                                        <p> No one rejects dislikes or avoids pleasures itself because it is pleasures,
                                                            but because those who
                                                            pursue pleasure rationally.
                                                        </p>
                                                    </div>
                                                    <div className="year">
                                                        2000
                                                    </div>
                                                    <div className="image">
                                                        <img src="/assets/images/projects/project-5-img.jpg" alt="img" />
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
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                </section>
                {/*-timeline--*/}
                {/*-tab--*/}
                <section className="tab-section bg_op_1" style={{ backgroundImage: 'url(/assets/images/tab-sec-bg.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_100" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="tabs_all_box  tabs_all_box_start type_one">
                                <div className="tab_over_all_box">
                                    <div className="tabs_header clearfix">
                                        <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                                            <li className="nav-item">
                                                <a className={activeIndex === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(1)}>01. Affordable</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(2)}>02. Knowledge</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(3)}>03. Saves Time</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 4 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(4)}>04. Fast &amp; Quality</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 5 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(5)}>05. Experienced</a>
                                            </li>
                                        </ul>
                                        <div className="toll_free">
                                            <Link href="tel:180667586677"> <i className="icon-phone-call" />Call For Free
                                                Consultation</Link>
                                        </div>
                                    </div>
                                    <div className="s_tab_wrapper">
                                        <div className="s_tabs_content">
                                            <div className={activeIndex === 1 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/tab-image.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/blog/blog-image-8.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>
                                                            Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.
                                                        </p>
                                                        <Link href="#" className="rd_more">
                                                            Read More
                                                            <i className="icon-right-arrow" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 3 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/banner-five-bg.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 4 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/home-4-about-1.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 5 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/image-about-ls.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link>
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
                    <div className="pd_bottom_90" />
                    {/*===============spacing==============*/}
                </section>
                {/*-tab-end-*/}
                {/*-team-*/}
                <section className="team-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="title_all_box style_one  dark_color">
                                    <div className="title_sections">
                                        <div className="before_title"> Dedicated Team</div>
                                        <h2>Professional Individuals</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="description_box">
                                    <p>Our power of choice is untrammelled and when nothing prevents being able to do what we
                                        like best every pleasure.</p>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_one">
                                    <div className="team_box_outer">
                                        <div className="member_image">
                                            <img src="/assets/images/team/team-1.jpg" alt="team image" />
                                        </div>
                                        <div className="about_member">
                                            <div className="share_media">
                                                <ul className="first">
                                                    <li className="text">Share</li>
                                                    <li><i className="fa fa-share-alt" /></li>
                                                </ul>
                                                <ul>
                                                    <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                    <li><Link href="#"> <i className="fa fa-facebook"> </i></Link></li>
                                                    <li><Link href="#"> <i className="fa fa-twitter"> </i></Link></li>
                                                    <li><Link href="#"> <i className="fa fa-skype"> </i></Link></li>
                                                    <li><Link href="#"> <i className="fa fa-instagram"> </i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="authour_details">
                                                <span>Director </span>
                                                <h6>Amelia Margaret</h6>
                                                <div className="button_view">
                                                    <Link href="#" className="theme-btn one"> View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_one">
                                    <div className="team_box_outer">
                                        <div className="member_image">
                                            <img src="/assets/images/team/team-2.jpg" alt="team image" />
                                        </div>
                                        <div className="about_member">
                                            <div className="share_media">
                                                <ul className="first">
                                                    <li className="text">Share</li>
                                                    <li><i className="fa fa-share-alt" /></li>
                                                </ul>
                                                <ul>
                                                    <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                    <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-skype"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link></li>
                                                </ul>
                                            </div>
                                            <div className="authour_details">
                                                <span>Team Leader </span>
                                                <h6>Andrew Cameron</h6>
                                                <div className="button_view">
                                                    <Link href="#" className="theme-btn one"> View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_one">
                                    <div className="team_box_outer">
                                        <div className="member_image">
                                            <img src="/assets/images/team/team-3.png" alt="team image" />
                                        </div>
                                        <div className="about_member">
                                            <div className="share_media">
                                                <ul className="first">
                                                    <li className="text">Share</li>
                                                    <li><i className="fa fa-share-alt" /></li>
                                                </ul>
                                                <ul>
                                                    <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                    <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-skype"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link></li>
                                                </ul>
                                            </div>
                                            <div className="authour_details">
                                                <span>Manager </span>
                                                <h6>Sofia Charlotte</h6>
                                                <div className="button_view">
                                                    <Link href="#" className="theme-btn one"> View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_60" />
                    {/*===============spacing==============*/}
                </section>
                {/*-team-end-*/}
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

            </Layout>
        </>
    )
}