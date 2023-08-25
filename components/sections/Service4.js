import Link from "next/link"
export default function Service4() {
    return (
        <>
            <section className="service-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_two text-center dark_color">
                                <div className="title_sections two">
                                    <div className="before_title"> Effective Solutions</div>
                                    <h2>Key Areas of Expertise</h2>
                                    <p>Our power of choice is untrammelled and when nothing prevents <br /> being able to do
                                        what
                                        we like best every pleasure.</p>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="mr_bottom_10" />
                        {/*===============spacing==============*/}
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_post style_one">
                                <div className="image">
                                    <div className="overlay" />
                                    <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-2.png" alt="img" />
                                </div>
                                <div className="service_content icon_yes">
                                    <div className="icon_box">
                                        <span className="icon icon-thumbs-up icon" />
                                    </div>
                                    <h2 className="title_service"><Link href="#" >Employee Relations</Link ></h2>
                                    <p className="short_desc">Indignation sed dislike men who are beguiled and demoralized.</p>
                                    <Link className="read_more" href="#"> Read More<i className="icon-right-arrow-long" /></Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_post style_one">
                                <div className="image">
                                    <div className="overlay" />
                                    <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-3.png" alt="img" />
                                </div>
                                <div className="service_content icon_yes">
                                    <div className="icon_box">
                                        <span className="icon icon-thumbs-up icon" />
                                    </div>
                                    <h2 className="title_service"><Link href="#" >Compliance Audits</Link ></h2>
                                    <p className="short_desc">Prevents our being able too what get like best every pleasure.</p>
                                    <Link className="read_more" href="#"> Read More<i className="icon-right-arrow-long" /></Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_post style_one">
                                <div className="image">
                                    <div className="overlay" />
                                    <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-5.jpg" alt="img" />
                                </div>
                                <div className="service_content icon_yes">
                                    <div className="icon_box">
                                        <span className="icon icon-thumbs-up icon" />
                                    </div>
                                    <h2 className="title_service"><Link href="#" >Health Care Benefits</Link ></h2>
                                    <p className="short_desc">Workplace conflict can become a costly and time-consuming process.
                                    </p>
                                    <Link className="read_more" href="#"> Read More<i className="icon-right-arrow-long" /></Link >
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
