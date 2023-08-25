
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Client1() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay,],
        slidesPerView: 4,
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
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
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
    }
    return (
        <>
            <section className="client-brand-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client_logo_carousel type_one">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/CLIENT-logo-1.png" alt="clients-logo" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/CLIENT-logo-2.png" alt="clients-logo" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/CLIENT-logo-3.png" alt="clients-logo" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/CLIENT-logo-4.png" alt="clients-logo" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/CLIENT-logo-1.png" alt="clients-logo" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/CLIENT-logo-2.png" alt="clients-logo" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/CLIENT-logo-3.png" alt="clients-logo" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/CLIENT-logo-4.png" alt="clients-logo" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
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
