
import Link from "next/link"

export default function Footer3({ }) {
    return (
        <>
            <div className="footer_area footer_three bg_dark_3" id="footer_contents">
                {/*===============spacing==============*/}
                <div className="pd_top_70" />
                {/*===============spacing==============*/}
                <div className="footer_widgets_wrap">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0">
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="#" target="_blank" >
                                                <img src="assets/images/logo-white.png" alt="logo" />
                                            </Link>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_30" />
                                            {/*===============spacing==============*/}
                                        </div>
                                        <div className="content_box">
                                            <p>The great explorer of the truth, the master-builder of human happiness no one rejects
                                                dislikes avoids pleasure itself because it is pleasure but because know who do not
                                                those how to pursue</p>
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
                            <div className="col-xl-2 col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0">
                                <div className="footer_widgets wid_tit style_two">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_20" />
                                    {/*===============spacing==============*/}
                                    <div className="fo_wid_title">
                                        <h2>Informations</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li><Link href="/service-classic">Services</Link></li>
                                                <li><Link href="/about-us">About Us</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
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
                <div className="pd_bottom_40" />
                {/*===============spacing==============*/}
                <div className="bg_dark_1 copyright">
                    {/*===============spacing==============*/}
                    <div className="pd_top_20" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-2 mb-lg-0 mb-xl-0">
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
                                            <Link className="color_white" href="#" target="_blank" >Terms Of User</Link>
                                        </li>
                                        <li>
                                            <Link className="color_white" href="#" target="_blank" >Support</Link>
                                        </li>
                                        <li>
                                            <Link className="color_white" href="#" target="_blank" >Private Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_15" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
