import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function Video2() {
    return (
        <>
            <section className="video-section">
                <div className="container-fluid pd_zero">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 overflow-hidden pd_zero bg_op_1 rounded_top_right_30 rounded_bottom_right_30" style={{ background: 'url(/assets/images/about/about-2.jpg)' }}>
                            {/*===============spacing==============*/}
                            <div className="pd_top_240" />
                            <div className="pd_top_60" />
                            {/*===============spacing==============*/}
                            <div className="text-center">
                                <div className="video_box">
                                    <VideoBox />
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_240" />
                            <div className="pd_bottom_50" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pd_zero pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                            {/*===============spacing==============*/}
                            <div className="pd_top_110" />
                            {/*===============spacing==============*/}
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Intelligent
                                    </div>
                                    <div className="title"> Human Resources</div>
                                    <p>Our power of choice is untrammelled and when nothing prevents being able to
                                        do what we like best every pleasure.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_5" />
                            {/*===============spacing==============*/}
                            <div className="row align-items-center gutter_25px">
                                <div className="col-lg-7 col-md-12">
                                    <div className="progress_bar">
                                        <h2>Our Growth <span>93%</span></h2>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="93%" style={{ width: '93%' }}>
                                            </div>

                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="progress_bar">
                                        <h2>Income Statement <span>83%</span></h2>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="83%"  style={{ width: '83%' }}/>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="progress_bar">
                                        <h2>Success Stories <span>99%</span></h2>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="99%"  style={{ width: '99%' }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <img src="/assets/images/blog/blog-image-8.jpg" className="img-fluid object-fit-cover-center height_200px rounded_radius" alt="img" />
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_25" />
                            {/*===============spacing==============*/}
                            <div className="row align-items-center gutter_25px">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn two">
                                            Read More
                                        </Link >
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="authour_box_content">
                                        <div className="image">
                                            <img src="/assets/images/sign.png" className="img-fluid sign_image" alt="authour Image" />
                                        </div>
                                        <div className="text">
                                            <h6>Liam Oliver, <span>Founder &amp; CEO of Qetus</span></h6>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_90" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
