import VideoBox from '@/components/elements/VideoBox';
import Layout from '@/components/layout/Layout';

export default function ElementCta() {
    return (
        <>
            <Layout breadcrumbTitle="Call to Action">
                <div className="no-container">
                    <div className="no-row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            {/*-type-one*/}
                            <section className="creote-link-box">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0">
                                            <div className="link_box_contents style_one">
                                                <div className="link_content_bx">
                                                    <div className="image_box">
                                                        <img decoding="async" src="../assets/images/cal-img.png" alt="img" />
                                                    </div>
                                                    <div className="con_box">
                                                        <h2>For More Information About Our Recruitment Services</h2>
                                                        <a href="#">Get Appointment <i className="icon-right-arrow-long" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="link_box_contents style_two">
                                                <div className="link_content_bx">
                                                    <div className="con_box">
                                                        <h2>For More Information About Our Recruitment Services</h2>
                                                        <a href="#">Get Appointment <i className="icon-right-arrow-long" /></a>
                                                    </div>
                                                    <div className="image_box">
                                                        <img decoding="async" src="../assets/images/cal-img.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*-type-one*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*-type-two*/}
                            <section className="call-to-action-section">
                                <div className="call_to_action style_one">
                                    <div className="image">
                                        <img src="../assets/images/sliders/slider-1-2.jpg" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="auto-container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="left_content">
                                                    <div className="main_content">
                                                        <div className="video_box">
                                                            <VideoBox />
                                                        </div>
                                                        <h6>Need Some Help?</h6>
                                                        <h1>Need Some Help?</h1>
                                                        <p>Whether you’re stuck or just want some tips on where to start, hit up our experts anytime.</p>
                                                        <div className="bottom_content">
                                                            <div className="button_content">
                                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn three">Contact us<i className="icon-right-arrow-long" /></a>
                                                            </div>
                                                            <div className="call_content">
                                                                <span className="icon-phone-call1 icon" />
                                                                <div className="content_bx">
                                                                    <h2>Contact Us Soon</h2>
                                                                    <p>creote@support.com &amp; 16599349993</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*-type-two*/}
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*-type-three-*/}
                            <section className="call-to-action-section">
                                <div className="auto-container">
                                    <div className="call_to_action style_two">
                                        <div className="image">
                                            <img src="../assets/images/sliders/slider-1-2.jpg" className="img-fluid" alt="image" />
                                        </div>
                                        <div className="auto-container">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="left_content">
                                                        <div className="main_content">
                                                            <h1>Need Some Help?</h1>
                                                            <div className="bottom_content">
                                                                <div className="call_content">
                                                                    <span className="icon-phone-call1 icon" />
                                                                    <div className="content_bx">
                                                                        <h2>Contact Us Soon</h2>
                                                                        <p>creote@support.com &amp; 16599349993</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="image_right">
                                                        <img decoding="async" src="../assets/images/cal-img.png" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            {/*-type-three-*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
