import Link from "next/link"
import { useState } from "react"
export default function Price1() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="price-plan-tab-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
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
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_30" />
                        {/*===============spacing==============*/}
                    </div>
                    <div className="row gutter_30px">
                        <div className="col-lg-12">
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
                                                <div className="price_plan_box style_one ">
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Bronze Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>149<span>$</span></h4>
                                                            <p>Loves or pursues or desires obtain pain of itself is pain occasionally.</p>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> 4-5 Weeks from to finish</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Data sprint</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> Results revision</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> 20 Days of support</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> Organisational Strategy</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <Link href="#" className="theme-btn two">Get Now</Link >
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
                                                            <h4>249<span>$</span></h4>
                                                            <p>Loves or pursues or desires obtain pain of itself is pain occasionally.</p>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> 4-5 Weeks from to finish</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Data sprint</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Results revision</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> 20 Days of support</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> Organisational Strategy</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <Link href="#" className="theme-btn two">Get Now</Link >
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
                                                            <h4>349<span>$</span></h4>
                                                            <p>Loves or pursues or desires obtain pain of itself is pain occasionally.</p>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> 4-5 Weeks from to finish</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Data sprint</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Results revision</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> 20 Days of support</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Organisational Strategy</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                            </ul>
                                                            <Link href="#" className="theme-btn two">Get Now</Link >
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
                                                            <h2>Bronze Package </h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>349<span>$</span></h4>
                                                            <p>Loves or pursues or desires obtain pain of itself is pain occasionally.</p>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> 4-5 Weeks from to finish</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Data sprint</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Results revision</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> 20 Days of support</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                                <li>
                                                                    <span> Organisational Strategy</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link >
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
                                                            <h4>549<span>$</span></h4>
                                                            <p>Loves or pursues or desires obtain pain
                                                                of itself is pain occasionally.
                                                            </p>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> 4-5 Weeks from to finish</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Data sprint</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Results revision</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> 20 Days of support</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Organisational Strategy</span>
                                                                    <i className="fa fa-times" />
                                                                </li>
                                                            </ul>
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="price_plan_box style_one tag_enables ">
                                                    <div className="tag">Popular</div>
                                                    <div className="inner_box">
                                                        <div className="top">
                                                            <h2>Gold <br /> Package</h2>
                                                            <p>Pricing plan for startup company</p>
                                                        </div>
                                                        <div className="mid">
                                                            <h4>949<span>$</span></h4>
                                                            <p>Loves or pursues or desires obtain pain
                                                                of itself is pain occasionally.
                                                            </p>
                                                        </div>
                                                        <div className="bottom">
                                                            <ul>
                                                                <li>
                                                                    <span> 4-5 Weeks from to finish</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Data sprint</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Results revision</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> 20 Days of support</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                                <li>
                                                                    <span> Organisational Strategy</span>
                                                                    <i className="fa fa-check" />
                                                                </li>
                                                            </ul>
                                                            <Link href="#" className="theme-btn two">
                                                                Get Now
                                                            </Link >
                                                        </div>
                                                    </div>
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
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
