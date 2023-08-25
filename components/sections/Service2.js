import Link from "next/link"
export default function Service2() {
    return (
        <>
            <section className="service-section-one bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="title_all_box style_one text-center dark_color">
                            <div className="title_sections">
                                <div className="before_title"> Check Out </div>
                                <h2>Customer Service Section</h2>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="invisible_normal_spacing" />
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_four dark_color">
                                <div className="service_content">
                                    <div className="image_box">
                                        <img src="/assets/images/projects/project-6-img.jpg" className="img-fluid" alt="Service Image" />
                                        <span className="icon-video-player" />
                                    </div>
                                    <div className="content_inner">
                                        <h2><Link href="#">Chat With a Live</Link ></h2>
                                        <p>Live Chat</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_four dark_color">
                                <div className="service_content">
                                    <div className="image_box">
                                        <img src="/assets/images/about/about-12.jpg" className="img-fluid" alt="Service Image" />
                                        <span className="icon-businessman-1" />
                                    </div>
                                    <div className="content_inner">
                                        <h2><Link href="#">Ask Professionals</Link ></h2>
                                        <p>our Team</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_four dark_color">
                                <div className="service_content">
                                    <div className="image_box">
                                        <img src="/assets/images/blog/blog-image-10.jpg" className="img-fluid" alt="Service Image" />
                                        <span className=" icon-development" />
                                    </div>
                                    <div className="content_inner">
                                        <h2><Link href="#">Support to Grow</Link ></h2>
                                        <p>User Guides</p>
                                    </div>
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
