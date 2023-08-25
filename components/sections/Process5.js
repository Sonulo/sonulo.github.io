import Link from "next/link"
export default function Process5() {
    return (
        <>
            <section className="process-section">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2" />
                        <div className="col-lg-8">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">The Steps of Recruitment Process</div>
                                    <h2 className="title"> Recruitment Process</h2>
                                    <p>Keep rising employee health care costs down. An employer's total benefit costs can be
                                        as much as 40 percent of the company's operating budget.</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        <div className="col-lg-2" />
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-md-6 pd_zero">
                            <div className="icon_box_all style_nine  border_r_0">
                                <div className="icon_content">
                                    <div className="icon">
                                        <img src="/assets/images/010-job-search.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <div className="text_box">
                                        <h2><Link href="#"> Identifiying the Needs</Link ></h2>
                                        <p>Holds in these matters principles all selection right rejects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-md-6 pd_zero">
                            <div className="icon_box_all style_nine bg_light_2 border_r_0">
                                <div className="icon_content">
                                    <div className="icon">
                                        <img src="/assets/images/process-icon-im-1.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <div className="text_box">
                                        <h2><Link href="#">Preparing Job Description</Link ></h2>
                                        <p>Our unique approach locates skill based industry professionals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-md-6 pd_zero">
                            <div className="icon_box_all style_nine  border_r_0">
                                <div className="icon_content">
                                    <div className="icon">
                                        <img src="/assets/images/service-ico-2.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <div className="text_box">
                                        <h2><Link href="#"> Find Talented Candidate</Link ></h2>
                                        <p>Fault with man who choose enjoy a annoying consequences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-md-6 pd_zero">
                            <div className="icon_box_all style_nine bg_light_2">
                                <div className="icon_content">
                                    <div className="icon">
                                        <img src="/assets/images/process-icon-im-2.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <div className="text_box">
                                        <h2><Link href="#"> Screening &amp; Shortlisting</Link ></h2>
                                        <p>Professional checks as well as a local records reference check</p>
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
