import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function Content1() {
    return (
        <>
            <section className="content-section bg_dark_1">
                <div className="row no-space">
                    <div className="col-xxl-1 hidden-xl hidden-lg col-lg-1" />
                    <div className="col-xxl-5 col-xl-8 col-lg-12">
                        <div className="video-wrapper">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <div className="title_all_box style_one light_color">
                                <div className="title_sections">
                                    <div className="before_title color_white">Free Forever Attendance</div>
                                    <h2 className="title">Reduce Cost and Limit Liability with HR Solutions</h2>
                                    <p>When you work with HR Solutions, you get the best. We provide adaptable solutions that
                                        allow you to be a part of the entire process</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_15" />
                            {/*===============spacing==============*/}
                            <div className="row gutter_20px">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="icon_box_all style_seven light_color">
                                        <div className="icon_content">
                                            <div className="icon">
                                                <span className="icon-dollar" />
                                            </div>
                                            <div className="text_box">
                                                <h2><Link href="#" > Employee Compensation</Link ></h2>
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
                                                <h2><Link href="#" > Health Care Benefits</Link ></h2>
                                                <p>The great explorer of the truth the master builders human happiness.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <div className="row gutter_20px">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="theme_btn_all color_two">
                                        <Link href="#" className="theme-btn one primary-color-two">Read
                                            More</Link >
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_30" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
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
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_30" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_50" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                    <div className="col-xxl-1 hidden-xl hidden-lg" />
                    <div className="col-xxl-5 col-xl-4 col-lg-12 bg_op_1 text-center" style={{ backgroundImage: 'url(/assets/images/about/about-11.jpg)' }}>
                        <div className="video_btn_all">
                            {/*===============spacing==============*/}
                            <div className="pd_top_170" />
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <div className="video_box">
                                <VideoBox />
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_80" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
