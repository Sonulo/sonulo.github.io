import Layout from '@/components/layout/Layout';

export default function ElementProgress() {
    return (
        <>
            <Layout breadcrumbTitle="Progress">
                <div className="auto-container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <section className="progress-section">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 mb-5 mb-lg-5 mb-xl-0">
                                        <div className="progress_bar">
                                            <h2>Consultion <span>70%</span></h2>
                                            <div className="bar">
                                                <div className="bar-inner count-bar counted" data-percent="70%" style={{ width: '70%' }} />
                                            </div>
                                        </div>
                                        <div className="progress_bar">
                                            <h2>Consultion <span>70%</span></h2>
                                            <div className="bar">
                                                <div className="bar-inner count-bar counted" data-percent="70%" style={{ width: '70%' }} />
                                            </div>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_30" />
                                        {/*===============spacing==============*/}
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="progress_bar style_two">
                                            <div className="progress_new">
                                                <div className="ProgressBar ProgressBar--animateText" data-progress={70}>
                                                    <svg className="ProgressBar-contentCircle" height={170} width={170}>
                                                        <circle className="ProgressBar-background" cx={85} cy={85} r={75} />
                                                        <circle transform="rotate(-90, 85, 85)" className="ProgressBar-circle" cx={85} cy={85} r={75} style={{ strokeDasharray: 471, strokeDashoffset: '141.3px' }} />
                                                    </svg>
                                                </div>
                                                <div className="progress-value">
                                                    <div>
                                                        <h6>Year of  2020 </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2>70%</h2>
                                                <h3>Consultion </h3>
                                                <p>Certain circumstances seds owing to the claims duty
                                                    righteous indignation and so beguiled.
                                                </p>
                                            </div>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_30" />
                                        {/*===============spacing==============*/}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 mb-5 mb-lg-5 mb-xl-0">
                                        <div className="progress_bar style_three">
                                            <h2>Consultion <span>70%</span></h2>
                                            <div className="bar">
                                                <div className="bar-inner count-bar counted" data-percent="70%" style={{ width: '70%' }} />
                                            </div>
                                        </div>
                                        <div className="progress_bar style_three">
                                            <h2>Consultion <span>70%</span></h2>
                                            <div className="bar">
                                                <div className="bar-inner count-bar counted" data-percent="70%" style={{ width: '70%' }} />
                                            </div>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_30" />
                                        {/*===============spacing==============*/}
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="progress_bar style_four color_one">
                                            <div className="progress_new">
                                                <div className="ProgressBar ProgressBar--animateText" data-progress={70}>
                                                    <svg className="ProgressBar-contentCircle" height={140} width={140}>
                                                        <circle className="ProgressBar-background" cx={70} cy={70} r={60} />
                                                        <circle transform="rotate(-90, 70, 70)" className="ProgressBar-circle" cx={70} cy={70} r={60} style={{ strokeDasharray: 471, strokeDashoffset: '141.3px' }} />
                                                    </svg>
                                                </div>
                                                <div className="progress-value">
                                                    <h6>70%</h6>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2>Consultion </h2>
                                            </div>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_30" />
                                        {/*===============spacing==============*/}
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
