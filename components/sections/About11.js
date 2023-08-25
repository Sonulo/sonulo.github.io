import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function About11() {
    return (
        <>
            <section className="about-section">
                {/*===============spacing==============*/}
                <div className="pd_top_70" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="image_box_new type_one clearfix">
                                <div className="image_one">
                                    <img src="/assets/images/about/about-11.jpg" className="img-fluid height_570px object-fit-cover" alt="img" />
                                    <div className="year_experience">
                                        <h2>10+ Years Of experience</h2>
                                    </div>
                                </div>
                                <div className="video_box video-inner text-center">
                                    <VideoBox />
                                </div>
                                <div className="image_two">
                                    <img src="/assets/images/about/about-9.jpg" className="img-fluid" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="title_all_box style_six  dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        <span className="icon-briefcase icon" />
                                        ABOUT US
                                    </div>
                                    <div className="title"> Take Your Business To The Next Level</div>
                                    <p className="description_text">
                                        Over 20 years of experience we’ll ensure you always get the best
                                        . We serve a clients at every level of their organization we can be most useful,
                                        whether
                                        as a trusted advisor to top trusted our management.
                                    </p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_25" />
                            {/*===============spacing==============*/}
                            <div className="row gutter_25px">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="icon_box_new_box type_one">
                                        <div className="icon_bx">
                                            <img src="/assets/images/idea.png" className="img-fluid svg_image" alt="icon png" />
                                            <span className="icon_bg" />
                                        </div>
                                        <div className="text_box">
                                            <h2><Link href="#">Creative
                                                Work</Link>
                                            </h2>
                                            <p>A creative work is a manifestation of creative effort including fine artwork</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="icon_box_new_box type_one">
                                        <div className="icon_bx">
                                            <img src="/assets/images/solution.png" className="img-fluid svg_image" alt="icon png" />
                                            <span className="icon_bg" />
                                        </div>
                                        <div className="text_box">
                                            <h2><Link href="#">Best
                                                Solution</Link>
                                            </h2>
                                            <p>Consult Solution is a dynamic, multipurpose, elegant and modern corporate and
                                                business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <div className="row gutter_25px">
                                <div className="col-lg-4 col-md-4 col-ms-12">
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn one">
                                            Learn More </Link>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_25" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="image">
                                        <img src="/assets/images/sign.png" className="img-fluid" alt="img" />
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
