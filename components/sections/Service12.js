import Link from "next/link"
export default function Service12() {
    return (
        <>
            <section className="service-section">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 m-auto">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Leading</div>
                                    <h2>Effective Solutions</h2>
                                    <p>We work with your company to identify position requirements, implement recruitment
                                        programs, and initiate employee assessments that maximize recruitment efforts</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_15" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row gutter_30px">
                        <div className="col-lg-12">
                            <div className="grid_all three_column">
                                <div className="grid_show_case grid_layout clearfix" style={{ position: 'relative', height: 490 }}>
                                    <div className="grid_box _card" style={{ position: 'absolute', left: '0%', top: 0 }}>
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
                                    <div className="grid_box _card" style={{ position: 'absolute', left: '33.3292%', top: 0 }}>
                                        <div className="service_post style_three">
                                            <div className="image_box">
                                                <img width={500} height={500} src="/assets/images/service/service-image-5.jpg" alt="img" loading="lazy" />
                                            </div>
                                            <div className="text_box">
                                                <div className="text_box_inner">
                                                    <span className="icon icon-thumbs-up icon" />
                                                    <h2 className="title_service"><Link href="/index/service/health-care-benefits/" >Health Care Benefits</Link ></h2>
                                                    <p className="short_desc">Workplace conflict can become a costly and
                                                        time-consuming
                                                        process .</p>
                                                    <Link className="read_more" href="/index/service/health-care-benefits/"> Read
                                                        More<i className="icon-right-arrow-long" /></Link >
                                                    <div className="bg_icon">
                                                        <span className="icon icon-thumbs-up icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card" style={{ position: 'absolute', left: '66.6584%', top: 0 }}>
                                        <div className="service_post style_three">
                                            <div className="image_box">
                                                <img width={500} height={500} src="/assets/images/service/service-image-4.jpg" alt="img" loading="lazy" />
                                            </div>
                                            <div className="text_box">
                                                <div className="text_box_inner">
                                                    <span className="icon icon-thumbs-up icon" />
                                                    <h2 className="title_service"><Link href="/index/service/risk-management/" >Risk Management</Link ></h2>
                                                    <p className="short_desc">Mitigate workplace issues before they escalate ,Shared
                                                        Time
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
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
