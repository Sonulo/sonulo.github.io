import Link from "next/link"
export default function Content6() {
    return (
        <>
            <section className="content-section">
                {/*===============spacing==============*/}
                <div className="pd_top_50" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="title_all_box style_six text-center">
                                <div className="title_sections">
                                    <div className="before_title">
                                        <span className="icon-briefcase icon" />
                                        CHOICES &amp; OCCURS
                                    </div>
                                    <div className="title">Why People Choose us</div>
                                    <p className="description_text">
                                        Explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                                        born and I will give you a complete account of the system.
                                    </p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="choose_box  type_one">
                                <div className="image_box">
                                    <img src="/assets/images/24-hours-support.png" className="img-fluid svg_image" alt="icon png" />
                                </div>
                                <div className="content_box">
                                    <span className="step_no">01</span>
                                    <div className="text_box">
                                        <h2>
                                            <Link href="#">
                                                24/7 support </Link >
                                        </h2>
                                        <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                        <Link href="#" className="read_more type_one">
                                            Read More <span className="icon-arrow-right" />
                                        </Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="choose_box  type_one">
                                <div className="image_box">
                                    <img src="/assets/images/email-marketing.png" className="img-fluid svg_image" alt="icon png" />
                                </div>
                                <div className="content_box">
                                    <span className="step_no">02</span>
                                    <div className="text_box">
                                        <h2>
                                            <Link href="#">
                                                Quick Response </Link >
                                        </h2>
                                        <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                        <Link href="#" className="read_more type_one">
                                            Read More <span className="icon-arrow-right" />
                                        </Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="choose_box  type_one">
                                <div className="image_box">
                                    <img src="/assets/images/team-management.png" className="img-fluid svg_image" alt="icon png" />
                                </div>
                                <div className="content_box">
                                    <span className="step_no">03</span>
                                    <div className="text_box">
                                        <h2>
                                            <Link href="#">
                                                Experience Team </Link >
                                        </h2>
                                        <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                        <Link href="#" className="read_more type_one">
                                            Read More <span className="icon-arrow-right" />
                                        </Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="choose_box  type_one">
                                <div className="image_box">
                                    <img src="/assets/images/solution-1.png" className="img-fluid svg_image" alt="icon png" />
                                </div>
                                <div className="content_box">
                                    <span className="step_no">04</span>
                                    <div className="text_box">
                                        <h2>
                                            <Link href="#">
                                                Smart solutions </Link >
                                        </h2>
                                        <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                        <Link href="#" className="read_more type_one">
                                            Read More <span className="icon-arrow-right" />
                                        </Link >
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
