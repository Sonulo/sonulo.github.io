import Layout from '@/components/layout/Layout';

export default function ElementQuotes() {
    return (
        <>
            <Layout breadcrumbTitle="Quotes">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <div className="quotes_box style_one">
                                <div className="icon">
                                    <span className="icon-quote" />
                                </div>
                                <div className="content">
                                    <h6>We work with your company to identify position requirements, implement recruitment programs, and
                                        initiate employee assessments that maximize recruitment efforts
                                    </h6>
                                    <h3>Lamont Shaun</h3>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_60" />
                            {/*===============spacing==============*/}
                            <div className="quotes_box style_two">
                                <div className="top_content">
                                    <div className="auth_img">
                                        <img decoding="async" src="../assets/images/cal-to-action-2.jpg" className="auth_img" alt="authour png" />
                                    </div>
                                    <div className="description_bx">
                                        <p>We work with your company to identify position requirements, implement recruitment programs, and initiate employee assessments that
                                            maximize recruitment efforts Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure.</p>
                                        <div className="icon">
                                            <span className="icon-quote" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Lamont Shaun</h3>
                                    <h6>Ceo</h6>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_60" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
