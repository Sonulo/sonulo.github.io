import VideoBox from '@/components/elements/VideoBox';
import Layout from '@/components/layout/Layout';

export default function ElementVideo() {
    return (
        <>
            <Layout breadcrumbTitle="Video">
                <div className="no-container">
                    <div className="no-row">
                        <div className="full_width_box">
                            <section className="video-section-btns">
                                {/*===============spacing==============*/}
                                <div className="pd_top_90" />
                                {/*===============spacing==============*/}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                                            <div className="video_btn_all default">
                                                <div className="video_box">
                                                    <VideoBox />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                                            <div className="video_btn_all gray">
                                                <div className="video_box">
                                                    <VideoBox />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                                            <div className="video_btn_all red">
                                                <div className="video_box">
                                                    <VideoBox />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                                            <div className="video_btn_all violet">
                                                <div className="video_box">
                                                    <VideoBox />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                                            <div className="video_btn_all green">
                                                <div className="video_box">
                                                    <VideoBox />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                                            <div className="video_btn_all orange">
                                                <div className="video_box">
                                                    <VideoBox />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_90" />
                                {/*===============spacing==============*/}
                            </section>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
