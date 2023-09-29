import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from 'next/head'
import CheckCircle from "@/components/elements/CheckCircle"
import Testimonial1 from "@/components/sections/Testimonial1"
import Blog5 from "@/components/sections/Blog5"

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

        <Layout
          breadcrumbTitle="Our Services & Technologies"
          headerStyle={3}
          footerStyle={3}
        >
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
                              <img
                                src="/assets/images/csharp.png"
                                alt="csharp-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/cpp.png"
                                alt="c++-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img src="/assets/images/c.png" alt="c-logo" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/java-icon.png"
                                alt="java-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/python.png"
                                alt="python-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/pytorch-icon.png"
                                alt="pytorch-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/pandas-icon.png"
                                alt="pandas-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/numpy-icon.png"
                                alt="numpy-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/tensorflow.png"
                                alt="tensorflow-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/php.png"
                                alt="php-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/html.png"
                                alt="html-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/css.png"
                                alt="css-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/js.png"
                                alt="javaScript-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/node-icon.png"
                                alt="node-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/react.png"
                                alt="react-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/angular-icon.png"
                                alt="angular-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/next-icon.png"
                                alt="next-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/mongodb.png"
                                alt="mongodb-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/mysql-icon.png"
                                alt="sql-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/postgresql-icon.png"
                                alt="postgre-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/go-icon.png"
                                alt="go-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/swift.png"
                                alt="swift-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/flutter-icon.png"
                                alt="flutter-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/firebase-icon.png"
                                alt="firebase-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/aws-icon.png"
                                alt="aws-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/gcp-icon.png"
                                alt="gcp-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/azure-icon.png"
                                alt="azure-logo"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="image">
                              <img
                                src="/assets/images/power-bi-icon.png"
                                alt="powerbi-logo"
                              />
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
             
              <Blog5></Blog5>

              {/*===============spacing==============*/}
              <div className="pd_bottom_60" />
              {/*===============spacing==============*/}
            </section>
            <section className="service-section-one">
              <div
                className="title_sections pd_bottom_50"
                style={{ textAlign: "center" }}
              >
                <h2>Our Projects</h2>
              </div>
              <div className="container">
                <div className="row">
                  <div className="invisible_normal_spacing" />
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="service_box style_four dark_color">
                      <div className="service_content">
                        <div className="image_box">
                          <img
                            src="/assets/images/service/project1.png"
                            className="img-fluid"
                            alt="Service Image"
                          />                       
                        </div>
                        <div className="content_inner">
                          <h2>
                            <Link href="#">Web Projects</Link>
                          </h2>                         
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
                          <img
                            src="/assets/images/service/project3.png"
                            className="img-fluid"
                            alt="Service Image"
                          />                     
                        </div>
                        <div className="content_inner">
                          <h2>
                            <Link href="#">AI & ML Projects</Link>
                          </h2>                        
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
                          <img
                            src="/assets/images/service/project4.png"
                            className="img-fluid"
                            alt="Service Image"
                          />                          
                        </div>
                        <div className="content_inner">
                          <h2>
                            <Link href="#">Mobile Apps</Link>
                          </h2>                         
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
    );
}