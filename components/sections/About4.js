
import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function About4() {
    return (
        <>
            <section className="about-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections left">
                                    <div className="before_title"> Intelligent </div>
                                    <h2 className="title"> Human Resources</h2>
                                    <p> Our power of choice is untrammelled and when nothing prevents being able to
                                        do what we like best every pleasure.</p>
                                    <p>The great explorer of the truth, the master-builder of human happiness no one
                                        rejects dislikes avoids pleasure itself
                                        because it is pleasure but because know who do not those how to pursue
                                        pleasures rationally encounter consequences that are extremely
                                        painful desires to obtain.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_10" />
                            {/*===============spacing==============*/}
                            <div className="row gutter_15px">
                                <div className="col-lg-4 col-md-12">
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn three">Contact Us</Link>
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
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="extra_content download_docs dark_color">
                                <div className="download_box_content">
                                    <Link href="#" download>Download our latest presentation <i className="icon-download-symbol" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-10 col-md-12">
                            <div className="image_boxes style_five">
                                <div className="image_box one">
                                    <img src="/assets/images/about/about-11.jpg" className="img-fluid" alt="img" />
                                    <div className="video_box_null">
                                        <VideoBox />
                                    </div>
                                </div>
                                <div className="image_box two">
                                    <img src="/assets/images/about/about-2.jpg" className="img-fluid two" alt="img" />
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
