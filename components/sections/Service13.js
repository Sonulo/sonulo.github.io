import Link from "next/link"
export default function Service13() {
    return (
        <>
            <section className="service-section bg_op_3" style={{ background: 'url(/assets/images/home-12-service-bg.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_85" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center light_color">
                                <div className="title_sections">
                                    <div className="before_title">Leading</div>
                                    <div className="title">Effective Solutions</div>
                                    <p>We work with your company to identify position requirements, implement recruitment
                                        programs, and <br /> initiate employee assessments that maximize recruitment efforts</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="service_section grid_all three_column dark_color">
                            <div className="grid_show_case grid_layout clearfix">
                                <div className="grid_box _card">
                                    <div className="service_post style_three">
                                        <div className="image_box">
                                            <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-6.jpg" alt="img" />
                                        </div>
                                        <div className="text_box">
                                            <div className="text_box_inner">
                                                <span className="icon icon-thumbs-up icon" />
                                                <h2 className="title_service"><Link href="/index/service/talent-management/" >Talent Management</Link ></h2>
                                                <p className="short_desc">Once your company has hired the best employees, the next
                                                    step.</p>
                                                <Link className="read_more" href="/index/service/talent-management/"> Read More<i className="icon-right-arrow-long" /></Link >
                                                <div className="bg_icon">
                                                    <span className="icon icon-thumbs-up icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid_box _card">
                                    <div className="service_post style_three">
                                        <div className="image_box">
                                            <img width={500} height={500} src="/assets/images/service/service-image-5.jpg" alt="img" loading="lazy" />
                                        </div>
                                        <div className="text_box">
                                            <div className="text_box_inner">
                                                <span className="icon icon-thumbs-up icon" />
                                                <h2 className="title_service"><Link href="/index/service/health-care-benefits/" >Health Care Benefits</Link ></h2>
                                                <p className="short_desc">Workplace conflict can become a costly and time-consuming
                                                    process .</p>
                                                <Link className="read_more" href="/index/service/health-care-benefits/"> Read More<i className="icon-right-arrow-long" /></Link >
                                                <div className="bg_icon">
                                                    <span className="icon icon-thumbs-up icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid_box _card">
                                    <div className="service_post style_three">
                                        <div className="image_box">
                                            <img width={500} height={500} src="/assets/images/service/service-image-4.jpg" alt="img" loading="lazy" />
                                        </div>
                                        <div className="text_box">
                                            <div className="text_box_inner">
                                                <span className="icon icon-thumbs-up icon" />
                                                <h2 className="title_service"><Link href="/index/service/risk-management/" >Risk Management</Link ></h2>
                                                <p className="short_desc">Mitigate workplace issues before they escalate ,Shared Time
                                                    Human.</p>
                                                <Link className="read_more" href="/index/service/risk-management/"> Read More<i className="icon-right-arrow-long" /></Link >
                                                <div className="bg_icon">
                                                    <span className="icon icon-thumbs-up icon" />
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
                <div className="pd_bottom_65" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
