import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function Process2() {
    return (
        <>
            <section className="process-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">
                                    <div className="before_title">The Steps of</div>
                                    <h2>Recruitment Process</h2>
                                    <p>
                                        Keep rising employee health care costs down. An employer's total benefit costs <br /> can be
                                        as much as 40 percent of the company's operating budget.
                                    </p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three left">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/service-ico-3.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Identifiying the Needs</Link ></h2>
                                        <p>Holds in these matters principles all selection right rejects.</p>
                                    </div>
                                    <div className="number">
                                        <h6>01</h6>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_top_30" />
                            {/*===============spacing==============*/}
                            <div className="divider_1" />
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three left">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/process-icon-im-1.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2> <Link href="#" >
                                            Preparing Job Description </Link >
                                        </h2>
                                        <p> Our unique approach locates skill based industry professionals</p>
                                    </div>
                                    <div className="number">
                                        <h6> 02</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                            <div className="image_boxes style_three  border_yes ">
                                <img src="/assets/images/video-box-img-1.jpg" className="background_image" alt="image" />
                                <div className="video_box">
                                    <VideoBox />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three right">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/service-ico-2.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Find Talented Candidate</Link ></h2>
                                        <p>Fault with man who choose enjoy a annoying consequences.</p>
                                    </div>
                                    <div className="number">
                                        <h6>03</h6>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_top_30" />
                            {/*===============spacing==============*/}
                            <div className="divider_1" />
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three right">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/process-icon-im-2.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Screening &amp; Shortlisting</Link ></h2>
                                        <p>Professional checks as well as a local records reference check</p>
                                    </div>
                                    <div className="number">
                                        <h6>04</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_75" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
