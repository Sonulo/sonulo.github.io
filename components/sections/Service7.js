import Link from "next/link"
export default function Service7() {
    return (
        <>
            <section className="service-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_five text-center dark_color">
                                <div className="title_sections five">
                                    <div className="before_title">Leading</div>
                                    <h2>Effective Solutions</h2>
                                    <p>We work with your company to identify position requirements, implement
                                        recruitment
                                        programs, and <br /> initiate employee assessments that maximize recruitment
                                        efforts</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_15" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row gutter_30px">
                        <div className="col-lg-12">
                            <div className="service_section grid_all three_column  news_wrapper_grid dark_color">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="service_post style_five">
                                            <div className="image_box">
                                                <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-6.jpg" alt="img" />
                                                <div className="gradient" />
                                            </div>
                                            <div className="content_box">
                                                <h2 className="title_service"><Link href="/index/service/talent-management/" >Talent Management</Link ></h2>
                                                <p className="short_desc">Once your company has hired the best
                                                    employees, the next step.
                                                </p>
                                                <Link className="read_more" href="/index/service/talent-management/">
                                                    <i className="icon-right-arrow-long" />Read More</Link >
                                            </div>
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icons" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="service_post style_five">
                                            <div className="image_box">
                                                <img width={500} height={500} src="/assets/images/service/service-image-5.jpg" alt="img" loading="lazy" />
                                                <div className="gradient" />
                                            </div>
                                            <div className="content_box">
                                                <h2 className="title_service"><Link href="/index/service/health-care-benefits/" >Health Care Benefits</Link ></h2>
                                                <p className="short_desc">Workplace conflict can become a costly and
                                                    time-consuming
                                                    process .</p>
                                                <Link className="read_more" href="/index/service/health-care-benefits/"> <i className="icon-right-arrow-long" />Read More</Link >
                                            </div>
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icons" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="service_post style_five">
                                            <div className="image_box">
                                                <img width={500} height={500} src="/assets/images/service/service-image-4.jpg" alt="img" loading="lazy" />
                                                <div className="gradient" />
                                            </div>
                                            <div className="content_box">
                                                <h2 className="title_service"><Link href="/index/service/risk-management/" >Risk Management</Link ></h2>
                                                <p className="short_desc">Mitigate workplace issues before they escalate
                                                    ,Shared Time
                                                    Human.</p>
                                                <Link className="read_more" href="/index/service/risk-management/"> <i className="icon-right-arrow-long" />Read More</Link >
                                            </div>
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icons" />
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

        </>
    )
}
