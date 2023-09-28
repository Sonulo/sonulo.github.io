import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from 'next/head'
import CheckCircle from "@/components/elements/CheckCircle"

export default function ServiceClassic() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    const [activeIndex2, setActiveIndex2] = useState(1);
    const handleOnClick2 = (index) => {
        setActiveIndex2(index);
    };
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1350: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        }
    };
    const swiperOptions1 = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
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
                slidesPerView: 3,
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
            <Head>
                <title>Sonulo - Services</title>
            </Head>

            <Layout breadcrumbTitle="Our Services & Technologies" headerStyle={3} footerStyle={3}>
                <div>
                <section className="service-section-two bg_light_1">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                    <div className="col-lg-12">
                                        <div className="client_logo_carousel type_one">
                                            <div className="swiper-container">
                                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/csharp.png" alt="csharp-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/cpp.png" alt="c++-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/c.png" alt="c-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/python.png" alt="python-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/react.png" alt="react-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/php.png" alt="php-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/html.png" alt="html-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/css.png" alt="css-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/js.png" alt="javaScript-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/mysql.png" alt="sql-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/tensorflow.png" alt="tensorflow-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/pytorch.png" alt="pytorch-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/go.png" alt="go-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/flask.png" alt="flask-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/flutter.png" alt="flutter-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/java.png" alt="java-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/node.png" alt="node-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/aws.png" alt="aws-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/blockchain.png" alt="blockchain-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/mongodb.png" alt="mongodb-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/firebase.png" alt="firebase-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/swift.png" alt="swift-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="image">
                                                            <img src="/assets/images/postgre.png" alt="postgre-logo" />
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>    
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_90" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="service-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                                    <img src="/assets/images/about/about-14.jpg" alt="service1" />
                                </div>
                                <div className="col-xl-6 col-lg-6 pd_left_30">
                                    <h1 className="mb-3">Full Stack Development</h1>
                                    <div className="service-list mb-4">
                                        <ul style={{listStyleType: "none"}}>
                                            <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                <CheckCircle/>
                                                <strong>Front-end</strong>
                                            </li>
                                            <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                <CheckCircle/>
                                                <strong>Back-end</strong>
                                            </li>
                                            <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                <CheckCircle/>
                                                <strong>Cloud Native</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_90" />
                            {/*===============spacing==============*/}
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 pd_left_30">
                                    <h1 className="mb-3">Mobile App Development</h1>
                                    <div className="service-list mb-4">
                                        <ul style={{listStyleType: "none"}}>
                                            <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                <CheckCircle/>
                                                <strong>Cross Platform</strong>
                                            </li>
                                            <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                <CheckCircle/>
                                                <strong>Native</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                                    <img src="/assets/images/about/about-14.jpg" alt="service1" />
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_90" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="service-section-one">
                    <div className="container">
                        <div className="row">
                            <div className="invisible_normal_spacing" />
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_four dark_color">
                                    <div className="service_content">
                                        <div className="image_box">
                                            <img src="/assets/images/projects/project-6-img.jpg" className="img-fluid" alt="Service Image" />
                                            <span className="icon-video-player" />
                                        </div>
                                        <div className="content_inner">
                                            <h2><Link href="#">Chat With a Live</Link ></h2>
                                            <p>Live Chat</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_four dark_color">
                                    <div className="service_content">
                                        <div className="image_box">
                                            <img src="/assets/images/about/about-12.jpg" className="img-fluid" alt="Service Image" />
                                            <span className="icon-businessman-1" />
                                        </div>
                                        <div className="content_inner">
                                            <h2><Link href="#">Ask Professionals</Link ></h2>
                                            <p>our Team</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_four dark_color">
                                    <div className="service_content">
                                        <div className="image_box">
                                            <img src="/assets/images/blog/blog-image-10.jpg" className="img-fluid" alt="Service Image" />
                                            <span className=" icon-development" />
                                        </div>
                                        <div className="content_inner">
                                            <h2><Link href="#">Support to Grow</Link ></h2>
                                            <p>User Guides</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_60" />
                    {/*===============spacing==============*/}
                </section>
                </div>
            </Layout>
        </>
    )
}