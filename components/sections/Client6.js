
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Client6() {
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
            <section className="client-section text-center bg_op_1" style={{ background: 'url(/assets/images/home-13-client-bg.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_60" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="swiper-container">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/cecode-brand-1.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/cecode-brand-2.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/cecode-brand-3.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/cecode-brand-4.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src="/assets/images/cecode-brand-5.png" alt="clients-logo" className="img-fluid" />
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
