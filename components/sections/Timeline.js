import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Timeline() {
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
    return (
        <>
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
                                                        <img src="/assets/images/service/service-image-4.jpg" alt="img" />
                                                    </div>
                                                    <div className="c_box">
                                                        <h2>
                                                            <Link href="#" >
                                                                First Award </Link >
                                                        </h2>
                                                        <p> Undertakes laborious physical exercise except to obtain
                                                            some advantage
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
                                                        <img src="/assets/images/blog/blog-image-8.jpg" alt="img" />
                                                    </div>
                                                    <div className="c_box">
                                                        <h2>
                                                            <Link href="#" >100
                                                                Employees</Link >
                                                        </h2>
                                                        <p>Expound the actual teachings of the great explorer the
                                                            truth the masters
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
                                                        <img src="/assets/images/projects/project-5-img.jpg" alt="img" />
                                                    </div>
                                                    <div className="c_box">
                                                        <h2>
                                                            <Link href="#" >New
                                                                Milestone</Link >
                                                        </h2>
                                                        <p>No one rejects dislikes or avoids pleasures itself
                                                            because it is pleasures,
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
                                                        <img src="/assets/images/projects/project-3-img.jpg" alt="img" />
                                                    </div>
                                                    <div className="c_box">
                                                        <h2>
                                                            <Link href="#" >Company
                                                                Started</Link >
                                                        </h2>
                                                        <p>Expound the actual teachings of the great explorer the
                                                            truth the masters
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
                                                        <img src="/assets/images/service/service-image-4.jpg" alt="img" />
                                                    </div>
                                                    <div className="c_box">
                                                        <h2>
                                                            <Link href="#" >
                                                                First Award </Link >
                                                        </h2>
                                                        <p> Undertakes laborious physical exercise except to obtain
                                                            some advantage
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

        </>
    )
}
