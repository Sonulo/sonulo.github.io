import Link from "next/link"
export default function Contact8() {
    return (
        <>
            <section className="contact-section bg_op_1" style={{ background: 'url(/assets/images/home-11-footer-bg.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_40" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-9 col-md-12 col-sm-12 col-xs-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                            <div className="title_all_box style_one light_color">
                                <div className="title_sections">
                                    <div className="title">Get the Countsy advantage</div>
                                    <p>Our power of choice is untrammelled and when nothing prevents being able to do what we
                                        like best every pleasure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <div className="theme_btn_all text-end color_two">
                                <Link href="/index/contact/" className="theme-btn one">Get In Touch</Link >
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_30" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
