import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function Content3() {
    return (
        <>
            <section className="content-section">
                <div className="row">
                    <div className="col-xxl-5 col-xl-4 col-lg-4 col-md-12 pd_zero bg_op_1 text-center" style={{ backgroundImage: 'url(/assets/images/banner-four-bg.jpg)' }}>
                        <div className="video_btn_all">
                            {/*===============spacing==============*/}
                            <div className="pd_top_200" />
                            <div className="pd_top_70" />
                            {/*===============spacing==============*/}
                            <div className="video_box">
                                <VideoBox />
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-12 bg_op_1" style={{ backgroundImage: 'url(/assets/images/home-10-content-1.jpg)' }}>
                        <div className="row">
                            <div className="col-xxl-1 col-xl-1 col-md-12" />
                            <div className="col-xxl-9 col-xl-9 col-md-12">
                                <div className="content-wrapper">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_80" />
                                    {/*===============spacing==============*/}
                                    <div className="title_all_box style_one light_color">
                                        <div className="title_sections left">
                                            <div className="before_title">Free Forever Attendance</div>
                                            <h2>Reduce Cost and Limit Liability with HR Solutions</h2>
                                            <p>When you work with HR Solutions, you get the best. We provide adaptable solutions
                                                that
                                                allow you to be a part of the entire process</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="row gutter_15px">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="icon_box_all style_seven light_color">
                                                <div className="icon_content">
                                                    <div className="icon">
                                                        <span className="icon-dollar" />
                                                    </div>
                                                    <div className="text_box">
                                                        <h2><Link href="#" > Employee Compensation</Link >
                                                        </h2>
                                                        <p>Holds in these matters principles selection right rejects.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="icon_box_all style_seven light_color">
                                                <div className="icon_content">
                                                    <div className="icon">
                                                        <span className="icon-pharmacy" />
                                                    </div>
                                                    <div className="text_box">
                                                        <h2><Link href="#" > Health Care Benefits</Link >
                                                        </h2>
                                                        <p>The great explorer of the truth the master builders human happiness.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_30" />
                                    {/*===============spacing==============*/}
                                    <div className="row gutter_15px">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="theme_btn_all color_one">
                                                <Link href="#" className="theme-btn one">Contact us</Link >
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_30" />
                                            {/*===============spacing==============*/}
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12">
                                            <div className="extra_content authour_box light_color">
                                                <div className="authour_box_content">
                                                    <div className="image">
                                                        <img src="/assets/images/signature.png" className="img-fluid sign_image" alt="authour Image" />
                                                    </div>
                                                    <div className="text">
                                                        <h6>Liam Oliver, Founder &amp; CEO of Qetus
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_70" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-md-12" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
