import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

export default function Faqs() {

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
    };

    const [isActive, setIsActive] = useState({
        status: false,
        key: null,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <Layout breadcrumbTitle="Faqs">
                <div>
                    <section className="faqs-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title_all_box style_one text-center dark_color">
                                        <div className="title_sections">
                                            <div className="before_title"> Find Useful</div>
                                            <h2>Question &amp; Answer</h2>
                                            <p>Check our FAQs for quick answers to frequently asked questions we receive.<br /> If you have other questions write.</p>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_top_15" />
                                        {/*===============spacing==============*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq_section type_two">
                                        <div className="block_faq">
                                            <div className="accordion">
                                                <dl>
                                                    <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                                        What recruitment services do you offer?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                        <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                    </dd>
                                                    <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>
                                                        What sectors or industries do you recruit for?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                        <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                    </dd>
                                                    <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                                        How can I register a job?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                        <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <section className="faq_section type_two">
                                        <div className="block_faq">
                                            <div className="accordion">
                                                <dl>
                                                    <dt className={isActive.key == 4 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(4)}>
                                                        What sectors or industries do you recruit for?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                        <p>Blinded by desire, that they cannot foresee the trouble that are bound to ensue; and equal blame belongs to those who fail in their duty which is the same as saying through shrinking. Nor again is there anyone who loves or pursues or desires to obtain pain itself is pains but circumstances great</p>
                                                    </dd>
                                                    <dt className={isActive.key == 5 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(5)}>What recruitment services do you offer?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                        <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                    </dd>
                                                    <dt className={isActive.key == 6 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(6)}>Where will you advertise my job vacancy?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                        <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_60" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*-faqs-*/}
                    <section className="call-to-action mr_bottom_minus_140">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
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
                            </div>
                        </div>
                    </section>
                    <section className="service-section bg_light_1">
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
                                    <p>Denounce with righteous indignation and dislike men who are  beguiled and demoralized by the charms of pleasure.</p>
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
                        <div className="pd_bottom_90" />
                        {/*===============spacing==============*/}
                    </section>
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
                </div>

            </Layout>
        </>
    )
}