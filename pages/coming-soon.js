import Countdown from "@/components/elements/Countdown"
import Link from "next/link"

export default function ComingSoon() {
    const currentTime = new Date();
    return (
        <>
            <section className="coming-soon bg_op_1" style={{ background: 'url(/assets/images/coming-soon-bg.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_110" />
                <div className="pd_top_110" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="counter_section">
                            <div className="upper_section">
                                <div className="logo_sec">
                                    <Link href="/" ><img decoding="async" src="/assets/images/logo-white-1.png" alt="logo" /></Link>
                                </div>
                                <div className="title">
                                    <h2>We are here with a new concept</h2>
                                    <p>Idea of denouncing pleasure and praising pain was born &amp; we will give
                                        you a complete account of system.
                                    </p>
                                </div>
                            </div>
                            <div className="Countdown-timer">
                                <div className="countdown text-left" data-date="Feb 15 2024 23:59:59">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_110" />
                <div className="pd_bottom_110" />
                {/*===============spacing==============*/}
            </section>
            <section className="subscribe-section bg_dark_1">
                {/*===============spacing==============*/}
                <div className="pd_top_40" />
                {/*===============spacing==============*/}
                <div className="newsteller style_one">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h2>Join Our Mailing List</h2>
                                    <p>For receiving our news and updates in your inbox directly. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="item_scubscribe">
                                    <div className="input_group">
                                        <form className="mc4wp-form" method="post" data-name="Subscibe">
                                            <div className="mc4wp-form-fields">
                                                <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                <input type="submit" defaultValue="Sign up" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_40" />
                {/*===============spacing==============*/}
            </section>
        </>
    )
}