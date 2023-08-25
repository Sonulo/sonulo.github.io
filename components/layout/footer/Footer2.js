
import Link from "next/link"

export default function Footer2({ }) {
    return (
        <>
            <div className="footer_area footer_two" id="footer_contents">
                <div className="container">
                    <section className="newsteller mr_bottom_minus_110 style_two" style={{ backgroundImage: 'url(/assets/images/testi-image.jpg)' }}>
                        <div className="auto-container">
                            <div className="inner_stell">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="content">
                                            <h2>Join Our Mailing List</h2>
                                            <p>For receiving our news and updates in your inbox directly. </p>
                                        </div>
                                        <div className="item_scubscribe">
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
                    </section>
                </div>
                <div className="footer_widgets_wrap bg_dark_2">
                    {/*===============spacing==============*/}
                    <div className="pd_top_100" />
                    <div className="pd_top_100" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="#" target="_blank" >
                                                <img src="assets/images/logo-white.png" alt="logo" />
                                            </Link>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="mr_bottom_20" />
                                        {/*===============spacing==============*/}
                                        <div className="content_box">
                                            <p>
                                                Duty the obligations of business will frequently occur that pleasure have too
                                                repudiated annoyances endures accepted.
                                            </p>
                                            <div className="consulting">
                                                <div className="image">
                                                    <img src="assets/images/authour-image.png" alt="need help" />
                                                </div>
                                                <div className="help_con">
                                                    <h6>Need Help?</h6>
                                                    <h2>
                                                        <Link href="#" target="_blank" > Free Consultation</Link>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 hidden-lg" />
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Information</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_box">
                                            <div className="navigation_foo_inner">
                                                <div className="menu-information-container">
                                                    <ul className="menu">
                                                        <li className="menu-item"><Link href="#">How it’s Work</Link></li>
                                                        <li className="menu-item"><Link href="#">Partners</Link></li>
                                                        <li className="menu-item"><Link href="#">Testimonials</Link></li>
                                                        <li className="menu-item"><Link href="#">Key Areas</Link></li>
                                                        <li className="menu-item"><Link href="#">Case Studies</Link></li>
                                                        <li className="menu-item"><Link href="#">Pricing</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Essentials</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li className="menu-item"><Link href="#">Careers</Link></li>
                                                <li className="menu-item"><Link href="#">Infrastructure</Link></li>
                                                <li className="menu-item"><Link href="#">Client Support</Link></li>
                                                <li className="menu-item"><Link href="#">Privacy Policy</Link></li>
                                                <li className="menu-item"><Link href="#">Terms of Use</Link></li>
                                                <li className="menu-item"><Link href="#">Sitemap</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 hidden-lg" />
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
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
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </div>
                <div className="footer_copy_right bg_dark_3">
                    {/*===============spacing==============*/}
                    <div className="pd_top_20" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="footer_copy_content">
                                    © {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes">Steelthemes.</Link> All Rights
                                    Reserved.
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="nav_link_v_one text-md-end">
                                    <ul>
                                        <li>
                                            <Link href="#" target="_blank" >Terms Of Use</Link>
                                        </li>
                                        <li>
                                            <Link href="#" target="_blank" >Private Policy</Link>
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
