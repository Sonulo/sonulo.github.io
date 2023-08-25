
import Link from "next/link"
export default function Footer9({ }) {
    return (
        <>
            <div className="footer_area  footer_nine" id="footer_contents">
                <div className="footer_widgets_wrap bg_op_1" style={{ background: 'url(/assets/images/footer-9.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>About Company</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="content_box">
                                            <p>Duty the obligations of business will frequently occur that pleasure have too
                                                repudiated annoyances endures accepted.</p>
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
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Company</h2>
                                    </div>
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
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Information</h2>
                                    </div>
                                </div>
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
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Essentials</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <div className="menu-essentials-container">
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
                            </div>
                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Recent Posts</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets recent_news_em_wp style_two clearfix">
                                    <div className="news_boxed light_color">
                                        <div className="news_recent clearfix  image_s  ">
                                            <div className="image ">
                                                <img width={750} height={420} src="assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <Link className="date" href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                                <h2 className="title"><Link href="/blog-single" >Why Should Business Payroll
                                                    Outsourcing?</Link></h2>
                                            </div>
                                        </div>
                                        <div className="news_recent clearfix  image_s  ">
                                            <div className="image ">
                                                <img width={750} height={420} src="assets/images/blog/blog-image-8.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <Link className="date" href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                                <h2 className="title"><Link href="/blog-single" >Most Employees Support
                                                    Measures</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                </div>
                <div className="footer-copyright bg_dark_3">
                    {/*===============spacing==============*/}
                    <div className="pd_top_20" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="footer_copy_content">
                                    © {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes">Steelthemes.</Link>. All Rights
                                    Reserved.
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="footer_copy_content_right text-md-end">
                                    <div className="social_media_v_one">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <span className="fa fa-facebook" />
                                                    <small>facebook</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fa fa-twitter" />
                                                    <small>twitter</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fa fa-skype" />
                                                    <small>skype</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fa fa-instagram" />
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
                    <div className="pd_bottom_20" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
