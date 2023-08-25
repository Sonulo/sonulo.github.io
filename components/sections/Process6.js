import Link from "next/link"
export default function Process6() {
    return (
        <>
            <section className="process-section mr_top_minus_100 position-relative z_99">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 rounded_top_left_30 pd_top_50 pd_left_50 pd_right_50 pd_bottom_50 bg_dark_1 border_light_color">
                            <div className="process_box style_two">
                                <div className="process_box_outer_two">
                                    <div className="content_box clearfix">
                                        <div className="icon">
                                            <div className="img">
                                                <img src="/assets/images/service-ico-n-1.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                        </div>
                                        <h2><Link href="#" className="color_white">Identifiying the Needs</Link ></h2>
                                    </div>
                                    <p className="color_white">Certain circumstances seds owing to the claims duty ourighteous
                                        indignation and so beguiled.</p>
                                    <Link href="#" className="theme-btn two color_white">Read more</Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 pd_zero  bg_light_1">
                            <div className="process_box style_two dark_color pd_top_50 pd_left_50 pd_right_50 pd_bottom_50 bg_op_1">
                                <div className="process_box_outer_two">
                                    <div className="content_box clearfix">
                                        <div className="icon">
                                            <div className="img">
                                                <img src="/assets/images/process-icon-im-1.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                        </div>
                                        <h2><Link href="#"> Preparing a Job Description </Link ></h2>
                                    </div>
                                    <p>Certain circumstances seds owing to the claims duty ourighteous indignation and so
                                        beguiled.</p>
                                    <Link href="#" className="theme-btn two">Read more</Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 rounded_bottom_right_30 pd_top_50 pd_left_50 pd_right_50 pd_bottom_50 bg_dark_2">
                            <div className="process_box style_two">
                                <div className="process_box_outer_two">
                                    <div className="content_box clearfix">
                                        <div className="icon">
                                            <div className="img">
                                                <img src="/assets/images/service-ico-n-2.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                        </div>
                                        <h2><Link href="#" className="color_white"> Find a Talented Candidate</Link ></h2>
                                    </div>
                                    <p className="color_white">Certain circumstances seds owing to the claims duty ourighteous
                                        indignation and so beguiled.</p>
                                    <Link href="#" className="theme-btn two">Read more</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
