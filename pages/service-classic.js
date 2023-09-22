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
            <Layout breadcrumbTitle="Our Services & Technologies" headerStyle={3} footerStyle={3}>
                <div>
                    <section className="service-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="client_logo_carousel type_one">
                                        <div className="swiper-container">
                                            <Swiper {...swiperOptions1} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/fullstack.jpg)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Fullstack Development</Link>
                                                                        </h2>
                                                                        {/* <p>Our fullstack development services cover both frontend and backend expertise, ensuring comprehensive solutions for your project. From intuitive user interfaces to robust server-side architecture, we create dynamic and scalable web applications tailored to your unique needs.</p> */}
                                                                        <ul>
                                                                            <li>Both frontend and backend expertise</li>
                                                                            <li>Ensuring comprehensive solutions</li>
                                                                            <li>dynamic and scalable web applications</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Web development</Link></h2>
                                                                    <p>we create dynamic and scalable web applications tailored to your unique needs.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/mobileapp.jpg)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Mobile App</Link>
                                                                        </h2>
                                                                        {/* <p></p> */}
                                                                        <ul>
                                                                            <li>Elevate your brand's mobile presence with our mobile app development expertise</li>
                                                                            <li>User-friendly, feature-rich applications </li>
                                                                            <li>iOS and Android platforms</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Mobile App</Link></h2>
                                                                    <p>Elevate your brand's mobile presence with our mobile app development expertise.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/ML.jpg)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Machine Learning</Link>
                                                                        </h2>
                                                                        {/* <p>Prevents our being able too what get like best every pleasure.</p> */}
                                                                        <ul>
                                                                            <li>Transforming data into actionable insights</li>
                                                                            <li>Enhancing processes with intelligent automation</li>
                                                                            <li>Unlocking potential through predictive analytics</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Machine Learning</Link></h2>
                                                                    <p>Unleash the power of machine learning for predictive analysis and pattern recognition.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/AI.jpg)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">AI Related Services</Link>
                                                                        </h2>
                                                                        {/* <p>Explore the world of artificial intelligence with our AI-related services. We leverage cutting-edge AI technologies to automate tasks, improve decision-making, and enhance user interactions. From chatbots to computer vision, we bring AI solutions to life.</p> */}
                                                                        <ul>
                                                                            <li>Harnessing AI for smarter decisions</li>
                                                                            <li>Automating tasks with cutting-edge technology</li>
                                                                            <li>Innovating through artificial intelligence solutions</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">AI Related Services</Link></h2>
                                                                    <p>Explore the world of artificial intelligence with our AI-related services. From chatbots to computer vision, we bring AI solutions to life.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/ui.jpg)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">UI/UX Designing</Link>
                                                                        </h2>
                                                                        {/* <p>Exceptional user experiences begin with intuitive interfaces. Our UI/UX design services prioritize user-centric design, ensuring that your digital products not only look stunning but also provide seamless and enjoyable interactions.</p> */}
                                                                        <ul>
                                                                            <li>Crafting intuitive, user-friendly digital experiences</li>
                                                                            <li>Elevating brands through exceptional design</li>
                                                                            <li>Designing interfaces that captivate and convert</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">UI/UX Designing</Link></h2>
                                                                    <p>Our UI/UX design services prioritize user-centric design, ensuring that your digital products not only look stunning but also provide seamless and enjoyable interactions.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/cloud1.jpg)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Hosting Services</Link>
                                                                        </h2>
                                                                        {/* <p>Secure, reliable, and scalable hosting solutions are the backbone of your online presence.</p> */}
                                                                        <ul>
                                                                            <li>Reliable hosting for your online presence</li>
                                                                            <li>Scalable infrastructure for seamless performance</li>
                                                                            <li>Secure and always-available web hosting</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Hosting Services</Link></h2>
                                                                    <p>Our hosting services provide a robust infrastructure to ensure your websites and applications are always available and perform at their best.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                                        <div className="service_box style_two dark_color">
                                                            <div className="service_content_two ">
                                                                <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/datascience.jpg)' }}>
                                                                    <div className="content_inner_in">
                                                                        <div className="icon_image">
                                                                            <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                                                        </div>
                                                                        <h2>
                                                                            <Link href="#">Data Analytics</Link>
                                                                        </h2>
                                                                        {/* <p>Harness the power of data with our data analysis services. We transform raw information into valuable insights, helping you make data-driven decisions. Whether it's market trends, customer behavior, or performance metrics, we unlock the potential hidden within your data.</p> */}
                                                                        <ul>
                                                                            <li>Turning data into actionable insights</li>
                                                                            <li>Data-driven decisions for business growth</li>
                                                                            <li>Unlocking hidden potential in your data</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay_content">
                                                                    <h2><Link href="#">Data Analytics</Link></h2>
                                                                    <p>Harness the power of data with our data analysis services. Whether it's market trends, customer behavior, or performance metrics, we unlock the potential hidden within your data.</p>
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
                </div>

            </Layout>
        </>
    )
}