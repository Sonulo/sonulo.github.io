import Link from "next/link"
export default function Feature() {
    return (
        <>
            <section className="feature-section">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_seven text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Features
                                    </div>
                                    <div className="small_text_sub">Features</div>
                                    <div className="title"> Take Your Life to a New Level</div>
                                    <p className="description_text">
                                        We can help you create positive and permanent changes in your life.<br />
                                        Let’s Create Something new and awesome Togeather.
                                    </p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon_box_new_box type_two ">
                                <span className="borders" />
                                <div className="icon_box">
                                    <img src="/assets/images/configuration.png" className="img-fluid svg_image" alt="icon png" />
                                    <span className="icon_bg_rotate" />
                                </div>
                                <div className="content">
                                    <h2>
                                        <Link href="#">Definitive Expertise</Link >
                                    </h2>
                                    <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                    <Link href="#" className="read_more type_two">
                                        Read More <span className="icon-arrow-right" />
                                    </Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon_box_new_box type_two ">
                                <span className="borders" />
                                <div className="icon_box">
                                    <img src="/assets/images/configuration.png" className="img-fluid svg_image" alt="icon png" />
                                    <span className="icon_bg_rotate" />
                                </div>
                                <div className="content">
                                    <h2>
                                        <Link href="#">Definitive Expertise</Link >
                                    </h2>
                                    <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                    <Link href="#" className="read_more type_two">
                                        Read More <span className="icon-arrow-right" />
                                    </Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon_box_new_box type_two ">
                                <span className="borders" />
                                <div className="icon_box">
                                    <img src="/assets/images/configuration.png" className="img-fluid svg_image" alt="icon png" />
                                    <span className="icon_bg_rotate" />
                                </div>
                                <div className="content">
                                    <h2>
                                        <Link href="#">Definitive Expertise</Link >
                                    </h2>
                                    <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>
                                    <Link href="#" className="read_more type_two">
                                        Read More <span className="icon-arrow-right" />
                                    </Link >
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
