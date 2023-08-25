
import Link from "next/link"
export default function Footer15({ }) {
    return (
        <>
            <div className="footer_area fifteen position-relative" id="footer_contents">
                <div className="footer_widgets_wrap">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="large-container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title dark_color">
                                        <h2>Contact Through</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets get_in_touch_foo dark_color">
                                    <div className="get_intouch_inrfo">
                                        <div className="foo_cont_inner">
                                            <div className="top">
                                                <h6> Location</h6>
                                                <p> 280 Granite Run Drive Suite #200
                                                    Lancaster, PA 1760</p>
                                            </div>
                                            <div className="bottom">
                                                <h6> Contact</h6>
                                                <div className="con_content">
                                                    <h5> Phone :</h5>
                                                    <Link href="/tel:+98 060 712 34"> +98 060 712 34</Link>
                                                </div>
                                                <div className="con_content">
                                                    <h5> Mail Us :</h5>
                                                    <Link href="/mailto:sendmail@creote.com"> sendmail@creote.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title dark_color">
                                        <h2>Informations</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix">
                                    <div className="list_item_box style_one">
                                        <ul>
                                            <li><Link href="#"> Infrastructure </Link> </li>
                                            <li><Link href="#"> Client Support</Link> </li>
                                            <li><Link href="#"> Privacy Policy</Link> </li>
                                            <li><Link href="#"> Terms of Use </Link> </li>
                                            <li><Link href="#"> Sitemap </Link> </li>
                                            <li><Link href="#"> Contact</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title dark_color">
                                        <h2>Product</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix">
                                    <div className="list_item_box style_one">
                                        <ul>
                                            <li><Link href="#"> How it’s Work </Link> </li>
                                            <li><Link href="#"> Testimonials</Link> </li>
                                            <li><Link href="#"> HR Solutions </Link> </li>
                                            <li><Link href="#"> Case Studies </Link> </li>
                                            <li><Link href="#"> Partners</Link> </li>
                                            <li><Link href="#"> Key Areas</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title dark_color">
                                        <h2>Links</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix">
                                    <div className="list_item_box style_one">
                                        <ul>
                                            <li><Link href="#"> Home </Link> </li>
                                            <li><Link href="#"> Pricing </Link> </li>
                                            <li><Link href="#"> About us </Link> </li>
                                            <li><Link href="#"> Careers </Link> </li>
                                            <li><Link href="#"> Features</Link> </li>
                                            <li><Link href="#"> Blog</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title dark_color">
                                        <h2>Newsletter</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets foo_subscribe dark_color style_one">
                                    <div className="item_subscribe with_text">
                                        <p>Subscribe Us &amp; Recive Our Offers and Updates on your Inbox Directly.</p>
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
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                </div>
                <div className="footer-copyright">
                    <div className="large-container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-12">
                                <div className="footer_logo">
                                    <Link href="/" className="logo navbar-brand">
                                        <img decoding="async" src="assets/images/logo-default.png" alt="Creote" className="logo_default" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div>
                                    © {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes">Steelthemes.</Link> All Rights
                                    Reserved.
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 text-md-end">
                                <div className="social_media_v_one color_white">
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
                                        <li>
                                            <Link href="#"> <span className="fa fa-youtube" />
                                                <small>youtube</small>
                                            </Link>
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
