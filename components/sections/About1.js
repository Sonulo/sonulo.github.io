import Link from "next/link"
export default function About1() {
    return (
        <>
            <section className="about_us_section" id="about">
                {/*===============spacing==============*/}
                <div className="pd_top_100" />
                {/*===============spacing==============*/}
                <div className="container pd_zero">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections left">
                                    <div className="before_title"> Intelligent </div>
                                    <h2> Human Resources</h2>
                                    <p> Our power of choice is untrammelled and when nothing prevents being able to
                                        do what we
                                        like best every pleasure.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                        <div className="number"> 01 </div>
                                    </div>
                                    <div className="content_box">
                                        <h2>
                                            <Link href="#" >Claims of duty</Link>
                                        </h2>
                                        <p> Certain circumstances seds owing to the claims duty ourighteous
                                            indignation and so
                                            beguiled.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                        <div className="number"> 02 </div>
                                    </div>
                                    <div className="content_box">
                                        <h2>
                                            <Link href="#" > Accepted always </Link>
                                        </h2>
                                        <p> To take a trivial example, which of us ever undertakes get laborious
                                            physical
                                            exercise. </p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <div className="signature_wrapper">
                                <div className="row gutter_15px">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="theme_btn_all color_one">
                                            <Link href="#" className="theme-btn two">Read
                                                More</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="extra_content authour_box dark_color">
                                            <div className="authour_box_content">
                                                <div className="image">
                                                    <img src="/assets/images/signature.png" className="img-fluid sign_image" alt="authour Image" />
                                                </div>
                                                <div className="text">
                                                    <h6>Liam Oliver, <span>Founder &amp; CEO of Qetus</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <div className="extra_content download_docs dark_color">
                                <div className="download_box_content">
                                    <Link href="#" download>Download our latest presentation <i className="icon-download-symbol" />
                                    </Link>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="service_wrapper">
                                <div className="move_image_absolute">
                                    <img src="/assets/images/about/about-1-1.png" className="class-fluid" alt="image" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="service_box style_one dark_color">
                                            <div className="service_content">
                                                <div className="image ">
                                                    <img src="/assets/images/service-illu-1.png" className="img-fluid" alt="Service Image" />
                                                </div>
                                                <div className="content_inner">
                                                    <h2>
                                                        <Link href="#"> Innovative HR Solutions </Link>
                                                    </h2>
                                                    <p> Except too obtain some work advantages from it but whom has
                                                        any rights.
                                                    </p>
                                                    <Link href="#" className="read_more"> Read more </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        {/*===============spacing==============*/}
                                        <div className="pd_top_100" />
                                        <div className="pd_top_100 d_md_none" />
                                        {/*===============spacing==============*/}
                                        <div className="service_box style_one dark_color last">
                                            <div className="service_content">
                                                <div className="image ">
                                                    <img src="/assets/images/service-illu-1.png" className="img-fluid" alt="Service Image" />
                                                </div>
                                                <div className="content_inner">
                                                    <h2>
                                                        <Link href="#"> Leadership Development </Link>
                                                    </h2>
                                                    <p> Actual teachings of the great explorer of the truth masters
                                                        human
                                                        happiness.
                                                    </p>
                                                    <Link href="#" className="read_more"> Read more </Link>
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
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>


        </>
    )
}
