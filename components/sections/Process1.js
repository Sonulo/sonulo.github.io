import Link from "next/link"
export default function Process1() {
    return (
        <>
            <section className="process" id="process">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="title_all_box style_one  text-center dark_color">
                            <div className="title_sections">
                                <div className="before_title">
                                    The Steps of
                                </div>
                                <h2>Recruitment Process</h2>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="process_box style_two dark_color">
                                <div className="process_box_outer_two">
                                    <div className="number">
                                        Step 01
                                    </div>
                                    <div className="content_box clearfix">
                                        <div className="icon">
                                            <div className="img">
                                                <img src="/assets/images/service-ico-3.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                        </div>
                                        <h2><Link href="#" > Identifiying the Needs</Link >
                                        </h2>
                                    </div>
                                    <p>Holds in these matters principles all selection right rejects.</p>
                                    <Link href="#" className="theme-btn two">Read more</Link >
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="process_box style_two dark_color">
                                <div className="process_box_outer_two">
                                    <div className="number">
                                        Step 02
                                    </div>
                                    <div className="content_box clearfix">
                                        <div className="icon">
                                            <div className="img">
                                                <img src="/assets/images/process-icon-im-1.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                        </div>
                                        <h2><Link href="#" > Preparing a Job Description
                                        </Link ></h2>
                                    </div>
                                    <p> Frequently occur that’s pleasures in have to repudiated.</p>
                                    <Link href="#" className="theme-btn two"> Read more </Link >
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="process_box style_two dark_color">
                                <div className="process_box_outer_two">
                                    <div className="number">
                                        Step 03
                                    </div>
                                    <div className="content_box clearfix">
                                        <div className="icon">
                                            <div className="img">
                                                <img src="/assets/images/service-ico-2.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                        </div>
                                        <h2><Link href="#" > Find a Talented
                                            Candidate</Link ></h2>
                                    </div>
                                    <p> Fault with man who choose enjoy a annoying consequences. </p>
                                    <Link href="#" className="theme-btn two"> Read more </Link >
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="process_box style_two dark_color">
                                <div className="process_box_outer_two">
                                    <div className="number">
                                        Step 04
                                    </div>
                                    <div className="content_box clearfix">
                                        <div className="icon">
                                            <div className="img">
                                                <img src="/assets/images/process-icon-im-2.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                        </div>
                                        <h2><Link href="#" > Screening and Shortlisting
                                        </Link >
                                        </h2>
                                    </div>
                                    <p> Holds in these matters principles all selection right rejects.</p>
                                    <Link href="#" className="theme-btn two"> Read more </Link >
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
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
