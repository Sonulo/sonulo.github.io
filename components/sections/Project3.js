import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Project3() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 5,
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }
    };
    return (
        <>
            <section className="project-section bg_dark_3">
                {/*===============spacing==============*/}
                <div className="pd_top_85" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 col-sm-12 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="title_all_box style_three light_color">
                                <div className="title_sections three left">
                                    <div className="before_title">Incredibly</div>
                                    <h2>Effective Case Studies</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="theme_btn_all color_one text-md-end">
                                <Link href="#" className="theme-btn five">View More <i className="icon-right-arrow" /></Link >
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_35" />
                        {/*===============spacing==============*/}
                    </div>
                </div>
                <div className="container-fluid pd_zero">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project_caro_section  style_two light_color">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                        Contract Manufacturer</Link ></h2>
                                                    <p>Pre sale</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-4-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                            Contract Manufacturer</Link ></h2>
                                                        <p className="short_desc">STHRM, Inc. was hired to evaluate the company’s human
                                                            resources department and determine if the…</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Essential Steps to Writing Job
                                                        Description</Link ></h2>
                                                    <p>Human Resources</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Essential Steps to Writing
                                                            Job Description</Link ></h2>
                                                        <p className="short_desc">Power of choice untrammelled when nothing prevents our
                                                            being able to do.</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Complex Dismissal for a Small
                                                        Company</Link ></h2>
                                                    <p>Coaching</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Complex Dismissal for a Small
                                                            Company</Link ></h2>
                                                        <p className="short_desc">Beguiled and demoralized charms of pleasure of the
                                                            moment so blinded.</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Shared Time Human Resources
                                                        Management</Link ></h2>
                                                    <p>Recruiting</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-6-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Shared Time Human Resources
                                                            Management</Link ></h2>
                                                        <p className="short_desc">Shared Time Human Resources Management, Inc. is a
                                                            value-oriented resource for companies in need of…</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Six Essential Steps To Writing
                                                        Successful Job</Link ></h2>
                                                    <p>Values</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-5-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Six Essential Steps To
                                                            Writing Successful Job</Link ></h2>
                                                        <p className="short_desc">In its purest form, a position description indicates the
                                                            work to be performed by the…</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                        Contract Manufacturer</Link ></h2>
                                                    <p>Pre sale</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-4-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                            Contract Manufacturer</Link ></h2>
                                                        <p className="short_desc">STHRM, Inc. was hired to evaluate the company’s human
                                                            resources department and determine if the…</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Essential Steps to Writing Job
                                                        Description</Link ></h2>
                                                    <p>Human Resources</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Essential Steps to Writing
                                                            Job Description</Link ></h2>
                                                        <p className="short_desc">Power of choice untrammelled when nothing prevents our
                                                            being able to do.</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Complex Dismissal for a Small
                                                        Company</Link ></h2>
                                                    <p>Coaching</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Complex Dismissal for a Small
                                                            Company</Link ></h2>
                                                        <p className="short_desc">Beguiled and demoralized charms of pleasure of the
                                                            moment so blinded.</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Shared Time Human Resources
                                                        Management</Link ></h2>
                                                    <p>Recruiting</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-6-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Shared Time Human Resources
                                                            Management</Link ></h2>
                                                        <p className="short_desc">Shared Time Human Resources Management, Inc. is a
                                                            value-oriented resource for companies in need of…</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Six Essential Steps To Writing
                                                        Successful Job</Link ></h2>
                                                    <p>Values</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-5-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Six Essential Steps To
                                                            Writing Successful Job</Link ></h2>
                                                        <p className="short_desc">In its purest form, a position description indicates the
                                                            work to be performed by the…</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_seven">
                                                <div className="image_box">
                                                    <img src="/assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="content_box ">
                                                    <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                        Contract Manufacturer</Link ></h2>
                                                    <p>Pre sale</p>
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-4-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="overlay ">
                                                    <div className="text ">
                                                        <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                            Contract Manufacturer</Link ></h2>
                                                        <p className="short_desc">STHRM, Inc. was hired to evaluate the company’s human
                                                            resources department and determine if the…</p>
                                                        <Link href="#" className="read_more tp_five ">Read More</Link >
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

        </>
    )
}
