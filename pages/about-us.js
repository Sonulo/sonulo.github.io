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
                <title>Sonulo - About Us</title>
            </Head>

            <Layout breadcrumbTitle="About Us" headerStyle={3} footerStyle={3}>
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
                                            <h2>We are Leaders in Software Solutions</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="extra_content image_with_content dark_color">
                                        <div className="simple_image">
                                            <img src="/assets/images/country-2.jpg" alt="img" />
                                            <h2> Operating in Colombo, <br /> Sri Lanka </h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>we are on a mission to transform ideas into reality through cutting-edge software solutions. With a passion for technology and a commitment to excellence, we are your trusted partner for all your software development needs.< br/></p>
                                        
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
                                                        <h6>Tailored Advice &amp; Support
                                                        </h6>
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
                                                        <h6>Flexible Company Policies</h6>
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
                                        <img src="/assets/images/about/about-7.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="image two">
                                    <img src="/assets/images/about/about-13.jpg" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="authour_quotes">
                                        <i className="icon-quote" />
                                        <h6>Making What’s Possible in Software Development</h6>
                                       
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
                                <div className="simple_image_boxes parallax_cover height_235px">
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
                                            <h5>Our Mission</h5>
                                            <p>We understand that every project is unique, and we tailor our solutions to meet your specific goals and requirements.</p>
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
                                            <h5>Our Core Values</h5>
                                            <p>Our approach is simple yet effective: we listen, we innovate, and we deliver</p>
                                            <ul>
                                                <li>Expertise</li>
                                                <li>Innovation</li>
                                                <li>Quality</li>
                                                <li>Client Centric</li>
                                                <li>Scalability</li>
                                            </ul>
                                            <div className="btn_left">
                                                <Link href="#new" className="theme-btn one">Read More</Link>
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
                                            <h5>Our Vision</h5>
                                            <p>We envision a world where technology empowers businesses to thrive and innovate without limits.</p>
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
                
                {/*-timeline--*/}
                {/*-tab--*/}
                <section id="new" className="tab-section bg_op_1" style={{ backgroundImage: 'url(/assets/images/tab-sec-bg.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_100" />
                    {/*===============spacing==============*/}
                    <div className="container" >
                        <div className="row">
                            <div className="tabs_all_box  tabs_all_box_start type_one">
                                <div className="tab_over_all_box">
                                    <div className="tabs_header clearfix">
                                        <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                                            <li className="nav-item">
                                                <a className={activeIndex === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(1)}>01. Expertised</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(2)}>02. Innovative</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(3)}>03. Quality</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 4 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(4)}>04. Client Centric</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 5 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(5)}>05. Scalable</a>
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
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/about/about-14.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Sonulo</h6>
                                                        <h2>Expertised</h2>
                                                        <p>Our team consists of seasoned professionals who are leaders in their respective fields. With years of experience, we have a deep understanding of the latest industry trends and technologies.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/about/about-15.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Sonulo</h6>
                                                        <h2>Innovative</h2>
                                                        <p>
                                                        We are passionate about staying at the forefront of technological innovation. Our commitment to research and development ensures that your projects are built with the latest tools and methodologies.
                                                        </p>                                                   
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 3 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/about/about-11.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Sonulo</h6>
                                                        <h2>Quality</h2>
                                                        <p>We take pride in delivering high-quality solutions that not only meet but exceed your expectations. Our rigorous testing and quality assurance processes ensure the reliability and performance of our products.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 4 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/cal-to-action-2.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Sonulo</h6>
                                                        <h2>Client Centric</h2>
                                                        <p>Your success is our success. We work closely with you, maintaining clear communication throughout the project lifecycle to ensure your goals are met and your vision is realized.</p>                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 5 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/projects/project-3-img.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Sonulo</h6>
                                                        <h2>Scalable</h2>
                                                        <p>Our solutions are designed to scale with your business, whether you're a startup with growth ambitions or an established enterprise.</p>
                                                       
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

            </Layout>
        </>
    )
}