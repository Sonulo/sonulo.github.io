
import Link from "next/link"
export default function Footer13({ }) {
    return (
        <>
            <div className="footer_area thirteen" id="footer_contents">
                <div className="footer_widgets_wrap bg_op_1" style={{ background: 'url(/assets/images/footer-bg.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="#" target="_blank" >
                                                <img src="assets/images/logo-white.png" className="img-fluid" alt="logo" />
                                            </Link>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_30" />
                                            {/*===============spacing==============*/}
                                        </div>
                                        <div className="content_box">
                                            <p className="color_white">
                                                Over 20 years of experience we’ll ensure you always get the best guidance. We serve a
                                                clients at every level of their organization...
                                            </p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn two color_white">
                                            Read More
                                        </Link>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_40" />
                                    {/*===============spacing==============*/}
                                    <div className="social_media_v_one style_three">
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
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Essentials</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix">
                                    <ul className="list_items_new_box type_one ">
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className=" icon-right-arrow icon" />
                                                Infrastructure
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className=" icon-right-arrow icon" />
                                                Client Support
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className=" icon-right-arrow icon" />
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className=" icon-right-arrow icon" />
                                                Terms of Use
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className=" icon-right-arrow icon" />
                                                Professionals
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className=" icon-right-arrow icon" />
                                                Careers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className=" icon-right-arrow icon" />
                                                Sitemap
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Recent News</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
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
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Contact Us</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_contact_widget">
                                    <div className="contact_info_nbox type_one">
                                        <div className="single">
                                            <h6 className="color_white"> <span className="icon-location2 color_white" /> Address </h6>
                                            <p className="color_white">United States 866 Wilshire, 2nd Street Los Angeles 90024.</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_info_nbox type_one">
                                        <div className="single">
                                            <h6 className="color_white"> <span className="icon-telephone color_white" /> Address </h6>
                                            <p><Link href="/tel:+555 5678 12340" className="color_white">+555 5678 12340</Link></p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_info_nbox type_one">
                                        <div className="single">
                                            <h6 className="color_white"> <span className="icon-mail color_white" /> Address</h6>
                                            <p><Link href="/mailto:support@creote.com" className="color_white">support@creote.com</Link></p>
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
                <div className="creote-footer-copyright bg_dark_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_20" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className="footer_copy_content color_white">
                                    © {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes" className="color_white">Steelthemes.</Link>
                                    All Rights
                                    Reserved.
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
