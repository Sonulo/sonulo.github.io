import dynamic from 'next/dynamic'

const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

import Link from "next/link"
export default function Contact4() {
    return (
        <>
            <section className="contact-box-sections">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="funfacts">
                                {/*===============spacing==============*/}
                                <div className="pd_top_80" />
                                {/*===============spacing==============*/}
                                <div className="row gutter_25px">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="counter-block style_three count-box counted">
                                            <div className="icon_box icon_yes ">
                                                <div className="icon">
                                                    <span className="icon-settings1" />
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <p>It is a long establish fact that a reader distracted</p>
                                                <h6>
                                                    <div className="coun_ter">
                                                        <span className="count-text" data-speed={1500} data-stop={1456}>
                                                            <CounterUp count={1456} time={1} />
                                                        </span>
                                                        <small>+</small>
                                                    </div>
                                                    Cases Done
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="counter-block style_three count-box counted">
                                            <div className="icon_box icon_yes ">
                                                <div className="icon">
                                                    <span className=" icon-service-1-icon" />
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <p>It is a long establish fact that a reader distracted</p>
                                                <h6>
                                                    <div className="coun_ter">
                                                        <span className="count-text" data-speed={1500} data-stop={356}>
                                                            <CounterUp count={356} time={1} />
                                                        </span>
                                                        <small>+</small>
                                                    </div>
                                                    Satisfied clients
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="description_box">
                                    <p>In job gives you handcrafted options such as front admin reviews or email
                                        notifications. It also gives employer management for apps. </p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                                <div className="theme_btn_all color_one">
                                    <Link href="#" className="theme-btn one">Contact us</Link >
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_50" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="contact_form_box_all type_four mr_top_minus_320 mr_md_top_zero">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">
                                            Reach Us
                                        </div>
                                        <h2>Send a message</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="contact_form_box_inner simple_form">
                                    <div className="contact_form_shortcode">
                                        <form action="#" method="post" className="wpcf7-form init" noValidate="novalidate" data-status="init">
                                            <div className="row gutter_15px">
                                                <div className="col-lg-6">
                                                    <label> Your name<br />
                                                        <span className="wpcf7-form-control-wrap" data-name="your-name"><input type="text" name="your-name" size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Name" /></span><br />
                                                        <i className="fa fa-user" /><br />
                                                    </label>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label> Your email<br />
                                                        <span className="wpcf7-form-control-wrap" data-name="your-email"><input type="email" name="your-email" size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Enter Your Email" /></span><br />
                                                        <i className="fa fa-envelope" /><br />
                                                    </label>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label> Phone Number<br />
                                                        <span className="wpcf7-form-control-wrap" data-name="tel-922"><input type="tel" name="tel-922" size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" placeholder="Enter Your Number" /></span><br />
                                                        <i className="fa fa-phone" /><br />
                                                    </label>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label> Subject<br />
                                                        <span className="wpcf7-form-control-wrap" data-name="your-subject"><input type="text" name="your-subject" size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Subject" /></span><br />
                                                        <i className="fa fa-folder" /><br />
                                                    </label>
                                                </div>
                                                <div className="col-lg-12 text_area">
                                                    <label> Your message (optional)<br />
                                                        <span className="wpcf7-form-control-wrap" data-name="your-message"><textarea name="your-message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Enter Your Message" defaultValue={""} /></span><br />
                                                        <i className="fa fa-comments" /><br />
                                                    </label>
                                                </div>
                                                <div className="col-lg-12">
                                                    <input type="submit" defaultValue="Submit" className="wpcf7-form-control has-spinner wpcf7-submit" /><span className="wpcf7-spinner" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="contact_box_content style_two">
                                    <div className="contact_box_inner color_one">
                                        <div className="icon_bx">
                                            <span className="icon-play" />
                                        </div>
                                        <div className="text ">
                                            <h3> General Enquires </h3>
                                            <p>
                                                Phone: +98 060 712 34 &amp; Email: sendmail@qetus.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
