import Link from "next/link"
export default function Contact9() {
    return (
        <>
            <section className="contact-section bg_op_1 box_shadow_2" style={{ background: 'url(/assets/images/consult-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="image_box mr_top_minus_50">
                                <img src="/assets/images/cosnsult-image.png" className="img-fluid" alt="consult" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <div className="title_all_box style_six  dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        <span className="icon-briefcase icon" />
                                        ANY TIME, ANY WHERE CONSULTING
                                    </div>
                                    <div className="title">Get A Free Consultancy Right Now Here</div>
                                    <p>We help you to see world differently , discover oppurtunities you may never have
                                        imagined.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_0" />
                            {/*===============spacing==============*/}
                            <div className="divider_2" />
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_35" />
                            {/*===============spacing==============*/}
                            <div className="row gutter_25px">
                                <div className="col-lg-4 col-md-12">
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn one">
                                            Contact us
                                        </Link >
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="footer_contact_list dark_color type_one">
                                        <div className="same_contact phone">
                                            <span className="icon-telephone" />
                                            <div className="content">
                                                <h6 className="titles"> Phone</h6>
                                                <Link href="/tel:+(1 800) – 5554400">+(1 800) – 5554400</Link >
                                            </div>
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
            </section>

        </>
    )
}
