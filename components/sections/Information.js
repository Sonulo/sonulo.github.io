import Link from "next/link"
export default function Information() {
    return (
        <>
            <section className="information-section">
                <div className="divider_1" />
                {/*===============spacing==============*/}
                <div className="pd_top_35" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-md-6 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="icon_box_all style_seven">
                                <div className="icon_content">
                                    <div className="icon">
                                        <img src="/assets/images/shipped.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <div className="text_box">
                                        <h2><Link href="#" >Free Shipping</Link ></h2>
                                        <p>From all orders over $100</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-md-6 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="icon_box_all style_seven">
                                <div className="icon_content">
                                    <div className="icon">
                                        <img src="/assets/images/exchange.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <div className="text_box">
                                        <h2> <Link href="#" > Free Returns</Link ></h2>
                                        <p>Money within 30 days</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-md-6 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="icon_box_all style_seven">
                                <div className="icon_content">
                                    <div className="icon">
                                        <img src="/assets/images/check.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <div className="text_box">
                                        <h2><Link href="#" > Secure Shopping</Link ></h2>
                                        <p>You're in safe hands</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-md-6">
                            <div className="icon_box_all style_seven">
                                <div className="icon_content">
                                    <div className="icon">
                                        <img src="/assets/images/product-development.png" className="img-fluid svg_image" alt="icon png" />
                                    </div>
                                    <div className="text_box">
                                        <h2><Link href="#" >10,000+ Products</Link ></h2>
                                        <p>Have everything you need</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                <div className="divider_1" />
            </section>

        </>
    )
}
