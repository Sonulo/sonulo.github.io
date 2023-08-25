import Link from "next/link"
export default function Process7() {
    return (
        <>
            <section className="process-section">
                {/*===============spacing==============*/}
                <div className="pd_top_60" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="title_all_box style_seven text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Way of Working
                                    </div>
                                    <div className="title">Our Working Process</div>
                                    <div className="small_text_sub">Way of Working</div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_40" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="choose_box type_two">
                                <div className="icon_box">
                                    <div className="icon_image">
                                        <img src="/assets/images/24-hours-support.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <span className="icon_bg_rotate" />
                                </div>
                                <div className="content_box">
                                    <h2>
                                        <Link href="#">
                                            24/7 support
                                        </Link >
                                    </h2>
                                    <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                </div>
                                <div className="step">
                                    <h6 className="step_no">01</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="choose_box type_two">
                                <div className="icon_box">
                                    <div className="icon_image">
                                        <img src="/assets/images/email-marketing.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <span className="icon_bg_rotate" />
                                </div>
                                <div className="content_box">
                                    <h2>
                                        <Link href="#" target="&quot;_blank&quot;">
                                            Quick Response </Link >
                                    </h2>
                                    <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                </div>
                                <div className="step">
                                    <h6 className="step_no">02</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="choose_box type_two">
                                <div className="icon_box">
                                    <div className="icon_image">
                                        <img src="/assets/images/email-marketing.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <span className="icon_bg_rotate" />
                                </div>
                                <div className="content_box">
                                    <h2>
                                        <Link href="#">
                                            Experience Team
                                        </Link >
                                    </h2>
                                    <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                </div>
                                <div className="step">
                                    <h6 className="step_no">03</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="choose_box type_two">
                                <div className="icon_box">
                                    <div className="icon_image">
                                        <img src="/assets/images/email-marketing.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <span className="icon_bg_rotate" />
                                </div>
                                <div className="content_box">
                                    <h2>
                                        <Link href="#">
                                            Smart solutions
                                        </Link >
                                    </h2>
                                    <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                </div>
                                <div className="step">
                                    <h6 className="step_no">04</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_60" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
