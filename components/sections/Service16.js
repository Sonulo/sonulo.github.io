import Link from "next/link"
export default function Service16() {
    return (
        <>
            <section className="service-section">
                {/*===============spacing==============*/}
                <div className="pd_top_90 d_md_none" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections">
                                    <div className="title"> Key Areas of Expertise</div>
                                    <p> Our power of choice is untrammelled and when nothing prevents <br />
                                        being able to do what we like best every pleasure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
                            <div className="theme_btn_all color_one">
                                <Link href="#" className="theme-btn one">
                                    View All Services
                                </Link >
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
                <div className="large-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service_section grid_all four_column">
                                <div className="grid_show_case grid_layout clearfix" style={{ position: 'relative', height: 538 }}>
                                    <div className="grid_box _card">
                                        <div className="service_post style_four">
                                            <div className="image_box">
                                                <img src="/assets/images/service/service-image-6.jpg" className="img-fluid" alt="img" />
                                            </div>
                                            <div className="content_in_box">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icons" />
                                                </div>
                                                <span className="icon icon-thumbs-up bg_im" />
                                                <div className="content_box ">
                                                    <h2 className="title_service"><Link href="/service-details">Talent
                                                        Management</Link ></h2>
                                                    <p className="short_desc">Once your company has hired the best
                                                        employees,
                                                        the next step.</p>
                                                    <Link className="read_more" href="/service-details"> Read
                                                        More<i className="icon-right-arrow-long" /></Link >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="service_post style_four">
                                            <div className="image_box">
                                                <img src="/assets/images/service/service-image-5.jpg" className="img-fluid" alt="img" />
                                            </div>
                                            <div className="content_in_box">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icons" />
                                                </div>
                                                <span className="icon icon-thumbs-up bg_im" />
                                                <div className="content_box ">
                                                    <h2 className="title_service"><Link href="/service-details">Health
                                                        Care Benefits</Link ></h2>
                                                    <p className="short_desc">Workplace conflict can become a costly and
                                                        time-consuming process</p>
                                                    <Link className="read_more" href="/service-details">
                                                        Read More<i className="icon-right-arrow-long" /></Link >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="service_post style_four">
                                            <div className="image_box">
                                                <img src="/assets/images/service/service-image-4.jpg" className="img-fluid" alt="img" />
                                            </div>
                                            <div className="content_in_box">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icons" />
                                                </div>
                                                <span className="icon icon-thumbs-up bg_im" />
                                                <div className="content_box ">
                                                    <h2 className="title_service">
                                                        <Link href="/service-details">
                                                            Risk Management
                                                        </Link >
                                                    </h2>
                                                    <p className="short_desc">
                                                        Mitigate workplace issues before they escalate
                                                        , Shared Time.
                                                    </p>
                                                    <Link className="read_more" href="/service-details">
                                                        Read More <i className="icon-right-arrow-long" />
                                                    </Link >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="service_post style_four">
                                            <div className="image_box">
                                                <img src="/assets/images/service/service-image-3.png" className="img-fluid" alt="img" />
                                            </div>
                                            <div className="content_in_box">
                                                <div className="icon_box">
                                                    <span className="icon icon-thumbs-up icons" />
                                                </div>
                                                <span className="icon icon-thumbs-up bg_im" />
                                                <div className="content_box ">
                                                    <h2 className="title_service">
                                                        <Link href="/service-details">
                                                            Compliance Audits
                                                        </Link >
                                                    </h2>
                                                    <p className="short_desc">
                                                        Prevents our being able too what get like
                                                        best every pleasure.
                                                    </p>
                                                    <Link className="read_more" href="/service-details">
                                                        Read More <i className="icon-right-arrow-long" />
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
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
