import VideoBox from "../elements/VideoBox"

export default function Contact12() {
    return (
        <>
            <section className="contact-section bg_light_1 pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                <div className="inner_section rounded_radius bg_op_1" style={{ background: 'url(/assets/images/home-16-contact-bg.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="title_all_box style_one light_color">
                                    <div className="title_sections">
                                        <div className="before_title">Just Watch Our Work Process</div>
                                        <h2>Extensive experience across all industries.</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="video_btn_all left">
                                    <div className="video_box color_white">
                                        <VideoBox />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 hidden-lg">
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_80" />
                    {/*===============spacing==============*/}
                </div>
            </section>

        </>
    )
}
