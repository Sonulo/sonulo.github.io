import Layout from '@/components/layout/Layout';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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

export default function ElementCarousel() {
    return (
        <>
            <Layout breadcrumbTitle="Carousel">
                <div className="full_width_box">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <section className="project-carousel" id="projects">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project_caro_section carousel style_one ">
                                        <div className="swiper-container">
                                            <Swiper {...swiperOptions}>
                                                {/*--swiper warapper start--*/}
                                                <SwiperSlide>
                                                    <div className="project_post style_one mr_top_20">
                                                        <div className="image">
                                                            <img src="../assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <div className="left_side">
                                                                <p>Recruiting</p>
                                                                <h2 className="title_pro"><a href="project-details.html">Shared Time Human Resources Management</a></h2>
                                                            </div>
                                                            <div className="right_side">
                                                                <a href="project-details.html"><i className="icon-right-arrow" /></a>
                                                                <a href="project-details.html" className="two"><i className="icon-right-arrow" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_one mr_top_20">
                                                        <div className="image">
                                                            <img src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <div className="left_side">
                                                                <p>Values</p>
                                                                <h2 className="title_pro"><a href="project-details.html">Six Essential Steps To Writing Successful Job</a></h2>
                                                            </div>
                                                            <div className="right_side">
                                                                <a href="project-details.html"><i className="icon-right-arrow" /></a>
                                                                <a href="project-details.html" className="two"><i className="icon-right-arrow" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_one mr_top_20">
                                                        <div className="image">
                                                            <img src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <div className="left_side">
                                                                <p>Pre sale</p>
                                                                <h2 className="title_pro"><a href="project-details.html">Time HR Prepares Plastic Contract Manufacturer</a></h2>
                                                            </div>
                                                            <div className="right_side">
                                                                <a href="project-details.html"><i className="icon-right-arrow" /></a>
                                                                <a href="project-details.html" className="two"><i className="icon-right-arrow" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_one mr_top_20">
                                                        <div className="image">
                                                            <img src="../assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <div className="left_side">
                                                                <p>Human Resources</p>
                                                                <h2 className="title_pro"><a href="project-details.html">Essential Steps to Writing Job Description</a></h2>
                                                            </div>
                                                            <div className="right_side">
                                                                <a href="project-details.html"><i className="icon-right-arrow" /></a>
                                                                <a href="project-details.html" className="two"><i className="icon-right-arrow" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_one mr_top_20">
                                                        <div className="image">
                                                            <img src="../assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <div className="left_side">
                                                                <p>Recruiting</p>
                                                                <h2 className="title_pro"><a href="project-details.html">Shared Time Human Resources Management</a></h2>
                                                            </div>
                                                            <div className="right_side">
                                                                <a href="project-details.html"><i className="icon-right-arrow" /></a>
                                                                <a href="project-details.html" className="two"><i className="icon-right-arrow" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_one mr_top_20">
                                                        <div className="image">
                                                            <img src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <div className="left_side">
                                                                <p>Values</p>
                                                                <h2 className="title_pro"><a href="project-details.html">Six Essential Steps To Writing Successful Job</a></h2>
                                                            </div>
                                                            <div className="right_side">
                                                                <a href="project-details.html"><i className="icon-right-arrow" /></a>
                                                                <a href="project-details.html" className="two"><i className="icon-right-arrow" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_one mr_top_20">
                                                        <div className="image">
                                                            <img src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <div className="left_side">
                                                                <p>Pre sale</p>
                                                                <h2 className="title_pro"><a href="project-details.html">Time HR Prepares Plastic Contract Manufacturer</a></h2>
                                                            </div>
                                                            <div className="right_side">
                                                                <a href="project-details.html"><i className="icon-right-arrow" /></a>
                                                                <a href="project-details.html" className="two"><i className="icon-right-arrow" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_one mr_top_20">
                                                        <div className="image">
                                                            <img src="../assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <div className="left_side">
                                                                <p>Human Resources</p>
                                                                <h2 className="title_pro"><a href="project-details.html">Essential Steps to Writing Job Description</a></h2>
                                                            </div>
                                                            <div className="right_side">
                                                                <a href="project-details.html"><i className="icon-right-arrow" /></a>
                                                                <a href="project-details.html" className="two"><i className="icon-right-arrow" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                {/*--swiper warapper end--*/}
                                            </Swiper>
                                            {/*--swiper-pagination start--*/}
                                            <div className="p_pagination">
                                                <div className="swiper-pagination">
                                                </div>
                                            </div>
                                            {/*--swiper-pagination end--*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                    <section className="project-section bg_dark_3">
                        {/*===============spacing==============*/}
                        <div className="pd_top_85" />
                        {/*===============spacing==============*/}
                        <div className="container-fluid pd_zero">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project_caro_section  style_two light_color">
                                        <div className="swiper-container">
                                            <Swiper {...swiperOptions}>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Time HR Prepares Plastic
                                                                Contract Manufacturer</a></h2>
                                                            <p>Pre sale</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-4-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Time HR Prepares Plastic
                                                                    Contract Manufacturer</a></h2>
                                                                <p className="short_desc">STHRM, Inc. was hired to evaluate the company’s human
                                                                    resources department and determine if the…</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Essential Steps to Writing Job
                                                                Description</a></h2>
                                                            <p>Human Resources</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Essential Steps to Writing
                                                                    Job Description</a></h2>
                                                                <p className="short_desc">Power of choice untrammelled when nothing prevents our
                                                                    being able to do.</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Complex Dismissal for a Small
                                                                Company</a></h2>
                                                            <p>Coaching</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Complex Dismissal for a Small
                                                                    Company</a></h2>
                                                                <p className="short_desc">Beguiled and demoralized charms of pleasure of the
                                                                    moment so blinded.</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Shared Time Human Resources
                                                                Management</a></h2>
                                                            <p>Recruiting</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-6-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Shared Time Human Resources
                                                                    Management</a></h2>
                                                                <p className="short_desc">Shared Time Human Resources Management, Inc. is a
                                                                    value-oriented resource for companies in need of…</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Six Essential Steps To Writing
                                                                Successful Job</a></h2>
                                                            <p>Values</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-5-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Six Essential Steps To
                                                                    Writing Successful Job</a></h2>
                                                                <p className="short_desc">In its purest form, a position description indicates the
                                                                    work to be performed by the…</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Time HR Prepares Plastic
                                                                Contract Manufacturer</a></h2>
                                                            <p>Pre sale</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-4-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Time HR Prepares Plastic
                                                                    Contract Manufacturer</a></h2>
                                                                <p className="short_desc">STHRM, Inc. was hired to evaluate the company’s human
                                                                    resources department and determine if the…</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Essential Steps to Writing Job
                                                                Description</a></h2>
                                                            <p>Human Resources</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Essential Steps to Writing
                                                                    Job Description</a></h2>
                                                                <p className="short_desc">Power of choice untrammelled when nothing prevents our
                                                                    being able to do.</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Complex Dismissal for a Small
                                                                Company</a></h2>
                                                            <p>Coaching</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Complex Dismissal for a Small
                                                                    Company</a></h2>
                                                                <p className="short_desc">Beguiled and demoralized charms of pleasure of the
                                                                    moment so blinded.</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Shared Time Human Resources
                                                                Management</a></h2>
                                                            <p>Recruiting</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-6-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Shared Time Human Resources
                                                                    Management</a></h2>
                                                                <p className="short_desc">Shared Time Human Resources Management, Inc. is a
                                                                    value-oriented resource for companies in need of…</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Six Essential Steps To Writing
                                                                Successful Job</a></h2>
                                                            <p>Values</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-5-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Six Essential Steps To
                                                                    Writing Successful Job</a></h2>
                                                                <p className="short_desc">In its purest form, a position description indicates the
                                                                    work to be performed by the…</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_seven">
                                                        <div className="image_box">
                                                            <img src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="content_box ">
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Time HR Prepares Plastic
                                                                Contract Manufacturer</a></h2>
                                                            <p>Pre sale</p>
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-4-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="overlay ">
                                                            <div className="text ">
                                                                <h2 className="title_pro"><a href="#" rel="bookmark">Time HR Prepares Plastic
                                                                    Contract Manufacturer</a></h2>
                                                                <p className="short_desc">STHRM, Inc. was hired to evaluate the company’s human
                                                                    resources department and determine if the…</p>
                                                                <a href="#" className="read_more tp_five ">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="p_pagination">
                                                <div className="swiper-pagination" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_65" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                    <section className="project-section bg_op_1" style={{ background: 'url(assets/images/projects/project-background-6-min.jpg)' }}>
                        <div className="medium-container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project_caro_section carousel style_three ">
                                        <div className="swiper-container">
                                            <Swiper {...swiperOptions}>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img loading="lazy" width={999} height={665} src="../assets/images/projects/project-1-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Leadership</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Company Values &amp; The
                                                                Relationship</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img width={746} height={497} src="../assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Coaching</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Complex Dismissal for a Small
                                                                Company</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img width={742} height={495} src="../assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Human Resources</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Essential Steps to Writing
                                                                Job Description</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img loading="lazy" width={999} height={665} src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Leadership</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Time HR Prepares Plastic
                                                                Contract Manufacturer</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img width={746} height={497} src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Coaching</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Six Essential Steps To
                                                                Writing Successful Job</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img loading="lazy" width={999} height={665} src="../assets/images/projects/project-1-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Leadership</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Company Values &amp; The
                                                                Relationship</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img width={746} height={497} src="../assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Coaching</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Complex Dismissal for a Small
                                                                Company</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img width={742} height={495} src="../assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Human Resources</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Essential Steps to Writing
                                                                Job Description</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img loading="lazy" width={999} height={665} src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Leadership</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Time HR Prepares Plastic
                                                                Contract Manufacturer</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project_post style_nine">
                                                        <div className="image">
                                                            <img width={746} height={497} src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                            <div className="image_zoom_box ">
                                                                <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="project_caro_content">
                                                            <p>Coaching</p>
                                                            <h2 className="title_pro"><a href="#" rel="bookmark">Six Essential Steps To
                                                                Writing Successful Job</a></h2>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="p_pagination">
                                                <div className="pswiper-pagination" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_80" />
                    {/*===============spacing==============*/}
                </div>
            </Layout>
        </>
    )
}
