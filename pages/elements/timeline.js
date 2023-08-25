import Layout from '@/components/layout/Layout';

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
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

export default function ElementTimeline() {
    return (
        <>
            <Layout breadcrumbTitle="Timeline">
                <div className="no-container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <section className="timeline-section">
                                <div className="row">
                                    <div className="col-lg-12 pd_zero">
                                        <div className="time_line_section style_one">
                                            <div {...swiperOptions} className="swiper-container">
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
                                                                        <a href="#" target="_blank" rel="nofollow">Company Started</a>
                                                                    </h2>
                                                                    <p>Expound the actual teachings of the great explorer the truth the
                                                                        masters
                                                                        builder of human happiness one rejects.</p>
                                                                </div>
                                                                <div className="year">
                                                                    1998
                                                                </div>
                                                                <div className="image">
                                                                    <img src="../assets/images/projects/project-3-img.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">New Milestone</a>
                                                                    </h2>
                                                                    <p>No one rejects dislikes or avoids pleasures itself because it is
                                                                        pleasures,
                                                                        but because those who pursue pleasure rationally.</p>
                                                                </div>
                                                                <div className="year">
                                                                    2000
                                                                </div>
                                                                <div className="image">
                                                                    <img src="../assets/images/projects/project-5-img.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">
                                                                            First Award </a>
                                                                    </h2>
                                                                    <p> Undertakes laborious physical exercise except to obtain some
                                                                        advantage from
                                                                        it
                                                                        pursue pleasure rationally.
                                                                    </p>
                                                                </div>
                                                                <div className="year">
                                                                    2001
                                                                </div>
                                                                <div className="image">
                                                                    <img src="../assets/images/service-image-4.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">
                                                                            100 Employees </a>
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
                                                                    <img src="../assets/images/blog/blog-image-8.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">
                                                                            Company Started </a>
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
                                                                    <img src="../assets/images/projects/project-3-img.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">
                                                                            New Milestone </a>
                                                                    </h2>
                                                                    <p> No one rejects dislikes or avoids pleasures itself because it is
                                                                        pleasures,
                                                                        but because those who
                                                                        pursue pleasure rationally.
                                                                    </p>
                                                                </div>
                                                                <div className="year">
                                                                    2000
                                                                </div>
                                                                <div className="image">
                                                                    <img src="../assets/images/projects/project-5-img.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">Company Started</a>
                                                                    </h2>
                                                                    <p>Expound the actual teachings of the great explorer the truth the
                                                                        masters
                                                                        builder of human happiness one rejects.</p>
                                                                </div>
                                                                <div className="year">
                                                                    1998
                                                                </div>
                                                                <div className="image">
                                                                    <img src="../assets/images/projects/project-3-img.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">New Milestone</a>
                                                                    </h2>
                                                                    <p>No one rejects dislikes or avoids pleasures itself because it is
                                                                        pleasures,
                                                                        but because those who pursue pleasure rationally.</p>
                                                                </div>
                                                                <div className="year">
                                                                    2000
                                                                </div>
                                                                <div className="image">
                                                                    <img src="../assets/images/projects/project-5-img.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">
                                                                            First Award </a>
                                                                    </h2>
                                                                    <p> Undertakes laborious physical exercise except to obtain some
                                                                        advantage from
                                                                        it
                                                                        pursue pleasure rationally.
                                                                    </p>
                                                                </div>
                                                                <div className="year">
                                                                    2001
                                                                </div>
                                                                <div className="image">
                                                                    <img src="../assets/images/service-image-4.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">
                                                                            100 Employees </a>
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
                                                                    <img src="../assets/images/blog/blog-image-8.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">
                                                                            Company Started </a>
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
                                                                    <img src="../assets/images/projects/project-3-img.jpg" alt="img" />
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
                                                                        <a href="#" target="_blank" rel="nofollow">
                                                                            New Milestone </a>
                                                                    </h2>
                                                                    <p> No one rejects dislikes or avoids pleasures itself because it is
                                                                        pleasures,
                                                                        but because those who
                                                                        pursue pleasure rationally.
                                                                    </p>
                                                                </div>
                                                                <div className="year">
                                                                    2000
                                                                </div>
                                                                <div className="image">
                                                                    <img src="../assets/images/projects/project-5-img.jpg" alt="img" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*-timeline--*/}
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <section className="timeline-section bg_dark_3">
                                {/*===============spacing==============*/}
                                <div className="pd_top_80" />
                                {/*===============spacing==============*/}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="title_all_box style_five text-center light_color">
                                                <div className="title_sections five">
                                                    <div className="before_title">Evaluation of</div>
                                                    <h2>Our Company &amp; Partners</h2>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_20" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="time_line_section style_two">
                                                <div className="swiper-container">
                                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                                        <SwiperSlide>
                                                            <div className="event_box type_two">
                                                                <div className="date_box ">
                                                                    <h6>17 August 2001</h6>
                                                                </div>
                                                                <div className="content_box ">
                                                                    <div className="image">
                                                                        <img src="../assets/images/service-image-4.jpg" alt="img" />
                                                                    </div>
                                                                    <div className="c_box">
                                                                        <h2>
                                                                            <a href="#" target="_blank" rel="nofollow">
                                                                                First Award </a>
                                                                        </h2>
                                                                        <p> Undertakes laborious physical exercise except to obtain some
                                                                            advantage
                                                                            from it
                                                                            pursue pleasure rationally.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="event_box type_two">
                                                                <div className="date_box ">
                                                                    <h6>12 September 2007</h6>
                                                                </div>
                                                                <div className="content_box ">
                                                                    <div className="image">
                                                                        <img src="../assets/images/blog/blog-image-8.jpg" alt="img" />
                                                                    </div>
                                                                    <div className="c_box">
                                                                        <h2>
                                                                            <a href="#" target="_blank" rel="nofollow">100 Employees</a>
                                                                        </h2>
                                                                        <p>Expound the actual teachings of the great explorer the truth
                                                                            the masters
                                                                            builder of human happiness</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="event_box type_two">
                                                                <div className="date_box ">
                                                                    <h6>04 June 2000</h6>
                                                                </div>
                                                                <div className="content_box ">
                                                                    <div className="image">
                                                                        <img src="../assets/images/projects/project-5-img.jpg" alt="img" />
                                                                    </div>
                                                                    <div className="c_box">
                                                                        <h2>
                                                                            <a href="#" target="_blank" rel="nofollow">New Milestone</a>
                                                                        </h2>
                                                                        <p>No one rejects dislikes or avoids pleasures itself because it
                                                                            is pleasures,
                                                                            but who pursue rationally.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="event_box type_two">
                                                                <div className="date_box ">
                                                                    <h6>21 January 2008</h6>
                                                                </div>
                                                                <div className="content_box ">
                                                                    <div className="image">
                                                                        <img src="../assets/images/projects/project-3-img.jpg" alt="img" />
                                                                    </div>
                                                                    <div className="c_box">
                                                                        <h2>
                                                                            <a href="#" target="_blank" rel="nofollow">Company Started</a>
                                                                        </h2>
                                                                        <p>Expound the actual teachings of the great explorer the truth
                                                                            the masters
                                                                            builder of human happiness</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="event_box type_two">
                                                                <div className="date_box ">
                                                                    <h6>17 August 2001</h6>
                                                                </div>
                                                                <div className="content_box ">
                                                                    <div className="image">
                                                                        <img src="../assets/images/service-image-4.jpg" alt="img" />
                                                                    </div>
                                                                    <div className="c_box">
                                                                        <h2>
                                                                            <a href="#" target="_blank" rel="nofollow">
                                                                                First Award </a>
                                                                        </h2>
                                                                        <p> Undertakes laborious physical exercise except to obtain some
                                                                            advantage
                                                                            from it
                                                                            pursue pleasure rationally.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_60" />
                                {/*===============spacing==============*/}
                            </section>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_60" />
                        {/*===============spacing==============*/}
                    </div>
                </div>

            </Layout>
        </>
    )
}
