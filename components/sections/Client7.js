import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Client7() {
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
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="swiper-container">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img decoding="async" src="/assets/images/logo-6.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img decoding="async" src="/assets/images/logo-7.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img decoding="async" src="/assets/images/logo-4.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img decoding="async" src="/assets/images/logo-3.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img decoding="async" src="/assets/images/logo-2.jpg" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
