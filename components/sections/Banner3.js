import VideoBox from "../elements/VideoBox"

export default function Banner3() {
    return (
        <>
            <section className="banner_section_hm_15">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center light_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Shared Time Human Resources Management
                                    </div>
                                    <div className="title font_70">
                                        Skilled Industry Professionals
                                    </div>
                                    <p>
                                        Duty obligations of business it will frequently occur that pleasures have to
                                        be
                                        repudiated and annoyances accepted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="medium-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image bg_op_1" style={{ background: 'url(/assets/images/about/about-12.jpg)' }}>
                                <div className="video_btn_all">
                                    <div className="video_box">
                                        <VideoBox />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
