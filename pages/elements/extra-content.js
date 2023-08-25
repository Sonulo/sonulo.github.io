import Layout from '@/components/layout/Layout';

export default function ElementExtra() {
    return (
        <>
            <Layout breadcrumbTitle="Extra">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_70" />
                            {/*===============spacing==============*/}
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="extra_content authour_box dark_color">
                                        <div className="authour_box_content">
                                            <div className="image">
                                                <img src="../assets/images/signature.png" className="img-fluid sign_image" alt="authour Image" />
                                            </div>
                                            <div className="text">
                                                <h6>Liam Oliver,  Founder &amp; CEO of Qetus</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="extra_content image_with_content dark_color">
                                        <div className="simple_image">
                                            <img decoding="async" src="../assets/images/authour-image.png" alt="img" />
                                            <h2> Since 1998, <br /> Operating in Birmingham.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="extra_content authour_box_two dark_color">
                                        <div className="authour_box_content two">
                                            <div className="image">
                                                <img decoding="async" src="../assets/images/authour-image.png" className="img-fluid authour_image" alt="authour Image" />
                                            </div>
                                            <div className="text">
                                                <h6>Liam Oliver,  Founder &amp; CEO of Qetus</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                                                <img decoding="async" src="../assets/images/signature.png" className="img-fluid sign_image_two" alt="authour Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="extra_content download_docs dark_color">
                                        <div className="download_box_content">
                                            <a href="#" download>Download our latest presentation<i className="icon-download-symbol" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
