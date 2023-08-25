import Layout from '@/components/layout/Layout';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
};
export default function ElementImage() {

    return (
        <>
            <Layout breadcrumbTitle="Client">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <section className="client_logo_carousel type_one">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions}>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-1.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-2.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-3.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-4.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-1.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-2.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-4.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-3.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="p_pagination">
                                        <div className="swiper-pagination" />
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            <section className="client_logo_carousel type_two">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions}>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-1.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-2.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-3.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-4.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-1.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-2.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-3.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-4.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-1.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-2.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-3.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-4.png" alt="clients-logo" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="p_pagination">
                                        <div className="swiper-pagination" />
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_top_70" />
                            {/*===============spacing==============*/}
                            <section className="client_logo_carousel type_three">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions}>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-1.png" alt="clients-logo" style={{ width: '130px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-2.png" alt="clients-logo" style={{ width: '200px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-3.png" alt="clients-logo" style={{ width: '220px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-4.png" alt="clients-logo" style={{ width: '200px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-1.png" alt="clients-logo" style={{ width: '130px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-2.png" alt="clients-logo" style={{ width: '200px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-3.png" alt="clients-logo" style={{ width: '220px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-4.png" alt="clients-logo" style={{ width: '200px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-1.png" alt="clients-logo" style={{ width: '130px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-2.png" alt="clients-logo" style={{ width: '200px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-3.png" alt="clients-logo" style={{ width: '220px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="../assets/images/CLIENT-logo-4.png" alt="clients-logo" style={{ width: '200px!important' }} />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="p_pagination">
                                        <div className="swiper-pagination" />
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_top_70" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
