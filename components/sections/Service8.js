import Link from "next/link"
export default function Service8() {
    return (
        <>
            <section className="service-section">
                <div className="title-sec bg_dark_3 pd_top_100">
                    <div className="container">
                        <div className="row gutter_30px">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="description_box color_white text-md-end">
                                    <p>In job gives you handcrafted options such as front admin reviews or email
                                        notifications. It also gives employer management for apps. It has panel/dashboard
                                        options for both companies to professional individuals in to social media</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="title_all_box style_one light_color">
                                    <div className="title_sections left">
                                        <div className="before_title">Our Services</div>
                                        <h2>Key Areas of Expertise</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_190" />
                    {/*===============spacing==============*/}
                </div>
                <div className="service-box-wrapper  pd_bottom_60 bg_light_1">
                    <div className="container">
                        <div className="row gutter_30px">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_five dark_color mr_top_minus_160">
                                    <div className="service_content">
                                        <div className="image_box">
                                            <img src="/assets/images/service/service-image-1.png" className="img-fluid" alt="Service Image" />
                                        </div>
                                        <div className="content_inner">
                                            <span className=" icon-human-resources" />
                                            <div className="text_box">
                                                <h2><Link href="#">Recruitment Process</Link >
                                                </h2>
                                                <p>These cases are perfectly simple to distinguish.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_five dark_color mr_top_minus_160 mr_md_top_zero">
                                    <div className="service_content">
                                        <div className="image_box">
                                            <img src="/assets/images/service/service-image-3.png" className="img-fluid" alt="Service Image" />
                                        </div>
                                        <div className="content_inner">
                                            <span className=" icon-audit" />
                                            <div className="text_box">
                                                <h2><Link href="#">Compliance Audits</Link ></h2>
                                                <p>Prevents our being able too what every pleasure.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_five dark_color mr_top_minus_160 mr_md_top_zero">
                                    <div className="service_content">
                                        <div className="image_box">
                                            <img src="/assets/images/service/service-image-5.jpg" className="img-fluid" alt="Service Image" />
                                        </div>
                                        <div className="content_inner">
                                            <span className=" icon-heartbeat" />
                                            <div className="text_box">
                                                <h2><Link href="#">Health Care Benefits</Link ></h2>
                                                <p>Workplace conflict can become a consuming process</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
