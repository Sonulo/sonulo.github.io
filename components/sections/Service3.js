import Link from "next/link"
export default function Service3() {
    return (
        <>
            <section className="service-section-two bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container pd_zero">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center  dark_color">
                                <div className="title_sections">
                                    <div className="before_title"> Making What’s </div>
                                    <h2>Possible in Human Resource</h2>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="mr_bottom_70" />
                        {/*===============spacing==============*/}
                    </div>
                    <div className="row gutter_15px">
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className="icon-dollar"><i /></span>
                                        <small className="nom">01</small>
                                        <h2><Link href="#">Employee Compensation </Link ></h2>
                                        <p>Holds in these matters principles selection right rejects.</p>
                                        <Link href="#" className="read_more">Read more <i className="icon-right-arrow" /></Link >
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className="icon-pharmacy"><i /></span>
                                        <small className="nom">02</small>
                                        <h2><Link href="#">Health Care Benefits</Link ></h2>
                                        <p>The great explorer of the truth the master builders human happiness.</p>
                                        <Link href="#" className="read_more">Read more <i className="icon-right-arrow" /></Link >
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className="icon-service"><i /></span>
                                        <small className="nom">03</small>
                                        <h2><Link href="#">Talent Management</Link ></h2>
                                        <p>Laborious physo except obtains some advantage from it right.</p>
                                        <Link href="#" className="read_more">Read more <i className="icon-right-arrow" /></Link >
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className=" icon-dollar"><i /></span>
                                        <small className="nom">04</small>
                                        <h2><Link href="#">Risk Management</Link ></h2>
                                        <p>Right to find fault with a mans who chooses enjoy has no annoying.</p>
                                        <Link href="#" className="read_more">Read more <i className="icon-right-arrow" /></Link >
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_50" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
