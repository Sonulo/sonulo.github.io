import Countdown from '@/components/elements/Countdown';
import Layout from '@/components/layout/Layout';

export default function ElementCount() {
    const currentTime = new Date();
    return (
        <>
            <Layout breadcrumbTitle="Countdown">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            <section className="creote-coming-soon bg_dark_2">
                                {/*===============spacing==============*/}
                                <div className="mr_top_80" />
                                <div className="pd_top_80" />
                                {/*===============spacing==============*/}
                                <div className="container">
                                    <div className="row">
                                        <div className="counter_section">
                                            <div className="upper_section">
                                                <div className="logo_sec">
                                                    <a href="../index.html" target="_blank" rel="nofollow"><img decoding="async" src="../assets/images/logo-white-1.png" alt="logo" /></a>
                                                </div>
                                                <div className="title">
                                                    <h2>We are here with a new concept</h2>
                                                    <p>Idea of denouncing pleasure and praising pain was born &amp; we will give
                                                        you  a complete account of system.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="Countdown-timer">
                                                <div className="countdown">
                                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_60" />
                                <div className="mr_bottom_80" />
                                {/*===============spacing==============*/}
                            </section>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
