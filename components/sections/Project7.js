import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Project7() {
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
                slidesPerView: 2,
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
            <section className="project-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="title_all_box style_one">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Incredibly
                                    </div>
                                    <h2 className="title">Effective Case Studies</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="theme_btn_all color_one text-md-end">
                                <Link href="#" className="theme-btn one">More Works</Link >
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_30" />
                        {/*===============spacing==============*/}
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="project_caro_section carousel style_four ">
                        <div className="swiper-container">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="project_post style_one  style_four_caro">
                                        <div className="image">
                                            <img width={742} height={495} src="/assets/images/projects/project-3-img.jpg" className="attachment-creote_project_caro_image_style_one size-creote_project_caro_image_style_one" alt="img" />
                                        </div>
                                        <div className="project_caro_content">
                                            <div className="left_side">
                                                <p>Human Resources</p>
                                                <h2 className="title_pro"><Link href="#" >Essential Steps to Writing
                                                    Job Description</Link ></h2>
                                            </div>
                                            <div className="right_side">
                                                <Link href="#"><i className="icon-right-arrow" /></Link >
                                                <Link href="#" className="two"><i className="icon-right-arrow" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project_post style_one  style_four_caro">
                                        <div className="image">
                                            <img width={746} height={497} src="/assets/images/projects/project-2-img.jpg" className="attachment-creote_project_caro_image_style_one size-creote_project_caro_image_style_one" alt="img" />
                                        </div>
                                        <div className="project_caro_content">
                                            <div className="left_side">
                                                <p>Coaching</p>
                                                <h2 className="title_pro"><Link href="#" >Complex Dismissal for a Small
                                                    Company</Link ></h2>
                                            </div>
                                            <div className="right_side">
                                                <Link href="#"><i className="icon-right-arrow" /></Link >
                                                <Link href="#" className="two"><i className="icon-right-arrow" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project_post style_one  style_four_caro">
                                        <div className="image">
                                            <img width={731} height={488} src="/assets/images/projects/project-6-img.jpg" className="attachment-creote_project_caro_image_style_one size-creote_project_caro_image_style_one" alt="img" />
                                        </div>
                                        <div className="project_caro_content">
                                            <div className="left_side">
                                                <p>Recruiting</p>
                                                <h2 className="title_pro"><Link href="#" >Shared Time Human Resources
                                                    Management</Link ></h2>
                                            </div>
                                            <div className="right_side">
                                                <Link href="#"><i className="icon-right-arrow" /></Link >
                                                <Link href="#" className="two"><i className="icon-right-arrow" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project_post style_one  style_four_caro">
                                        <div className="image">
                                            <img width={887} height={591} src="/assets/images/projects/project-5-img.jpg" className="attachment-creote_project_caro_image_style_one size-creote_project_caro_image_style_one" alt="img" />
                                        </div>
                                        <div className="project_caro_content">
                                            <div className="left_side">
                                                <p>Values</p>
                                                <h2 className="title_pro"><Link href="#" >Six Essential Steps To
                                                    Writing Successful Job</Link ></h2>
                                            </div>
                                            <div className="right_side">
                                                <Link href="#"><i className="icon-right-arrow" /></Link >
                                                <Link href="#" className="two"><i className="icon-right-arrow" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project_post style_one  style_four_caro">
                                        <div className="image">
                                            <img width={827} height={465} src="/assets/images/projects/project-4-img.jpg" className="attachment-creote_project_caro_image_style_one size-creote_project_caro_image_style_one" alt="img" />
                                        </div>
                                        <div className="project_caro_content">
                                            <div className="left_side">
                                                <p>Pre sale</p>
                                                <h2 className="title_pro"><Link href="#" >Time HR Prepares Plastic
                                                    Contract Manufacturer</Link ></h2>
                                            </div>
                                            <div className="right_side">
                                                <Link href="#"><i className="icon-right-arrow" /></Link >
                                                <Link href="#" className="two"><i className="icon-right-arrow" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project_post style_one  style_four_caro">
                                        <div className="image">
                                            <img width={742} height={495} src="/assets/images/projects/project-3-img.jpg" className="attachment-creote_project_caro_image_style_one size-creote_project_caro_image_style_one" alt="img" />
                                        </div>
                                        <div className="project_caro_content">
                                            <div className="left_side">
                                                <p>Human Resources</p>
                                                <h2 className="title_pro"><Link href="#" >Essential Steps to Writing
                                                    Job Description</Link ></h2>
                                            </div>
                                            <div className="right_side">
                                                <Link href="#"><i className="icon-right-arrow" /></Link >
                                                <Link href="#" className="two"><i className="icon-right-arrow" /></Link >
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
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
