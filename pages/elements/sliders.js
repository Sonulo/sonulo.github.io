import Layout from '@/components/layout/Layout';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    // General
    direction: 'horizontal',
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
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
};

export default function ElementSliders() {
    return (
        <>
            <Layout breadcrumbTitle="Sliders">
                <div className="no-container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_70" />
                            {/*===============spacing==============*/}
                            {/*-slider*/}
                            <section className="slider style_four nav_position_one">
                                <Swiper {...swiperOptions} className="owl-carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-1-1.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content pd_top_180 pd_bottom_200">
                                                            <h6 className="animate_up d-inline-block"> Our Vision to Grow Better </h6>
                                                            <h1 className="animate_left"> Inspired <br /> Performance </h1>
                                                            <p className="description animate_right"> Duty obligations of business it will
                                                                frequently occur that pleasures <br /> have to be repudiated and
                                                                annoyances
                                                                accepted. </p>
                                                            <div className="button_all animate_down">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-1-2.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content pd_top_180 pd_bottom_200">
                                                            <h6 className="animate_up d-inline-block"> Hire the Best </h6>
                                                            <h1 className="animate_left"> Hire Better, <br /> Faster! </h1>
                                                            <p className="description animate_right"> On the other hand, we denounce with
                                                                righteous indignation and <br /> dislike men who are so beguiled. </p>
                                                            <div className="button_all animate_down">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_right">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-1-3.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content pd_top_180 pd_bottom_200">
                                                            <h6 className="animate_up d-inline-block"> Our Vision to Grow Better </h6>
                                                            <h1 className="animate_left"> Countless <br /> Happy Clients </h1>
                                                            <p className="description animate_right"> These cases are perfectly simple and
                                                                easy
                                                                to distinguish. In a free <br /> hour, when our power of choice is
                                                                untrammelled.
                                                            </p>
                                                            <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn"> Read
                                                                More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*-slider-end-*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*-slider--*/}
                            <section className="slider style_one pag_position_two">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_none owl_dots_block theme_carousel ">
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-2-bg.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="d-flex align-items-center">
                                                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1>Skilled Industry Professionals</h1>
                                                            <h6>Shared Time Human Resources Management</h6>
                                                            <p className="description">Duty obligations of business it will
                                                                frequently occur that pleasures have to be repudiated and annoyances
                                                                accepted.
                                                            </p>
                                                            <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn">
                                                                Read More </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                                                        <div className="slider_image">
                                                            <img src="../assets/images/sliders/slider-2-1.png" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_right">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-2-bg.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1>We Help Businesses</h1>
                                                            <h6>Organizations Reduce risk by providing employment</h6>
                                                            <p className="description">Duty obligations of business it will
                                                                frequently occur that pleasures have to be repudiated and annoyances
                                                                accepted.
                                                            </p>
                                                            <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
                                                                Read More </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                                                        <div className="slider_image">
                                                            <img src="../assets/images/sliders/slider-2-2.png" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-2-bg.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1>Recruit the best employees</h1>
                                                            <h6>Our search results mitigate your company's exposure
                                                            </h6>
                                                            <p className="description">Duty obligations of business it will
                                                                frequently occur that pleasures have to be repudiated and annoyances
                                                                accepted.
                                                            </p>
                                                            <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
                                                                Read More </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                                                        <div className="slider_image">
                                                            <img src="../assets/images/sliders/slider-2-3.png" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*-slider-end--*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*-slider-*/}
                            <section className="slider style_two  nav_position_one">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_right">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-3-bg.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1 className="animated _fadeInDownBig">
                                                                Hands On Professional Touch
                                                            </h1>
                                                            <p className="animated _flipInY">
                                                                On the other hand, we denounce with righteous indignation and dislike
                                                                men who are so beguiled.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn three  animated _zoomIn">Read More</a>
                                                                </li>
                                                                <li>
                                                                    <div className="video_box animated _flipInX">
                                                                        <a href="https://www.youtube.com/embed/-VK0axfge4A" className="lightbox-image"><i className="icon-play" /></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px -70px' }}>
                                                            <img src="../assets/images/sliders/slider-3-2.jpg" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-3-bg.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1 className="animated _fadeInDownBig">
                                                                In House Specialists On Demand
                                                            </h1>
                                                            <p className="animated _flipInY">
                                                                Duty obligations of business it will frequently occur that pleasures
                                                                have to be repudiated and annoyances accepted.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn three  animated _zoomIn">Read More</a>
                                                                </li>
                                                                <li>
                                                                    <div className="video_box animated _flipInX">
                                                                        <a href="https://www.youtube.com/embed/-VK0axfge4A" className="lightbox-image"><i className="icon-play" /></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px 50px' }}>
                                                            <img src="../assets/images/sliders/slider-3-3.jpg" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-3-bg.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1 className="animated _fadeInDownBig">
                                                                Be spoke Outsourced HR Solutions
                                                            </h1>
                                                            <p className="animated _flipInY">
                                                                These cases are perfectly simple and easy to distinguish. In a free
                                                                hour, when our power of choice is untrammelled.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn three animated _zoomIn">
                                                                        Read More</a>
                                                                </li>
                                                                <li>
                                                                    <div className="video_box animated _flipInX">
                                                                        <a href="https://www.youtube.com/embed/-VK0axfge4A" className="lightbox-image"><i className="icon-play" /></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px 50px' }}>
                                                            <img src="../assets/images/sliders/slider-3-1.jpg" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*-slider-end-*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*-slider-*/}
                            <section className="slider style_three pag_position_two">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_none owl_dots_block theme_carousel ">
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-4-3.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content" style={{ padding: '50px 0px' }}>
                                                            <h1 className="animated _fadeInDownBig">
                                                                Jump Start <br /> Your Organization
                                                            </h1>
                                                            <p className="animated _flipInY">
                                                                These cases are perfectly simple and easy to distinguish. In a free <br />
                                                                hour, when our power of choice is untrammelled.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn five  animated _zoomIn">
                                                                        Read More </a>
                                                                </li>
                                                                <li>
                                                                    <div className="video_box animated _flipInX">
                                                                        <a href="https://www.youtube.com/embed/-VK0axfge4A" className="lightbox-image"><i className="icon-play" /></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_right">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-4-2.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content" style={{ padding: '50px 0px' }}>
                                                            <h1 className="animated _fadeInDownBig">
                                                                Strategic HR <br /> On Commitment
                                                            </h1>
                                                            <p className="animated _flipInY">
                                                                Duty obligations of business it will frequently occur that pleasures
                                                                <br />
                                                                have to be repudiated and annoyances accepted.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn five  animated _zoomIn">
                                                                        Read More </a>
                                                                </li>
                                                                <li>
                                                                    <div className="video_box animated _flipInX">
                                                                        <a href="https://www.youtube.com/embed/-VK0axfge4A" className="lightbox-image"><i className="icon-play" /></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-4-1.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content" style={{ padding: '50px 0px' }}>
                                                            <h1 className="animated _fadeInDownBig">
                                                                Countless <br />
                                                                Happy Clients
                                                            </h1>
                                                            <p className="animated _flipInY">
                                                                On the other hand, we denounce with righteous indignation <br /> and
                                                                dislike men
                                                                who are so beguiled.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn five  animated _zoomIn">
                                                                        Read More </a>
                                                                </li>
                                                                <li>
                                                                    <div className="video_box animated _flipInX">
                                                                        <a href="https://www.youtube.com/embed/-VK0axfge4A" className="lightbox-image"><i className="icon-play" /></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*-slider-end--*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*-slider-*/}
                            <section className="slider slider_version_v2 style_four nav_position_one">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-5-3.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1 className="animated _fadeInDownBig">
                                                                Solid Technology <br /> <span> Platform that Scales Your Growth<span>
                                                                </span></span>
                                                            </h1>
                                                            <p className="animated _fadeInDownBig">
                                                                On the other hand, we denounce with righteous indignation and <br />
                                                                dislike men who are so beguiled.
                                                            </p>
                                                            <div className="thm_btn animated _zoomIn">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn">
                                                                    Read More </a>
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two  animated _zoomIn">
                                                                    Contact Us </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-5-1.jpg)' }} />
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1 className="animated _fadeInDownBig">
                                                                Perfect Fit <span> For Your Organization.</span>
                                                            </h1>
                                                            <p className="animated _fadeInDownBig">
                                                                These cases are perfectly simple and easy to distinguish. In a free <br />
                                                                hour, when our power of choice is untrammelled.
                                                            </p>
                                                            <div className="thm_btn animated _zoomIn">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn">
                                                                    Read More </a>
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two  animated _zoomIn">
                                                                    Contact Us </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-5-2.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1 className="animated _fadeInDownBig">
                                                                It’s Time to <br /> <span> Grow Your Startup.</span>
                                                            </h1>
                                                            <p className="animated _fadeInDownBig">
                                                                Duty obligations of business it will frequently occur that pleasures
                                                                <br /> have to be repudiated and annoyances accepted.
                                                            </p>
                                                            <div className="thm_btn animated _zoomIn">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn">
                                                                    Read More </a>
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two  animated _zoomIn">
                                                                    Contact Us </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*-slider-end-*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*--slder--*/}
                            <section className="slider slider_version_v2 style_five  nav_position_one">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-6-2.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content" style={{ padding: '200px 0px' }}>
                                                            <h6 className="animated _fadeInDownBig">
                                                                Our Vision to Grow Better
                                                            </h6>
                                                            <h1 className="animated _fadeInDownBig">
                                                                End to End <br /> Solution
                                                            </h1>
                                                            <p className="animated _fadeInDownBig">
                                                                These cases are perfectly simple and easy to distinguish. In a free <br />
                                                                hour, when our power of choice is untrammelled.
                                                            </p>
                                                            <div className="thm_btn animated _zoomIn">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn">
                                                                    Read More </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-6-1.jpg)' }} />
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content" style={{ padding: '200px 0px' }}>
                                                            <h6 className="animated _fadeInDownBig">
                                                                Hire the Best
                                                            </h6>
                                                            <h1 className="animated _fadeInDownBig">
                                                                High Touch <br /> Services
                                                            </h1>
                                                            <p className="animated _fadeInDownBig">
                                                                On the other hand, we denounce with righteous indignation and <br />
                                                                dislike men who are so beguiled.
                                                            </p>
                                                            <div className="thm_btn animated _zoomIn">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-6-3.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content" style={{ padding: '200px 0px' }}>
                                                            <h6 className="animated _fadeInDownBig">
                                                                Our Vision to Grow Better
                                                            </h6>
                                                            <h1 className="animated _fadeInDownBig">
                                                                Operational <br /> Efficiency
                                                            </h1>
                                                            <p className="animated _fadeInDownBig">
                                                                Duty obligations of business it will frequently occur that pleasures
                                                                <br /> have to be repudiated and annoyances accepted.
                                                            </p>
                                                            <div className="thm_btn animated _zoomIn">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*-slider-*/}
                            <section className="slider style_one slider_version_v3">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-7-bg.jpg)' }} />
                                            <div className="auto-container">
                                                <div className="contnet_d_flex">
                                                    <div className="text_box_content">
                                                        <div className="slider_content">
                                                            <h6 className="animate_up">
                                                                Our Vision to Grow Better
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                Excellence for
                                                                people in business
                                                            </h1>
                                                            <p className="animate_up">
                                                                Helping Clients Achieve Results Through Their People.
                                                            </p>
                                                            <ul className="animate_up">
                                                                <li>
                                                                    Reducing Redundancy
                                                                </li>
                                                                <li>
                                                                    Uncovering Hidden Resources
                                                                </li>
                                                                <li>
                                                                    Increasing Company’s Agility
                                                                </li>
                                                            </ul>
                                                            <div className="thm_btn animate_down">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                                    Read More </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image_content">
                                                        <div className="slider_image animate_right">
                                                            <img src="../assets/images/sliders/slider-7-1.png" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-7-bg.jpg)' }} />
                                            <div className="auto-container">
                                                <div className="contnet_d_flex">
                                                    <div className="text_box_content">
                                                        <div className="slider_content">
                                                            <h6 className="animate_up">
                                                                Our Vision to Grow Better
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                Excellence for
                                                                people in business
                                                            </h1>
                                                            <p className="animate_up">
                                                                Helping Clients Achieve Results Through Their People.
                                                            </p>
                                                            <ul className="animate_up">
                                                                <li>
                                                                    Reducing Redundancy
                                                                </li>
                                                                <li>
                                                                    Uncovering Hidden Resources
                                                                </li>
                                                                <li>
                                                                    Increasing Company’s Agility
                                                                </li>
                                                            </ul>
                                                            <div className="thm_btn animate_down">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two">Read
                                                                    More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image_content">
                                                        <div className="slider_image animate_right">
                                                            <img src="../assets/images/sliders/slider-7-1.png" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-7-bg.jpg)' }} />
                                            <div className="auto-container">
                                                <div className="contnet_d_flex">
                                                    <div className="text_box_content">
                                                        <div className="slider_content">
                                                            <h6 className="animate_up">
                                                                Our Vision to Grow Better
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                Excellence for
                                                                people in business
                                                            </h1>
                                                            <p className="animate_up">
                                                                Helping Clients Achieve Results Through Their People.
                                                            </p>
                                                            <ul className="animate_up">
                                                                <li>
                                                                    Reducing Redundancy
                                                                </li>
                                                                <li>
                                                                    Uncovering Hidden Resources
                                                                </li>
                                                                <li>
                                                                    Increasing Company’s Agility
                                                                </li>
                                                            </ul>
                                                            <div className="thm_btn animate_down">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two">Read
                                                                    More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image_content">
                                                        <div className="slider_image animate_right">
                                                            <img src="../assets/images/sliders/slider-7-1.png" className="img-fluid" alt="slider image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="auto-container pr_relative">
                                    <div className="contact_box_ban">
                                        <div className="icon_bx">
                                            <span className="icon-phone" />
                                        </div>
                                        <div className="conent_bx">
                                            <h6>General Enquires</h6>
                                            <p>Phone: +98 060 712 34 &amp; Email: sendmail@qetus.com</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*-slider end-*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*--slider--*/}
                            <section className="slider style_one slider_version_v4 nav_position_one">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-8-1.jpg)' }} />
                                            <div className="auto-container">
                                                <div className="contnet_d_flex">
                                                    <div className="text_box_content">
                                                        <div className="slider_content">
                                                            <h6>
                                                                Dining Sets &amp; Tables
                                                            </h6>
                                                            <h1>
                                                                Curate a picture <br />perfect Living Room
                                                            </h1>
                                                            <p>
                                                                A Living room isn't only a place where we spend the most time, <br /> but it also
                                                                sets the mood for the rest of the home
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <div className="thm_btn">
                                                                        <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
                                                                            Shop Now
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="tag_content">
                                                                        $218
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-8-2.jpg)' }} />
                                            <div className="auto-container">
                                                <div className="contnet_d_flex">
                                                    <div className="text_box_content">
                                                        <div className="slider_content">
                                                            <h6>
                                                                Modern &amp; Colonial
                                                            </h6>
                                                            <h1>
                                                                Right To The Latest <br /> Trends We Got Your Style
                                                            </h1>
                                                            <p>
                                                                Make a great first impression with a living room that reflects <br /> your
                                                                aesthetics and personality.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <div className="thm_btn">
                                                                        <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
                                                                            Shop Now
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="tag_content animated _bounceInUp">
                                                                        $167
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="slide-item-content">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-8-3.jpg)' }} />
                                            <div className="auto-container">
                                                <div className="contnet_d_flex">
                                                    <div className="text_box_content">
                                                        <div className="slider_content">
                                                            <h6>
                                                                Light &amp; Glamorous Metals
                                                            </h6>
                                                            <h1>
                                                                Decorate your Life <br /> with Full of Lights
                                                            </h1>
                                                            <p>
                                                                Your home is a reflection of you. Nail your aesthetic with products <br /> our
                                                                stylists love and recommend.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <div className="thm_btn">
                                                                        <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
                                                                            Select Options
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="tag_content">
                                                                        $324
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*--slider end--*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*- slider*/}
                            <section className="slider style_page_eleven  nav_position_one">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-11-1.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h6 className="animate_up">Business, Reduce Cost</h6>
                                                            <h1 className="animate_left"> Focus on your Business,
                                                                Reduce Cost andLimit Liability,
                                                                with HR Solutions </h1>
                                                            <div className="animate_down">
                                                                <a href="#" className="theme-btn one">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-11-2.jpg)' }}>
                                            </div>
                                            <div className="auto-container">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h6 className="animate_up"> Health Care Benefits </h6>
                                                            <h1 className="animate_right">
                                                                We offer health care benefits ,
                                                                planning, benefit programs, and ,
                                                                employee programs.,
                                                            </h1>
                                                            <div className="animate_down">
                                                                <a href="#" className="theme-btn one">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*-slider-end-*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*- slider*/}
                            <section className="slider style_page_twelve nav_position_one">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-12-1.jpg)' }}>
                                            </div>
                                            <div className="medium-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1 className="animate_up">Risk management <br />
                                                                and workplace audits to identify potential <br />
                                                                areas </h1>
                                                            <div className="animate_down theme_btn_all color_two">
                                                                <a href="#" className="theme-btn one">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="slider_image animate_left">
                                                            <img src="../assets/images/sliders/slider-12-i-1.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-12-1.jpg)' }}>
                                            </div>
                                            <div className="medium-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h1 className="animate_left">Risk management <br />
                                                                and workplace audits to identify potential <br />
                                                                areas </h1>
                                                            <div className="animate_right theme_btn_all color_two">
                                                                <a href="#" className="theme-btn one">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="slider_image animate_right">
                                                            <img src="../assets/images/sliders/slider-12-i-2.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*-slider-end-*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*- slider*/}
                            <section className="slider style_page_thirteen nav_position_one position-relative">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-home-13-1.jpg)' }}>
                                            </div>
                                            <div className="medium-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 m-auto">
                                                        <div className="slider_content">
                                                            <h6 className="animate_left">
                                                                Strategy &amp; Planning
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                The Fastest
                                                                Way to Achieve Success
                                                            </h1>
                                                            <p className="animate_right pd_bottom_40">
                                                                Who are so beguiled and demoralized the charms Long established fact
                                                                <br /> that a
                                                                reader will be distracted
                                                            </p>
                                                            <ul className="animate_down">
                                                                <li className="theme_btn_all color_two">
                                                                    <a href="#" className="theme-btn one">Our Service</a>
                                                                </li>
                                                                <li className="theme_btn_all ">
                                                                    <a href="#" className="theme-btn one color_white">Projects</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-home-13-2.jpg)' }}>
                                            </div>
                                            <div className="medium-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h6 className="animate_left">
                                                                Solutions for your business
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                Performance and Productivity
                                                            </h1>
                                                            <p className="animate_right pd_bottom_40">
                                                                Who are so beguiled and demoralized the charms Long established fact
                                                                <br /> that a
                                                                reader will be distracted
                                                            </p>
                                                            <ul className="animate_down">
                                                                <li className="theme_btn_all">
                                                                    <a href="#" className="theme-btn one">Our Service</a>
                                                                </li>
                                                                <li className="theme_btn_all">
                                                                    <a href="#" className="theme-btn one color_white">Projects</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-home-13-2.jpg)' }}>
                                            </div>
                                            <div className="medium-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
                                                        <div className="slider_content">
                                                            <h6 className="animate_left">
                                                                Solutions for your business
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                Searching HR software for your business?
                                                            </h1>
                                                            <p className="animate_right pd_bottom_40">
                                                                Who are so beguiled and demoralized the charms Long established fact
                                                                <br /> that a
                                                                reader will be distracted
                                                            </p>
                                                            <ul className="animate_down">
                                                                <li className="theme_btn_all color_two">
                                                                    <a href="#" className="theme-btn one">Our Service</a>
                                                                </li>
                                                                <li className="theme_btn_all">
                                                                    <a href="#" className="theme-btn one color_white">Projects</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="position_absolute curve_shape_bottom_1 z_99">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
                                        <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z">
                                        </path>
                                        <path className="elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z">
                                        </path>
                                        <path className="elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z">
                                        </path>
                                        <path className="elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z">
                                        </path>
                                        <path className="elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z">
                                        </path>
                                        <path className="elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z">
                                        </path>
                                        <path className="elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z">
                                        </path>
                                        <path className="elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z">
                                        </path>
                                        <path className="elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z">
                                        </path>
                                    </svg>
                                </div>
                            </section>
                            {/*-slider-end-*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*- slider*/}
                            <section className="slider style_page_fourteen nav_position_one position-relative">
                                <Swiper {...swiperOptions} className="banner_carousel owl_nav_block owl_dots_none theme_carousel ">
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-home-14-1.jpg)' }}>
                                            </div>
                                            <div className="medium-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 m-auto">
                                                        <div className="slider_content">
                                                            <h6 className="animate_left">
                                                                Strategy &amp; Planning
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                Skilled Industry
                                                                Professionals
                                                            </h1>
                                                            <p className="animate_right pd_bottom_40">
                                                                Who are so beguiled and demoralized the charms Long established fact
                                                                <br /> that a reader will be distracted
                                                            </p>
                                                            <ul className="animate_down">
                                                                <li className="theme_btn_all">
                                                                    <a href="#" className="theme-btn one">About Us </a>
                                                                </li>
                                                                <li className="theme_btn_all ">
                                                                    <a href="#" className="theme-btn one color_white_1">Our Service
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_left">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-home-14-2.jpg)' }}>
                                            </div>
                                            <div className="medium-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="slider_content">
                                                            <h6 className="animate_left">
                                                                Solutions for your business
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                Performance and Productivity
                                                            </h1>
                                                            <p className="animate_right pd_bottom_40">
                                                                Who are so beguiled and demoralized the charms Long established fact
                                                                <br /> that a reader will be distracted
                                                            </p>
                                                            <ul className="animate_down">
                                                                <li className="theme_btn_all">
                                                                    <a href="#" className="theme-btn one">Our Service</a>
                                                                </li>
                                                                <li className="theme_btn_all">
                                                                    <a href="#" className="theme-btn one color_white_1">Projects</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item-content">
                                        <div className="slide-item content_center">
                                            <div className="image-layer" style={{ backgroundImage: 'url(../assets/images/sliders/slider-home-14-3.jpg)' }}>
                                            </div>
                                            <div className="medium-container">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 m-auto">
                                                        <div className="slider_content">
                                                            <h6 className="animate_left">
                                                                Solutions for your business
                                                            </h6>
                                                            <h1 className="animate_up">
                                                                Excellence for
                                                                people in business
                                                            </h1>
                                                            <p className="animate_right pd_bottom_40">
                                                                Who are so beguiled and demoralized the charms Long established fact
                                                                <br /> that a reader will be distracted
                                                            </p>
                                                            <ul className="animate_down">
                                                                <li className="theme_btn_all">
                                                                    <a href="#" className="theme-btn one">Our Service</a>
                                                                </li>
                                                                <li className="theme_btn_all">
                                                                    <a href="#" className="theme-btn one color_white_1">Projects</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                            {/*-slider-end-*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
