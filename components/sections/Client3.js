
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Client3() {
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
            <section className="client-carousel-section bg_dark_1">
                {/*===============spacing==============*/}
                <div className="pd_top_60" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="client_logo_carousel type_three">
                            <div className="swiper-container">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-w.png" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-3-w.png" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-2-w.png" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-1-w.png" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-3-w.png" alt="clients-logo" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
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
