
import { useState } from "react"
import Link from "next/link"

export default function Tab2() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="tab-section pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                <div className="inner_section bg_op_1 rounded_radius" style={{ backgroundImage: 'url(/assets/images/tab-sec-bg.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_100" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="tabs_all_box  tabs_all_box_start type_one">
                                <div className="tab_over_all_box">
                                    <div className="tabs_header clearfix">
                                        <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                                            <li className="nav-item">
                                                <a className={activeIndex === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(1)}>01. Affordable</a >
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(2)}>02. Knowledge</a >
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(3)}>03. Saves Time</a >
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 4 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(4)}>04. Fast &amp; Quality</a >
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 5 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(5)}>05. Experienced</a >
                                            </li>
                                        </ul>
                                        <div className="toll_free">
                                            <Link href="/tel:180667586677"> <i className="icon-phone-call" />Call For Free
                                                Consultation</Link >
                                        </div>
                                    </div>
                                    <div className="s_tab_wrapper">
                                        <div className="s_tabs_content">
                                            <div className={activeIndex === 1 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/tab-image.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/blog/blog-image-8.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>
                                                            Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.
                                                        </p>
                                                        <Link href="#" className="rd_more">
                                                            Read More
                                                            <i className="icon-right-arrow" />
                                                        </Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 3 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/banner-five-bg.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 4 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/home-4-about-1.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 5 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/image-about-ls.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Creote</h6>
                                                        <h2>Affordable &amp; Flexible</h2>
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link >
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
                    <div className="pd_bottom_90" />
                    {/*===============spacing==============*/}
                </div>
            </section>

        </>
    )
}
