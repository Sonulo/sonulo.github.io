import Layout from '@/components/layout/Layout';
import { useState } from 'react';

export default function ElementPrice() {
    const [activeIndex1, setActiveIndex1] = useState(1);
    const handleOnClick1 = (index) => {
        setActiveIndex1(index);
    };
    const [activeIndex2, setActiveIndex2] = useState(1);
    const handleOnClick2 = (index) => {
        setActiveIndex2(index);
    };
    return (
        <>
            <Layout breadcrumbTitle="Price">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <section className="price_plan_with_tab price_tb_style_one">
                                <div className="row">
                                    <div className="col-lg-12 ml-auto">
                                        <div className="tab_pricing_list">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeIndex1 === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick1(1)}>
                                                        Monthly</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeIndex1 === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick1(2)}>
                                                        Anually</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content price_tab_content" id="myTabContent">
                                    <div className={activeIndex1 === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one  tag_enables ">
                                                    <div className="tag">Popular</div>
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
                                                            <ul>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one  tag_enables ">
                                                    <div className="tag">Popular</div>
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
                                                            <ul>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one  tag_enables ">
                                                    <div className="tag">Popular</div>
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
                                                            <ul>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex1 === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one  tag_enables ">
                                                    <div className="tag">Popular</div>
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
                                                            <ul>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one  tag_enables ">
                                                    <div className="tag">Popular</div>
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
                                                            <ul>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one  tag_enables ">
                                                    <div className="tag">Popular</div>
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
                                                            <ul>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <section className="price_plan_with_tab price_tb_style_two">
                                <div className="row">
                                    <div className="col-lg-12 ml-auto">
                                        <div className="tab_pricing_list">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeIndex2 === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick2(1)}>
                                                        Monthly</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeIndex2 === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick2(2)}>
                                                        Anually</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content price_tab_content" id="myTabContent">
                                    <div className={activeIndex2 === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_two  tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>149</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_two  tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>149</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_two  tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>149</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> Document watermarking</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex2 === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_two  tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>149</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_two  tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>149</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_two  tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>149</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Collaboration with up to 10 users</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <a href="#" target="&quot;_blank&quot;" rel="&quot;nofollow&quot;" className="theme-btn two">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <section className="price-section">
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
                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                        Get Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="price_plan_box style_one tag_enables">
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
                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                        Get Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="price_plan_box style_one ">
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
                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn two">
                                                        Get Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <section className="price-section">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="pricing_plan_box type_one">
                                            <div className="tags">Recommended</div>
                                            <div className="pricing_plan_box_inner">
                                                <div className="upper_content">
                                                    <div className="title_s">
                                                        <h2>Basic Pack</h2>
                                                    </div>
                                                    <div className="price_rs">
                                                        <h6><small>22$</small> / <span>Year</span></h6>
                                                    </div>
                                                    <p>Power of choice is untrammelled and do what we like best.</p>
                                                </div>
                                                <div className="lower_content">
                                                    <ul>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            4-5 Weeks from to finish </li>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            Organisational Strategy
                                                        </li>
                                                        <li>
                                                            <span className="no_ico fa fa-times-circle-o" />
                                                            20 Days of support
                                                        </li>
                                                        <li>
                                                            <span className="no_ico fa fa-times-circle-o" />
                                                            Data sprint
                                                            Results revision </li>
                                                        <li>
                                                            <span className="no_ico fa fa-times-circle-o" />
                                                            Data sprint
                                                            Results revision </li>
                                                    </ul>
                                                </div>
                                                <div className="get_start_button theme_btn_all">
                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn one">Get
                                                        Started<span className="icon-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="pricing_plan_box type_one">
                                            <div className="tags">Most Recommended</div>
                                            <div className="pricing_plan_box_inner">
                                                <div className="upper_content">
                                                    <div className="title_s">
                                                        <h2>Standard Pack</h2>
                                                    </div>
                                                    <div className="price_rs">
                                                        <h6><small>59$</small> / <span>Year</span></h6>
                                                    </div>
                                                    <p>Matters to principle of selection our pleasures to secure.</p>
                                                </div>
                                                <div className="lower_content">
                                                    <ul>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            4-5 Weeks from to finish </li>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            Organisational Strategy
                                                        </li>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            20 Days of support
                                                        </li>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            Data sprint
                                                            Results revision </li>
                                                        <li>
                                                            <span className="no_ico fa fa-times-circle-o" />
                                                            Data sprint
                                                            Results revision </li>
                                                    </ul>
                                                </div>
                                                <div className="get_start_button theme_btn_all">
                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn one">Get
                                                        Started<span className="icon-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="pricing_plan_box type_one">
                                            <div className="tags">Popular Pack</div>
                                            <div className="pricing_plan_box_inner">
                                                <div className="upper_content">
                                                    <div className="title_s">
                                                        <h2>Advanced Pack</h2>
                                                    </div>
                                                    <div className="price_rs">
                                                        <h6><small>99$</small> / <span>Year</span></h6>
                                                    </div>
                                                    <p>These cases are perfectly simple &amp; easy to distinguish.</p>
                                                </div>
                                                <div className="lower_content">
                                                    <ul>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            4-5 Weeks from to finish </li>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            Organisational Strategy
                                                        </li>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            20 Days of support
                                                        </li>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            Data sprint
                                                            Results revision </li>
                                                        <li>
                                                            <span className="yes_ico fa fa-check-circle-o" />
                                                            Data sprint
                                                            Results revision </li>
                                                    </ul>
                                                </div>
                                                <div className="get_start_button theme_btn_all">
                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn one">Get
                                                        Started<span className="icon-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
