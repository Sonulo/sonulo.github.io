

import Link from "next/link"
import { useState } from "react"
import VideoBox from "../elements/VideoBox"
export default function About10() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="about-section">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Make sense for your business</div>
                                    <div className="title">Recruitment First HR Solutions can help.</div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_40" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="image_boxes style_two">
                                <img src="/assets/images/shape-1.png" className="background_image" alt="image" />
                                <div className="image one">
                                    <img src="/assets/images/about/about-6.png" className="img-fluid" alt="image" />
                                </div>
                                <div className="image two">
                                    <img src="/assets/images/about/about-7.png" className="img-fluid" alt="image" />
                                    <div className="video_box">
                                        <VideoBox />
                                    </div>
                                </div>
                                <div className="authour_quotes">
                                    <i className="icon-quote" />
                                    <h6>Making What’s Possible in Human Resource</h6>
                                    <p>/ Liam Oliver</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 pd_left_60 md_pd_left_15">
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections left">
                                    <h5 className="title font_20">We take the time to develop a strong working relationship with
                                        you by understanding your needs, your business and your corporate culture.</h5>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_10" />
                            {/*===============spacing==============*/}
                            <div className="description_box">
                                <p>Countsy provides Finance, Accounting and HR Solutions to venture backed startups. Through
                                    a unique combination of an on demand CFO, CPO (Chief People Officer) and technologies.</p>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_15" />
                            {/*===============spacing==============*/}
                            <div className="description_box">
                                <p>We also have a number of staff who are recipients and who are currently working advanced
                                    HR degrees. We are very proud of our long and successful history of organizations
                                    industries .</p>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_25" />
                            {/*===============spacing==============*/}
                            <div className="row gutter_25px">
                                <div className="col-lg-6">
                                    <div className="icon_box_all  style_two">
                                        <div className="icon_content  icon_imgs ">
                                            <div className="icon">
                                                <img src="/assets/images/icon-img-n-1.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h3><Link href="#">Tailored Advice &amp; Support</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon_box_all  style_two">
                                        <div className="icon_content  icon_imgs ">
                                            <div className="icon">
                                                <img src="/assets/images/icon-img-n-2.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h3><Link href="#">Flexible Company Policies</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_15" />
                            {/*===============spacing==============*/}
                            <div className="theme_btn_all color_one">
                                <Link href="#" className="theme-btn one">Download</Link>
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
