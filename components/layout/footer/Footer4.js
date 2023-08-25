
import Link from "next/link"

export default function Footer4({ }) {
    return (
        <>
            <div className="footer_area footer_four bg_dark_3">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="footer_widgets_wrap">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                                <div className="footer_contact_form light_c type_one">
                                    <div className="form_box_foo">
                                        <h2> Contact Us</h2>
                                        <div className="contact_form_shortcode">
                                            <div role="form" className="wpcf7" id="wpcf7-f1763-o1" lang="en-US" dir="ltr">
                                                <div className="screen-reader-response">
                                                    <p role="status" aria-live="polite" aria-atomic="true" />
                                                    <ul />
                                                </div>
                                                <form action="#" method="post" className="wpcf7-form init" noValidate="novalidate" data-status="init">
                                                    <p><label><br />
                                                        <span className="wpcf7-form-control-wrap" data-name="your-name"><input type="text" name="your-name" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Name" /></span> </label>
                                                    </p>
                                                    <p><label><br />
                                                        <span className="wpcf7-form-control-wrap" data-name="your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Enter Your Mail" /></span> </label>
                                                    </p>
                                                    <p><label><br />
                                                        <span className="wpcf7-form-control-wrap" data-name="your-subject"><input type="text" name="your-subject" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Subject" /></span> </label>
                                                    </p>
                                                    <p>
                                                        <input type="submit" defaultValue="Submit" className="wpcf7-form-control has-spinner wpcf7-submit" />
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                                {/*===============spacing==============*/}
                                <div className="pd_top_30" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Informations</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets clearfix navigation_foo light_color style_three">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <div className="left">
                                                <div className="menu-information-container">
                                                    <ul>
                                                        <li><Link href="#">How it’s Work</Link></li>
                                                        <li><Link href="#">Partners</Link></li>
                                                        <li><Link href="#">Testimonials</Link></li>
                                                        <li><Link href="#">Key Areas</Link></li>
                                                        <li><Link href="#">Case Studies</Link></li>
                                                        <li><Link href="#">Pricing</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="menu-essentials-container">
                                                    <ul>
                                                        <li><Link href="#">Careers</Link></li>
                                                        <li><Link href="#">Infrastructure</Link></li>
                                                        <li><Link href="#">Client Support</Link></li>
                                                        <li><Link href="#">Privacy Policy</Link></li>
                                                        <li><Link href="#">Terms of Use</Link></li>
                                                        <li><Link href="#">Sitemap</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                {/*===============spacing==============*/}
                                <div className="pd_top_30" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Subscribe Us Today</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets foo_subscribe light_color style_one">
                                    <div className="item_subscribe with_text">
                                        <p>Subscribe Us &amp; Recive Our Offers and Updates i Your Inbox Directly.</p>
                                        <div className="shortcodes">
                                            <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                    <input type="submit" defaultValue="Sign up" />
                                                </div>
                                            </form>
                                        </div>
                                        <p>* We do not share your email id</p>
                                    </div>
                                </div>
                                <div className="social_media_v_one">
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
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
                <div className="footer-copyright bg_dark_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_15" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="footer_copy_right style_two">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 mb-2 mb-lg-0 mb-xl-0">
                                    <div className="footer_copy_content color_white">
                                        © {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes" className="color_white">Steelthemes.</Link> All Rights
                                        Reserved.
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="footer_copy_content_right text-md-end">
                                        <div className="nav_link_v_one">
                                            <ul>
                                                <li>
                                                    <Link href="#" target="_blank" className="color_white">Terms Of User</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" target="_blank" className="color_white">Support</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" target="_blank" className="color_white">Private Policy</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_10" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
