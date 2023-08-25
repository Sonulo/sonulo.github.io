import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Project6() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        }
    };
    return (
        <>
            <section className="project-section bg_op_1" style={{ background: 'url(/assets/images/projects/project-background-6-min.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_85" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xl-8 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                            <div className="title_all_box style_one  light_color">
                                <div className="title_sections left">
                                    <div className="before_title">
                                        Incredibly
                                    </div>
                                    <h2>Effective Case Studies</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="theme_btn_all color_one text-md-end">
                                <Link href="#" className="theme-btn one">More Works</Link >
                                {/*===============spacing==============*/}
                                <div className="pd_top_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_top_20" />
                        {/*===============spacing==============*/}
                    </div>
                </div>
                <div className="medium-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project_caro_section carousel style_three ">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img loading="lazy" width={999} height={665} src="/assets/images/projects/project-1-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Leadership</p>
                                                    <h2 className="title_pro"><Link href="#" >Company Values &amp; The
                                                        Relationship</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="/assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Coaching</p>
                                                    <h2 className="title_pro"><Link href="#" >Complex Dismissal for a Small
                                                        Company</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={742} height={495} src="/assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Human Resources</p>
                                                    <h2 className="title_pro"><Link href="#" >Essential Steps to Writing
                                                        Job Description</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img loading="lazy" width={999} height={665} src="/assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Leadership</p>
                                                    <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                        Contract Manufacturer</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="/assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Coaching</p>
                                                    <h2 className="title_pro"><Link href="#" >Six Essential Steps To
                                                        Writing Successful Job</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img loading="lazy" width={999} height={665} src="/assets/images/projects/project-1-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Leadership</p>
                                                    <h2 className="title_pro"><Link href="#" >Company Values &amp; The
                                                        Relationship</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="/assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Coaching</p>
                                                    <h2 className="title_pro"><Link href="#" >Complex Dismissal for a Small
                                                        Company</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={742} height={495} src="/assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Human Resources</p>
                                                    <h2 className="title_pro"><Link href="#" >Essential Steps to Writing
                                                        Job Description</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img loading="lazy" width={999} height={665} src="/assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Leadership</p>
                                                    <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                        Contract Manufacturer</Link ></h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="/assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <Link href="/assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></Link >
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <p>Coaching</p>
                                                    <h2 className="title_pro"><Link href="#" >Six Essential Steps To
                                                        Writing Successful Job</Link ></h2>
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
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
