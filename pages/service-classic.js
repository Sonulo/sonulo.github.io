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
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
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
                            <div className="row">
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
                                    <div className="title_all_box style_one text-center dark_color">
                                        <div className="title_sections">
                                            <div className="before_title"> Making What’s </div>
                                            <h2>Possible in Human Resource</h2>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_50" />
                                        {/*===============spacing==============*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row gutter_40px">
                                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_box style_three dark_color">
                                        <div className="service_content">
                                            <div className="content_inner">
                                                <span className="icon-dollar"><i /></span>
                                                <small className="nom">01</small>
                                                <h2><Link href="#">Employee Compensation </Link></h2>
                                                <p>Holds in these matters principles selection right rejects.</p>
                                                <Link href="#" className="read_more">Read more <i className="icon-right-arrow" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_box style_three dark_color">
                                        <div className="service_content">
                                            <div className="content_inner">
                                                <span className="icon-pharmacy"><i /></span>
                                                <small className="nom">02</small>
                                                <h2><Link href="#">Health Care Benefits</Link></h2>
                                                <p>The great explorer of the truth the master builders human happiness.</p>
                                                <Link href="#" className="read_more">Read more <i className="icon-right-arrow" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_box style_three dark_color">
                                        <div className="service_content">
                                            <div className="content_inner">
                                                <span className="icon-service"><i /></span>
                                                <small className="nom">03</small>
                                                <h2><Link href="#">Talent Management</Link></h2>
                                                <p>Laborious physo except obtains some advantage from it right.</p>
                                                <Link href="#" className="read_more">Read more <i className="icon-right-arrow" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_box style_three dark_color">
                                        <div className="service_content">
                                            <div className="content_inner">
                                                <span className=" icon-dollar"><i /></span>
                                                <small className="nom">04</small>
                                                <h2><Link href="#">Risk Management</Link></h2>
                                                <p>Right to find fault with a mans who chooses enjoy has no annoying.</p>
                                                <Link href="#" className="read_more">Read more <i className="icon-right-arrow" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_90" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="progress-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="title_all_box style_one  dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">Successful &amp;</div>
                                            <h2>Sustainable Growth</h2>
                                            <p>Denounce with righteous indignation and dislike men who are beguiled and demoralized by
                                                the charms of pleasure.</p>
                                        </div>
                                    </div>
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn four">Read more <i className="icon-right-arrow" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="progress_bar style_three">
                                        <h2>Recruitment Process <span>48%</span></h2>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="48%" style={{ width: '48%' }} />
                                        </div>
                                    </div>
                                    <div className="progress_bar style_three">
                                        <h2>Employee Relations <span>79%</span></h2>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="79%" style={{ width: '79%' }} />
                                        </div>
                                    </div>
                                    <div className="progress_bar style_three">
                                        <h2>Compliance Audits <span>65%</span></h2>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="65%" style={{ width: '65%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_50" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="tab-section">
                        <div className="container">
                            <div className="row">
                                <section className="tabs_all_box tabs_all_box_start type_two">
                                    <div className="tab_over_all_box">
                                        <div className="tabs_header clearfix">
                                            <ul className="showcase_tabs_btns nav-pills nav clearfix">
                                                <li className="nav-item">
                                                    <a className={activeIndex2 === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick2(1)} data-tab="#tabtabone">01.Benefits</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex2 === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick2(2)} data-tab="#tabtabtwo">02. HR Advice</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex2 === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick2(3)} data-tab="#tabtabtwothree">03. HR Audit</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="s_tab_wrapper">
                                            <div className="s_tabs_content">
                                                <div className={activeIndex2 === 1 ? "s_tab fade active-tab show" : "s_tab fade"} id="tabtabone">
                                                    <div className="tab_content one">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                                                <div className="image">
                                                                    <img src="/assets/images/tab-ser-img.png" alt="img" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="content_bx">
                                                                    <h6>Showing You</h6>
                                                                    <h2>The Way of Success</h2>
                                                                    <p>Denounce with righteous indignation and dislike men who are so
                                                                        beguiled and demoralized by the charms of pleasure moment so blinded
                                                                        by desire that they cannot foresee the pain and trouble.</p>
                                                                    <ul>
                                                                        <li>Cost-Effective Services</li>
                                                                        <li>Helps Reduce Business Risks</li>
                                                                        <li>Management of Employee Performance</li>
                                                                        <li>Increasing Company’s Agility</li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">Read
                                                                        More</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={activeIndex2 === 2 ? "s_tab fade active-tab show" : "s_tab fade"} id="tabtabtwo">
                                                    <div className="tab_content one">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                                                <div className="image">
                                                                    <img src="/assets/images/tab-ser-img.png" alt="img" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="content_bx">
                                                                    <h6>Why Creote</h6>
                                                                    <h2>Affordable &amp; Flexible</h2>
                                                                    <p>Must explain too you how all this mistaken idea of denouncing
                                                                        pleasures
                                                                        praising pain was born and we will give you complete account of the
                                                                        system
                                                                        the actual teachings of the great explorer.
                                                                    </p>
                                                                    <ul>
                                                                        <li>
                                                                            Cost-Effective Services
                                                                        </li>
                                                                        <li>
                                                                            Helps Reduce Business Risks
                                                                        </li>
                                                                        <li>
                                                                            Management of Employee Performance
                                                                        </li>
                                                                        <li>
                                                                            Increasing Company’s Agility
                                                                        </li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">
                                                                        Read More
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={activeIndex2 === 3 ? "s_tab fade active-tab show" : "s_tab fade"} id="tabtabtwothree">
                                                    <div className="tab_content one">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                                                <div className="image">
                                                                    <img src="/assets/images/tab-ser-img.png" alt="img" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="content_bx">
                                                                    <h6>Why Creote</h6>
                                                                    <h2>Affordable &amp; Flexible</h2>
                                                                    <p>Must explain too you how all this mistaken idea of denouncing
                                                                        pleasures
                                                                        praising pain was born and we will give you complete account of the
                                                                        system
                                                                        the actual teachings of the great explorer.
                                                                    </p>
                                                                    <ul>
                                                                        <li>
                                                                            Cost-Effective Services
                                                                        </li>
                                                                        <li>
                                                                            Helps Reduce Business Risks
                                                                        </li>
                                                                        <li>
                                                                            Management of Employee Performance
                                                                        </li>
                                                                        <li>
                                                                            Increasing Company’s Agility
                                                                        </li>
                                                                    </ul>
                                                                    <Link href="#" className="theme-btn two">
                                                                        Read More
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_80" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="price-section bg_light_1">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title_all_box style_one text-center dark_color">
                                        <div className="title_sections">
                                            <div className="before_title"> Flexible Plan</div>
                                            <h2>Perfect for Small &amp; Large Brands</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="price_plan_with_tab price_tb_style_one">
                                <div className="tab_pricing_list">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}>
                                                Monthly</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)}>
                                                Anually</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content price_tab_content" id="myTabContent">
                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one">
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>149</h4>
                                                            <p>Loves or pursues or desires obtain pain
                                                                of itself is pain occasionally.
                                                            </p>
                                                        </div>
                                                        <div className="bottom">
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Silver Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>249</h4>
                                                            <p>Loves or pursues or desires obtain pain
                                                                of itself is pain occasionally.
                                                            </p>
                                                        </div>
                                                        <div className="bottom">
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one">
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Gold Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>349</h4>
                                                            <p>Loves or pursues or desires obtain pain
                                                                of itself is pain occasionally.
                                                            </p>
                                                        </div>
                                                        <div className="bottom">
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one">
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>349</h4>
                                                            <p>Loves or pursues or desires obtain pain
                                                                of itself is pain occasionally.
                                                            </p>
                                                        </div>
                                                        <div className="bottom">
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Silver Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>549</h4>
                                                            <p>Loves or pursues or desires obtain pain
                                                                of itself is pain occasionally.
                                                            </p>
                                                        </div>
                                                        <div className="bottom">
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one">
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Gold Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>949</h4>
                                                            <p>Loves or pursues or desires obtain pain
                                                                of itself is pain occasionally.
                                                            </p>
                                                        </div>
                                                        <div className="bottom">
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="client-brand">
                        {/*===============spacing==============*/}
                        <div className="pd_top_80" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-3 mb-lg-0 mb-xl-0">
                                    <div className="title_all_box style_one  dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">List of Our</div>
                                            <h2>Business Partners</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <p>Denounce with righteous indignation and dislike men who are beguiled and demoralized by the
                                        charms of pleasure.</p>
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn four">Contact Us <i className="icon-right-arrow" /></Link>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
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