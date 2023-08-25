import Link from "next/link"
export default function Process3() {
    return (
        <>
            <section className="process-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">The Steps of</div>
                                    <h2>Recruitment Process</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_25" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="process_box style_four dark_color">
                                <div className="process_box_outer_four ">
                                    <div className="icon">
                                        <img src="/assets/images/service-ico-3.png" className="img-fluid svg_image" alt="icon png" />
                                        <h6> 01</h6>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Identifiying the Needs</Link >
                                        </h2>
                                        <p>Holds in these matters principles all selection right rejects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_25" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_four dark_color">
                                <div className="process_box_outer_four ">
                                    <div className="icon">
                                        <img src="/assets/images/process-icon-im-1.png" className="img-fluid svg_image" alt="icon png" />
                                        <h6>02</h6>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Preparing Job
                                            Description</Link ></h2>
                                        <p>Our unique approach locates skill based industry professionals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="process_box style_four dark_color">
                                <div className="process_box_outer_four ">
                                    <div className="icon">
                                        <img src="/assets/images/service-ico-2.png" className="img-fluid svg_image" alt="icon png" />
                                        <h6> 03</h6>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Find Talented Candidate</Link >
                                        </h2>
                                        <p>Fault with man who choose enjoy a annoying consequences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_35" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_four dark_color">
                                <div className="process_box_outer_four ">
                                    <div className="icon">
                                        <img src="/assets/images/process-icon-im-2.png" className="img-fluid svg_image" alt="icon png" />
                                        <h6> 04</h6>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Screening &amp;
                                            Shortlisting</Link ></h2>
                                        <p>Professional checks as well as a local records reference check</p>
                                    </div>
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
