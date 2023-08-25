
import Link from "next/link"
export default function Footer16({ }) {
    return (
        <>
            <div className="footer_area sixteen position-relative pd_left_100 pd_right_100  md_pd_left_15 md_pd_right_15" id="footer_contents">
                <div className="inner_section">
                    <div className="footer_widgets_wrap bg_op_1 rounded_radius" style={{ background: 'url(/assets/images/home-16-footer-bg.jpg)' }}>
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="default-container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="footer_widgets wid_tit style_one">
                                        <div className="fo_wid_title light_color">
                                            <h2>About Company</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="footer_widgets about_company light_color">
                                        <div className="about_company_inner">
                                            <div className="content_box">
                                                <p className="color_white">
                                                    Duty the obligations of business will frequently occur that pleasure
                                                    have too repudiated annoyances endures accepted.
                                                </p>
                                                <div className="consulting">
                                                    <div className="image">
                                                        <img src="assets/images/testi-1.png" className="img-fluid" alt="need help" />
                                                    </div>
                                                    <div className="help_con">
                                                        <h6 className="color_white">Need Help?</h6>
                                                        <h2>
                                                            <Link href="#" className="color_white">Free Consultation </Link>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="footer_widgets wid_tit style_one">
                                        <div className="fo_wid_title light_color">
                                            <h2>Contact Through</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="footer_widgets get_in_touch_foo light_color">
                                        <div className="get_intouch_inrfo">
                                            <div className="foo_cont_inner">
                                                <div className="top">
                                                    <h6> Location</h6>
                                                    <p className="color_white">
                                                        280 Granite Run Drive Suite #200
                                                        Lancaster, PA 1760
                                                    </p>
                                                </div>
                                                <div className="bottom">
                                                    <h6> Contact</h6>
                                                    <div className="con_content">
                                                        <h5> Phone :</h5>
                                                        <Link href="/tel:+98 060 712 34" className="color_white"> +98 060 712 34</Link>
                                                    </div>
                                                    <div className="con_content">
                                                        <h5> Mail Us :</h5>
                                                        <Link href="/mailto:sendmail@creote.com" className="color_white"> sendmail@creote.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-12">
                                    <div className="footer_widgets wid_tit style_two">
                                        <div className="fo_wid_title light_color">
                                            <h2>Informations</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="footer_widgets clearfix">
                                        <div className="list_item_box style_one light_color">
                                            <ul>
                                                <li><Link href="#"> Infrastructure </Link> </li>
                                                <li><Link href="#"> Client Support</Link> </li>
                                                <li><Link href="# "> Privacy Policy</Link> </li>
                                                <li><Link href="/ #"> Terms of Use </Link> </li>
                                                <li><Link href="#"> Sitemap </Link> </li>
                                                <li><Link href="#"> Contact</Link> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <div className="footer_widgets wid_tit style_two">
                                        <div className="fo_wid_title light_color">
                                            <h2>Newsletter</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="footer_widgets foo_subscribe light_color style_one">
                                        <div className="item_subscribe with_text">
                                            <p className="color_white">Subscribe Us &amp; Recive Our Offers and Updates on your
                                                Inbox Directly.</p>
                                            <div className="shortcodes">
                                                <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                    <div className="mc4wp-form-fields">
                                                        <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                        <input type="submit" defaultValue="Sign up" />
                                                    </div>
                                                </form>
                                            </div>
                                            <p className="color_white">* We do not share your email id</p>
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
                        {/*===============spacing==============*/}
                        <div className="pd_top_20" />
                        {/*===============spacing==============*/}
                        <div className="default-container">
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
            </div >
        </>
    )
}
