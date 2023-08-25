import Link from "next/link"
export default function IconBox() {
    return (
        <>
            <section className="icon-box-section position-relative mr_top_minus_90 z_99">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="icon_box_all style_five">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className="icon-support" />
                                    </div>
                                    <small>01</small>
                                    <div className="text_box">
                                        <h2>24/7 Customer support</h2>
                                        <p>The less water you use, the less runoff and wastewater that eventually end
                                            up in the ocean.</p>
                                    </div>
                                    <div className="hover_content">
                                        <div className="content">
                                            <div className="inner">
                                                <p>The less water you use, the less runoff and wastewater that
                                                    eventually end up in the ocean.</p>
                                                <Link href="#" className="read_more">Read More<span className="icon-right-arrow-long" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="icon_box_all style_five">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className="icon-united" />
                                    </div>
                                    <small>02</small>
                                    <div className="text_box">
                                        <h2>Experience Team</h2>
                                        <p>The less water you use, the less runoff and wastewater that eventually end
                                            up in the ocean.</p>
                                    </div>
                                    <div className="hover_content">
                                        <div className="content">
                                            <div className="inner">
                                                <p>The less water you use, the less runoff and wastewater that
                                                    eventually end up in the ocean.</p>
                                                <Link href="#" className="read_more">Read More <span className="icon-right-arrow-long" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                            <div className="icon_box_all style_five">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className="icon-solution" />
                                    </div>
                                    <small>03</small>
                                    <div className="text_box">
                                        <h2>Smart solutions</h2>
                                        <p>The less water you use, the less runoff and wastewater that eventually end
                                            up in the ocean.</p>
                                    </div>
                                    <div className="hover_content">
                                        <div className="content">
                                            <div className="inner">
                                                <p>The less water you use, the less runoff and wastewater that
                                                    eventually end up in the ocean.</p>
                                                <Link href="#" className="read_more">Read More <span className="icon-right-arrow-long" /></Link >
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
