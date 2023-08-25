import Link from "next/link"
export default function Banner1() {
    return (
        <>
            <section className="banner-section bg_op_1" style={{ backgroundImage: 'url(/assets/images/sliders/banner-9.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_100" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 col-md-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Solutions for your business</div>
                                    <h2 className="title_big">Searching for the best HR software for your business?</h2>
                                    <p>Our power of choice is untrammelled and when nothing prevents being able to do what we
                                        like best every pleasure.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="theme_btn_all color_one">
                                <Link href="#" className="theme-btn one">Enroll Now</Link>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-1 hidden-lg" />
                        <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="contact_form_box_all type_five">
                                <div className="contact_form_box_inner simple_form">
                                    <div className="title_all_box style_one dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">We here to help you</div>
                                            <h6 className="font_24">Book Appointment</h6>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_form_shortcode">
                                        <form action="#" method="post" className="wpcf7-form init">
                                            <p>
                                                <label><br />
                                                    <input type="text" name="your-name" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Your Name" /><br />
                                                    <i className="fa fa-user" /><br />
                                                </label>
                                            </p>
                                            <p><label><br />
                                                <input type="email" name="your-email" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Your Email" /><br />
                                                <i className="fa fa-envelope" /><br />
                                            </label>
                                            </p>
                                            <p>
                                                <label><br />
                                                    <input type="text" name="your-subject" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Your Subject" /><br />
                                                    <i className="fa fa-folder" /><br />
                                                </label>
                                            </p>
                                            <p><input type="submit" defaultValue="Submit" /> </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_100" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
