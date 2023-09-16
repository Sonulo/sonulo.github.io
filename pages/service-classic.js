import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

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
            <Layout breadcrumbTitle="Service Classic">
                <div>
                    <section className="service-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_box style_two dark_color">
                                        <div className="service_content_two ">
                                            <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-1.png)' }}>
                                                <div className="content_inner_in">
                                                    <div className="icon_image">
                                                        <img src="/assets/images/010-job-search.png" className="img-fluid" alt="Service Image" />
                                                    </div>
                                                    <h2>
                                                        <Link href="#"> Recruitment Process </Link>
                                                    </h2>
                                                    <p> These cases are perfectly simple and easy to distinguish.</p>
                                                    <ul>
                                                        <li> Reducing Redundancy </li>
                                                        <li> Uncovering Hidden Resources </li>
                                                        <li> Increasing Company’s Agility </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ovarlay_link">
                                                <Link href="#">
                                                    <i className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                            <div className="overlay_content">
                                                <h2>
                                                    <Link href="#"> Recruitment Process </Link>
                                                </h2>
                                                <p> These cases are perfectly simple and easy to distinguish.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_box style_two dark_color">
                                        <div className="service_content_two  active_ser">
                                            <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-2.png)' }}>
                                                <div className="content_inner_in">
                                                    <div className="icon_image">
                                                        <img src="/assets/images/service-ico-1.png" className="img-fluid" alt="Service Image" />
                                                    </div>
                                                    <h2>
                                                        <Link href="#">Employee Relations</Link>
                                                    </h2>
                                                    <p>Indignation sed dislike men who are beguiled and demoralized.</p>
                                                    <ul>
                                                        <li>Improving Communication</li>
                                                        <li>Employee issue resolution</li>
                                                        <li>Proper Documentation Process</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ovarlay_link">
                                                <Link href="#"><i className="icon-right-arrow" /></Link>
                                            </div>
                                            <div className="overlay_content">
                                                <h2>
                                                    <Link href="#">Employee Relations</Link>
                                                </h2>
                                                <p>Indignation sed dislike men who are beguiled and demoralized.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_box style_two dark_color">
                                        <div className="service_content_two ">
                                            <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                                <div className="content_inner_in">
                                                    <div className="icon_image">
                                                        <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                    </div>
                                                    <h2>
                                                        <Link href="#">Compliance Audits</Link>
                                                    </h2>
                                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                                    <ul>
                                                        <li>Handling of employment</li>
                                                        <li>Greater retention rates</li>
                                                        <li>A fully engaged workforce</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ovarlay_link">
                                                <Link href="#"><i className="icon-right-arrow" /></Link>
                                            </div>
                                            <div className="overlay_content">
                                                <h2><Link href="#">Compliance Audits</Link></h2>
                                                <p>Prevents our being able too what get like best every pleasure.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="client_logo_carousel type_one">
                                        <div className="swiper-container">
                                            <Swiper {...swiperOptions1} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Compliance Audits</Link>
                                                                        </h2>
                                                                        <p>Prevents our being able too what get like best every pleasure.</p>
                                                                        <ul>
                                                                            <li>Handling of employment</li>
                                                                            <li>Greater retention rates</li>
                                                                            <li>A fully engaged workforce</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="ovarlay_link">
                                                                    <Link href="#"><i className="icon-right-arrow" /></Link>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Compliance Audits</Link></h2>
                                                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Compliance Audits</Link>
                                                                        </h2>
                                                                        <p>Prevents our being able too what get like best every pleasure.</p>
                                                                        <ul>
                                                                            <li>Handling of employment</li>
                                                                            <li>Greater retention rates</li>
                                                                            <li>A fully engaged workforce</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="ovarlay_link">
                                                                    <Link href="#"><i className="icon-right-arrow" /></Link>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Compliance Audits</Link></h2>
                                                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Compliance Audits</Link>
                                                                        </h2>
                                                                        <p>Prevents our being able too what get like best every pleasure.</p>
                                                                        <ul>
                                                                            <li>Handling of employment</li>
                                                                            <li>Greater retention rates</li>
                                                                            <li>A fully engaged workforce</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="ovarlay_link">
                                                                    <Link href="#"><i className="icon-right-arrow" /></Link>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Compliance Audits</Link></h2>
                                                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Compliance Audits</Link>
                                                                        </h2>
                                                                        <p>Prevents our being able too what get like best every pleasure.</p>
                                                                        <ul>
                                                                            <li>Handling of employment</li>
                                                                            <li>Greater retention rates</li>
                                                                            <li>A fully engaged workforce</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="ovarlay_link">
                                                                    <Link href="#"><i className="icon-right-arrow" /></Link>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Compliance Audits</Link></h2>
                                                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Compliance Audits</Link>
                                                                        </h2>
                                                                        <p>Prevents our being able too what get like best every pleasure.</p>
                                                                        <ul>
                                                                            <li>Handling of employment</li>
                                                                            <li>Greater retention rates</li>
                                                                            <li>A fully engaged workforce</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="ovarlay_link">
                                                                    <Link href="#"><i className="icon-right-arrow" /></Link>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Compliance Audits</Link></h2>
                                                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Compliance Audits</Link>
                                                                        </h2>
                                                                        <p>Prevents our being able too what get like best every pleasure.</p>
                                                                        <ul>
                                                                            <li>Handling of employment</li>
                                                                            <li>Greater retention rates</li>
                                                                            <li>A fully engaged workforce</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="ovarlay_link">
                                                                    <Link href="#"><i className="icon-right-arrow" /></Link>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Compliance Audits</Link></h2>
                                                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Compliance Audits</Link>
                                                                        </h2>
                                                                        <p>Prevents our being able too what get like best every pleasure.</p>
                                                                        <ul>
                                                                            <li>Handling of employment</li>
                                                                            <li>Greater retention rates</li>
                                                                            <li>A fully engaged workforce</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="ovarlay_link">
                                                                    <Link href="#"><i className="icon-right-arrow" /></Link>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Compliance Audits</Link></h2>
                                                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
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
                    {/*-service end-*/}
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
                                                            <img src="/assets/images/pythonlib1.png" alt="python_libraries-logo" />
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
                    {/*-newsteller-*/}
                    <section className="newsteller style_one bg_dark_1">
                        {/*===============spacing==============*/}
                        <div className="pd_top_40" />
                        {/*===============spacing==============*/}
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content">
                                        <h2>Join Our Mailing List</h2>
                                        <p>For receiving our news and updates in your inbox directly. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="item_scubscribe">
                                        <div className="input_group">
                                            <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                    <input type="submit" defaultValue="Sign up" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_40" />
                        {/*===============spacing==============*/}
                    </section>
                </div>

            </Layout>
        </>
    )
}