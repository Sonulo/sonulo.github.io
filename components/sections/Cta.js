import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function Cta() {
    return (
        <>
            <section className="call-to-action">
                <div className="call_to_action style_one">
                    <div className="image">
                        <img src="/assets/images/cal-action-bg-2.jpg" className="img-fluid" alt="image" />
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
                                        <h1>Payroll Management</h1>
                                        <p>Our power of choice is untrammelled and when nothing prevents our able to do what we
                                            like best every pleasure is to be welcomed and occur that pleasures have to be
                                            repudiated.</p>
                                        <div className="bottom_content">
                                            <div className="button_content">
                                                <Link href="#" className="theme-btn three">
                                                    Contact us<i className="icon-right-arrow-long" />
                                                </Link >
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

        </>
    )
}
