
import Link from "next/link"
export default function Footer7({ }) {
    return (
        <>
            <div className="footer_area  footer_seven bg_dark_2" id="footer_contents">
                <div className="footer_widgets_wrap">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="#" target="_blank" >
                                                <img src="assets/images/logo-white.png" alt="logo" />
                                            </Link>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_30" />
                                        {/*===============spacing==============*/}
                                        <div className="social_media_v_one light">
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
                            <div className="col-xl-3 col-lg-5 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="footer_widgets get_in_touch_foo light_color">
                                    <div className="get_intouch_inrfo">
                                        <div className="foo_cont_inner">
                                            <div className="top">
                                                <h6> Location</h6>
                                                <p> 280 Granite Run Drive Suite #200
                                                    Lancaster, PA 1760
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <h6> Contact</h6>
                                                <div className="con_content">
                                                    <h5> Phone :</h5>
                                                    <Link href="/tel:+9806071234"> +98 060 712 34</Link>
                                                </div>
                                                <div className="con_content">
                                                    <h5> Mail Us :</h5>
                                                    <Link href="/tel:sendmail@creote.com"> sendmail@creote.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Company</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <div className="menu-company-container">
                                                <ul id="menu-company" className="menu">
                                                    <li><Link href="#">Home</Link></li>
                                                    <li><Link href="#">About Us</Link></li>
                                                    <li><Link href="#">Contact</Link></li>
                                                    <li><Link href="#">Professionals</Link></li>
                                                    <li><Link href="#">Insights</Link></li>
                                                    <li><Link href="#">HR Solutions</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Subscribe Us Today</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
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
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_50" />
                {/*===============spacing==============*/}
                <div className="footer-copyright">
                    {/*===============spacing==============*/}
                    <div className="divider_w_1" />
                    <div className="pd_top_20" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 mb-3 mb-lg-0 mb-xl-0">
                                <div className="footer_copy_content color_white">
                                    © {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes" className="color_white">Steelthemes.</Link>
                                    All Rights
                                    Reserved.
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="nav_link_v_one text-md-end">
                                    <ul>
                                        <li>
                                            <Link href="#" className="color_white" target="_blank" >Terms Of Use</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white" target="_blank" >Private Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_20" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
