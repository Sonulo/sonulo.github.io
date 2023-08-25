
import Link from "next/link"
export default function Footer12({ }) {
    return (
        <>
            <div className="footer_area  footer_twelve bg_dark_2" id="footer_contents">
                <div className="footer_widgets_wrap">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Recent News</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets recent_news_em_wp style_one  clearfix">
                                    <div className="news_boxed light_color">
                                        <div className="news_recent clearfix image_s">
                                            <div className="image ">
                                                <img width={750} height={420} src="assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <h2 className="title"><Link href="/blog-single" >Why Should Business Payroll
                                                    Outsourcing?</Link></h2>
                                                <Link className="date" href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                            </div>
                                        </div>
                                        <div className="news_recent clearfix image_s">
                                            <div className="image ">
                                                <img width={750} height={420} src="assets/images/blog/blog-image-8.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <h2 className="title"><Link href="/blog-single" >Most Employees Support
                                                    Measures</Link></h2>
                                                <Link className="date" href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                            </div>
                                        </div>
                                        <div className="news_recent clearfix image_s">
                                            <div className="image ">
                                                <img width={750} height={420} src="assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <h2 className="title"><Link href="/blog-single" >How to Handle Employee</Link>
                                                </h2>
                                                <Link className="date" href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="footer_widgets wid_tit style_two">
                                            <div className="fo_wid_title">
                                                <h2>Informations</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="footer_widgets clearfix navigation_foo light_color style_four">
                                            <div className="navigation_foo_box">
                                                <div className="navigation_foo_inner">
                                                    <ul>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Careers</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Infrastructure</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Client Support</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Privacy Policy</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Terms of Use</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Sitemap</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Contact</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="footer_widgets clearfix navigation_foo light_color style_four">
                                            <div className="navigation_foo_box">
                                                <div className="navigation_foo_inner">
                                                    <ul>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> How it’s Work</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Testimonials</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> HR Solutions</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Case Studies</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Partners</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Key Areas</Link></li>
                                                        <li><Link href="#" className="color_white"><i className="fa fa-circle-o" /> Pricing</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets foo_subscribe light_color style_one">
                                    <div className="item_subscribe with_text">
                                        <p className="color_white">Subscribe Us &amp; Recive Our Offers and Updates i Your Inbox Directly.</p>
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
                    <div className="pd_bottom_60" />
                    {/*===============spacing==============*/}
                </div>
                <div className="auto-container">
                    <div className="footer-copyright text-center bg_dark_1 rounded_top_left_30 rounded_top_right_30">
                        {/*===============spacing==============*/}
                        <div className="pd_top_25" />
                        {/*===============spacing==============*/}
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="color_white">© {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes" className="color_white">Steelthemes.</Link> All Rights Reserved.</p>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_5" />
                        {/*===============spacing==============*/}
                    </div>
                </div>
            </div>

        </>
    )
}
