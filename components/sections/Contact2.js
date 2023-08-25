import Link from "next/link"
export default function Contact2() {
    return (
        <>
            <section className="contact-section bg_op_1" style={{ background: 'url(/assets/images/contact-bg-6.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="medium-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            {/*===============spacing==============*/}
                            <div className="pd_top_30" />
                            {/*===============spacing==============*/}
                            <div className="title_all_box style_five  dark_color">
                                <div className="title_sections five left">
                                    <div className="before_title">The Steps of</div>
                                    <h2>Recruitment Process</h2>
                                    <p>Keep rising employee health care costs down. An employer's total benefit
                                        costs can be
                                        as much as 40 percent of the company's operating budget.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="content_box_cn style_one">
                                <div className="txt_content">
                                    <h3><Link href="#" >Identifiying the Needs</Link ></h3>
                                    <p>Holds in these matters principles all selection right rejects.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="content_box_cn style_one">
                                <div className="txt_content">
                                    <h3><Link href="#" >Preparing Job Description</Link >
                                    </h3>
                                    <p>Our unique approach locates skill based industry professionals</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="content_box_cn style_one">
                                <div className="txt_content">
                                    <h3><Link href="#" >Find Talented Candidate</Link ></h3>
                                    <p>Fault with man who choose enjoy a annoying consequences.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="content_box_cn style_one">
                                <div className="txt_content">
                                    <h3><Link href="#" >Screening &amp; Shortlisting</Link >
                                    </h3>
                                    <p>Professional checks as well as a local records reference check</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="contact_form_box_all type_two">
                                <div className="contact_form_box_inner">
                                    <img src="/assets/images/contact-man-1.png" alt="image" />
                                    <div className="contact_form_shortcode">
                                        <div className="heading">
                                            <h2>Request <span>Free Consultation</span></h2>
                                        </div>
                                        <div className="_form">
                                            <div role="form" className="wpcf7" id="wpcf7-f2367-p2076-o1" lang="en-US" dir="ltr">
                                                <form action="#" method="post" className="wpcf7-form init" noValidate="novalidate" data-status="init">
                                                    <div className="row">
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
                                                            <input type="submit" defaultValue="Submit" className="wpcf7-form-control has-spinner wpcf7-submit" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_90" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
