import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Project1() {
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
            <section className="project-carousel" id="projects">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="title_all_box style_one text-center dark_color">
                            <div className="title_sections">
                                <div className="before_title">Incredibly</div>
                                <h2>Effective Case Studies</h2>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_10" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project_caro_section carousel style_one ">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        {/*--swiper warapper start--*/}
                                        <SwiperSlide>
                                            <div className="project_post style_one mr_top_20">
                                                <div className="image">
                                                    <img src="/assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="project_caro_content">
                                                    <div className="left_side">
                                                        <p>Recruiting</p>
                                                        <h2 className="title_pro"><Link href="/project-details">Shared
                                                            Time Human
                                                            Resources Management</Link ></h2>
                                                    </div>
                                                    <div className="right_side">
                                                        <Link href="/project-details"><i className="icon-right-arrow" /></Link >
                                                        <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_one mr_top_20">
                                                <div className="image">
                                                    <img src="/assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="project_caro_content">
                                                    <div className="left_side">
                                                        <p>Values</p>
                                                        <h2 className="title_pro"><Link href="/project-details">Six
                                                            Essential Steps To
                                                            Writing Successful Job</Link ></h2>
                                                    </div>
                                                    <div className="right_side">
                                                        <Link href="/project-details"><i className="icon-right-arrow" /></Link >
                                                        <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_one mr_top_20">
                                                <div className="image">
                                                    <img src="/assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="project_caro_content">
                                                    <div className="left_side">
                                                        <p>Pre sale</p>
                                                        <h2 className="title_pro"><Link href="/project-details">Time HR
                                                            Prepares
                                                            Plastic Contract Manufacturer</Link ></h2>
                                                    </div>
                                                    <div className="right_side">
                                                        <Link href="/project-details"><i className="icon-right-arrow" /></Link >
                                                        <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_one mr_top_20">
                                                <div className="image">
                                                    <img src="/assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="project_caro_content">
                                                    <div className="left_side">
                                                        <p>Human Resources</p>
                                                        <h2 className="title_pro"><Link href="/project-details">Essential Steps to
                                                            Writing Job Description</Link ></h2>
                                                    </div>
                                                    <div className="right_side">
                                                        <Link href="/project-details"><i className="icon-right-arrow" /></Link >
                                                        <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_one mr_top_20">
                                                <div className="image">
                                                    <img src="/assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="project_caro_content">
                                                    <div className="left_side">
                                                        <p>Recruiting</p>
                                                        <h2 className="title_pro"><Link href="/project-details">Shared
                                                            Time Human
                                                            Resources Management</Link ></h2>
                                                    </div>
                                                    <div className="right_side">
                                                        <Link href="/project-details"><i className="icon-right-arrow" /></Link >
                                                        <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_one mr_top_20">
                                                <div className="image">
                                                    <img src="/assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="project_caro_content">
                                                    <div className="left_side">
                                                        <p>Values</p>
                                                        <h2 className="title_pro"><Link href="/project-details">Six
                                                            Essential Steps To
                                                            Writing Successful Job</Link ></h2>
                                                    </div>
                                                    <div className="right_side">
                                                        <Link href="/project-details"><i className="icon-right-arrow" /></Link >
                                                        <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_one mr_top_20">
                                                <div className="image">
                                                    <img src="/assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="project_caro_content">
                                                    <div className="left_side">
                                                        <p>Pre sale</p>
                                                        <h2 className="title_pro"><Link href="/project-details">Time HR
                                                            Prepares
                                                            Plastic Contract Manufacturer</Link ></h2>
                                                    </div>
                                                    <div className="right_side">
                                                        <Link href="/project-details"><i className="icon-right-arrow" /></Link >
                                                        <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_one mr_top_20">
                                                <div className="image">
                                                    <img src="/assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="project_caro_content">
                                                    <div className="left_side">
                                                        <p>Human Resources</p>
                                                        <h2 className="title_pro"><Link href="/project-details">Essential Steps to
                                                            Writing Job Description</Link ></h2>
                                                    </div>
                                                    <div className="right_side">
                                                        <Link href="/project-details"><i className="icon-right-arrow" /></Link >
                                                        <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link >
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
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
