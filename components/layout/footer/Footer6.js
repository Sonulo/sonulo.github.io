
import Link from "next/link"
export default function Footer6({ }) {
    return (
        <>
            <div className="footer_area footer_six" id="footer_contents">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="footer_widgets_wrap">
                    <div className="auto-container">
                        <div className="row gutter_15px">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2 className="color_dark">About Company</h2>
                                    </div>
                                </div>
                                <div className="description_box">
                                    <p>The great explorer of the truth, the master-builder of human happiness no one rejects
                                        dislikes avoids pleasure itself because it is pleasure. </p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="extra_content image_with_content dark_color">
                                    <div className="simple_image">
                                        <img src="assets/images/cuntry-1.png" alt="img" />
                                        <h2>Since 1998, Operate in Birmingham.</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_40" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2 className="color_dark">Recent Posts</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets recent_news_em_wp style_two clearfix">
                                    <div className="news_boxed dark_color">
                                        <div className="news_recent clearfix  image_s  ">
                                            <div className="image ">
                                                <img width={750} height={420} src="assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <Link className="date" href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                                <h2 className="title"><Link href="/blog-single" >Why Should
                                                    Business Payroll
                                                    Outsourcing?</Link></h2>
                                            </div>
                                        </div>
                                        <div className="news_recent clearfix  image_s  ">
                                            <div className="image ">
                                                <img width={750} height={420} src="assets/images/blog/blog-image-8.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <Link className="date" href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                                <h2 className="title"><Link href="/blog-single" >Most Employees
                                                    Support
                                                    Measures</Link></h2>
                                            </div>
                                        </div>
                                        <div className="news_recent clearfix  image_s">
                                            <div className="image ">
                                                <img width={750} height={420} src="assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <Link className="date" href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                                <h2 className="title"><Link href="/blog-single" >How to Handle
                                                    Employee</Link>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2 className="color_dark">Get In Touch</h2>
                                    </div>
                                </div>
                                <div className="footer_contact_list dark_color type_one">
                                    <div className="same_contact address">
                                        <span className="icon-location2" />
                                        <div className="content">
                                            <h6 className="titles"> Address</h6>
                                            <p>280 Granite Run Drive Suite #200 Lancaster
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_top_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_contact_list dark_color type_one">
                                    <div className="same_contact mail">
                                        <span className="icon-mail" />
                                        <div className="content">
                                            <h6 className="titles"> Mail Us</h6>
                                            <Link href="/mailto:sendmail@creote.com">sendmail@creote.com</Link>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_top_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_contact_list dark_color type_one">
                                    <div className="same_contact phone">
                                        <span className="icon-telephone" />
                                        <div className="content">
                                            <h6 className="titles"> Phone</h6>
                                            <Link href="/tel:+9806071234 ">+9806071234 </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_40" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2 className="color_dark">Subscribe Us Today</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets foo_subscribe dark_color style_one">
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
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_30" />
                {/*===============spacing==============*/}
                <div className="divider_1" />
                <div className="footer-copyright text-center">
                    {/*===============spacing==============*/}
                    <div className="pd_top_20" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer_copy_content">© {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes">Steelthemes.</Link> All Rights
                                    Reserved.</div>
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
