import Layout from '@/components/layout/Layout';
import { useState } from 'react';

export default function ElementTabs() {
    const [activeIndex1, setActiveIndex1] = useState(1);
    const handleOnClick1 = (index) => {
        setActiveIndex1(index); // remove the curly braces
    };
    const [activeIndex2, setActiveIndex2] = useState(1);
    const handleOnClick2 = (index) => {
        setActiveIndex2(index); // remove the curly braces
    };
    const [activeIndex3, setActiveIndex3] = useState(1);
    const handleOnClick3 = (index) => {
        setActiveIndex3(index); // remove the curly braces
    };

    return (
        <>
            <Layout breadcrumbTitle="Tabs">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_70" />
                            {/*===============spacing==============*/}
                            <section className="tabs_all_box tabs_all_box_start type_one">
                                <div className="tab_over_all_box">
                                    <div className="tabs_header clearfix">
                                        <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                                            <li className="nav-item">
                                                <a className={activeIndex1 === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick1(1)} data-tab="#tabtabone">01. Affordable</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex1 === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick1(2)} data-tab="#tabtabtwo">02. Knowledge</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex1 === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick1(3)} data-tab="#tabtabthree">03. Saves Time</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex1 === 4 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick1(4)} data-tab="#tabtabtfour">04. Fast &amp; Quality</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex1 === 5 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick1(5)} data-tab="#tabtabfive">05. Experienced</a>
                                            </li>
                                        </ul>
                                        <div className="toll_free">
                                            <a href="tel:180667586677"> <i className="icon-phone-call" />Call For Free Consultation</a>
                                        </div>
                                    </div>
                                    <div className="s_tab_wrapper">
                                        <div className="s_tabs_content">
                                            <div className={activeIndex1 === 1 ? "s_tab fade active-tab show" : "s_tab fade"} id="tabtabone">
                                                <div className="tab_content one" style={{ backgroundImage: 'url(../assets/images/tab-image.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                        <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex1 === 2 ? "s_tab fade active-tab show" : "s_tab fade"} id="tabtabtwo">
                                                <div className="tab_content one" style={{ backgroundImage: 'url(../assets/images/blog/blog-image-8.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                        <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex1 === 3 ? "s_tab fade active-tab show" : "s_tab fade"} id="tabtabthree">
                                                <div className="tab_content one" style={{ backgroundImage: 'url(../assets/images/banner-five-bg.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                        <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex1 === 4 ? "s_tab fade active-tab show" : "s_tab fade"} id="tabtabtfour">
                                                <div className="tab_content one" style={{ backgroundImage: 'url(../assets/images/home-4-about-1.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                        <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex1 === 5 ? "s_tab fade active-tab show" : "s_tab fade"} id="tabtabfive">
                                                <div className="tab_content one" style={{ backgroundImage: 'url(../assets/images/image-about-ls.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                        <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_80" />
                            {/*===============spacing==============*/}
                            <section className="tabs_all_box tabs_all_box_start type_two">
                                <div className="tab_over_all_box">
                                    <div className="tabs_header clearfix">
                                        <ul className="showcase_tabs_btns nav-pills nav clearfix">
                                            <li className="nav-item">
                                                <a className={activeIndex2 === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick2(1)} data-tab="#twotabtabone">01.Benefits</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex2 === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick2(2)} data-tab="#twotabtabtwo">02. HR Advice</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex2 === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick2(3)} data-tab="#twotabtabtthree">03. HR Audit</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="s_tab_wrapper">
                                        <div className="s_tabs_content">
                                            <div className={activeIndex2 === 1 ? "s_tab fade active-tab show" : "s_tab fade"} id="twotabtabone">
                                                <div className="tab_content one">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                                            <div className="image">
                                                                <img src="../assets/images/tab-ser-img.png" alt="img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="content_bx">
                                                                <h6>Showing You</h6>
                                                                <h2>The Way of Success</h2>
                                                                <p>Denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure moment so blinded by desire that they cannot foresee the pain and trouble.</p>
                                                                <ul>
                                                                    <li>Cost-Effective Services</li>
                                                                    <li>Helps Reduce Business Risks</li>
                                                                    <li>Management of Employee Performance</li>
                                                                    <li>Increasing Company’s Agility</li>
                                                                </ul>
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex2 === 2 ? "s_tab fade active-tab show" : "s_tab fade"} id="twotabtabtwo">
                                                <div className="tab_content one">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            <div className="image">
                                                                <img src="../assets/images/tab-ser-img.png" alt="img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            <div className="content_bx">
                                                                <h6>Why Creote</h6>
                                                                <h2>Affordable &amp; Flexible</h2>
                                                                <p>Must explain too you how all this mistaken idea of denouncing pleasures
                                                                    praising pain was born and we will give you complete account of the system
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
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                                    Read More
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex2 === 3 ? "s_tab fade active-tab show" : "s_tab fade"} id="twotabtabtthree">
                                                <div className="tab_content one">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            <div className="image">
                                                                <img src="../assets/images/tab-ser-img.png" alt="img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            <div className="content_bx">
                                                                <h6>Why Creote</h6>
                                                                <h2>Affordable &amp; Flexible</h2>
                                                                <p>Must explain too you how all this mistaken idea of denouncing pleasures
                                                                    praising pain was born and we will give you complete account of the system
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
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                                    Read More
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_80" />
                            {/*===============spacing==============*/}
                            <section className="tabs_all_box  tabs_all_box_start type_three">
                                <div className="tab_over_all_box">
                                    <div className="tabs_header clearfix">
                                        <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                                            <li className="nav-item"><a className={activeIndex3 === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick3(1)} data-tab="#thereetabtabone">01. Affordable</a></li>
                                            <li className="nav-item"><a className={activeIndex3 === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick3(2)} data-tab="#thereetabtabtwo">01. Affordable</a></li>
                                            <li className="nav-item"><a className={activeIndex3 === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick3(3)} data-tab="#thereetabtabthree">01. Affordable</a></li>
                                        </ul>
                                    </div>
                                    <div className="s_tab_wrapper">
                                        <div className="s_tabs_content">
                                            <div className={activeIndex3 === 1 ? "s_tab fade active-tab show" : "s_tab fade"} id="thereetabtabone">
                                                <div className="tab_content one">
                                                    <div className="image">
                                                        <img decoding="async" src="../assets/images/cal-to-action.jpg" alt="img" />
                                                    </div>
                                                    <div className="content_bx">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of denouncing pleasures
                                                            praising pain was born and we will give you complete account of the system
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
                                                        <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex3 === 2 ? "s_tab fade active-tab show" : "s_tab fade"} id="thereetabtabtwo">
                                                <div className="tab_content one">
                                                    <div className="image">
                                                        <img decoding="async" src="../assets/images/cal-to-action-2.jpg" alt="img" />
                                                    </div>
                                                    <div className="content_bx">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of denouncing pleasures
                                                            praising pain was born and we will give you complete account of the system
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
                                                        <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex3 === 3 ? "s_tab fade active-tab show" : "s_tab fade"} id="thereetabtabthree">
                                                <div className="tab_content one">
                                                    <div className="image">
                                                        <img decoding="async" src="../assets/images/expertise-bg-1.jpg" alt="img" />
                                                    </div>
                                                    <div className="content_bx">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of denouncing pleasures
                                                            praising pain was born and we will give you complete account of the system
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
                                                        <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_80" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
