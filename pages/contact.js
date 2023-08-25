import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <Layout breadcrumbTitle="Contact">
                <div>
                    <section className="contact-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                                    <div className="contact_form_box_all type_one">
                                        <div className="contact_form_box_inner">
                                            <div className="contact_form_shortcode">
                                                <form id="contact-form">
                                                    <div className="messages" />
                                                    <div className="controls">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Name<br /></label>
                                                                    <input type="text" name="name" placeholder="Your Name *" required="required" data-error="Enter Your Name" />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Email<br /></label>
                                                                    <input type="text" name="email" required="required" placeholder="Email *" data-error="Enter Your Email Id" />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Subject<br /></label>
                                                                    <input type="text" name="subject" required="required" placeholder=" Subject  (Optional)" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Message<br /></label>
                                                                    <textarea name="message" placeholder="Additional Information... (Optional) " rows={3} required="required" data-error="Please, leave us a message." defaultValue={""} />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group mg_top apbtn">
                                                                    <button className="theme_btn" type="submit">Appointment</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pd_left_30">
                                    <div className="title_all_box style_one dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">Contact Info to</div>
                                            <h2>Reach Our Expert Team</h2>
                                            <p>Send a message through given form, If your enquiry is time sensitive please use below
                                                contact details.</p>
                                        </div>
                                    </div>
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className=" icon-placeholder" />
                                            </div>
                                            <div className="contnet">
                                                <h3> Post Address </h3>
                                                <p>
                                                    280 Granite Run Drive Suite #200 Lancaster, PA 1760
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className="icon-phone-call" />
                                            </div>
                                            <div className="contnet">
                                                <h3> General Enquires </h3>
                                                <p>
                                                    Phone: +98 060 712 34 &amp; Email: sendmail@qetus.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className="fa fa-clock-o" />
                                            </div>
                                            <div className="contnet">
                                                <h3> Operation Hours </h3>
                                                <p>
                                                    Mon-Satday: 09.00 to 07.00 (Sunday: Closed)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_40" />
                                    {/*===============spacing==============*/}
                                    <div className="social_media_v_one style_two">
                                        <ul>
                                            <li>
                                                <Link href="#"> <span className="fa fa-facebook" />
                                                    <small>facebook</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#"> <span className="fa fa-twitter" />
                                                    <small>twitter</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#"> <span className="fa fa-skype" />
                                                    <small>skype</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#"> <span className="fa fa-instagram" />
                                                    <small>instagram</small>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="contact-map-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <section className="map-section">
                                        {/*Map Outer*/}
                                        <div className="map-outer">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*-newsteller-*/}
                    <section className="newsteller style_one bg_dark_1">
                        {/*===============spacing==============*/}
                        <div className="pd_top_40" />
                        {/*===============spacing==============*/}
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content">
                                        <h2>Join Our Mailing List</h2>
                                        <p>For receiving our news and updates in your inbox directly. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="item_scubscribe">
                                        <div className="input_group">
                                            <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                    <input type="submit" defaultValue="Sign up" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_40" />
                        {/*===============spacing==============*/}
                    </section>
                </div>

            </Layout>
        </>
    )
}