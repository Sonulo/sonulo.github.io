
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Client4() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay,],
        slidesPerView: 5,
        spaceBetween: 30,
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
    }
    return (
        <>
            <section className="client-section">
                {/*===============spacing==============*/}
                <div className="pd_top_20" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="client_logo_carousel type_three">
                            <div className="swiper-container">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/logo-2.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/logo-3.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/logo-4.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/logo-5.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/logo-6.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/logo-7.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
                <div className="divider_1 dark" />
            </section>

        </>
    )
}
