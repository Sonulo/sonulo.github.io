
import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function About2() {
    return (
        <>
            <section className="about-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                            <div className="image_boxes style_one">
                                <div className="image one">
                                    <img src="/assets/images/about/about-5.jpg" className="img" alt="image" />
                                </div>
                                <div className="image two">
                                    <img src="/assets/images/projects/project-detail-img-2.jpg" className="img" alt="image" />
                                    <div className="video_box">
                                        <VideoBox />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 pd_left_40">
                            <div className="pd_left_20">
                                <div className="title_all_box style_two  dark_color">
                                    <div className="title_sections two">
                                        <div className="before_title">Make sense for your business</div>
                                        <h2>The Growing Trend of Outsourcing HR Services</h2>
                                        <div className="description_box">
                                            <p>Countsy provides Finance, Accounting and HR Solutions to venture backed startups.
                                                Through a unique combination</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="extra_content authour_box_two dark_color">
                                    <div className="authour_box_content two">
                                        <div className="image">
                                            <img src="/assets/images/authour-image.png" className="img-fluid authour_image" alt="authour Image" />
                                        </div>
                                        <div className="text">
                                            <h6>Liam Oliver, <span>Founder &amp; CEO of Qetus</span></h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus, luctus
                                                nec
                                                ullamcorper mattis </p>
                                            <img src="/assets/images/signature.png" className="img-fluid sign_image_two" alt="authour Image" />
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                                <div className="description_box">
                                    <p>We also have a number of staff who are recipients and who are currently working
                                        advanced
                                        HR degrees. We are very proud of our long and successful history of organizations
                                        industries .</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                                <div className="theme_btn_all color_one">
                                    <Link href="#" className="theme-btn three">Contact us</Link>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-5 mb-lg-0 mb-xl-0">
                            <div className="icon_box_all style_one">
                                <div className="icon_content icon_centers">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                    </div>
                                    <div className="txt_content">
                                        <h3>
                                            <Link href="#" >Claims of duty</Link>
                                        </h3>
                                        <p>Certain circumstances seds owing to the claims duty our righteous indignation and so
                                            beguiled.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="icon_box_all style_one">
                                <div className="icon_content icon_centers ">
                                    <div className="icon">
                                        <span className="icon-bow-and-arrow" />
                                    </div>
                                    <div className="txt_content">
                                        <h3><Link href="#" >Accepted always</Link></h3>
                                        <p>To take a trivial example, which of us ever undertakes get laborious physical
                                            exercise.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
