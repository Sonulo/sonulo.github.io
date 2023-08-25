
import Link from "next/link"
export default function Footer5({ }) {
    return (
        <>
            <div className="footer_area footer_five" id="footer_contents">
                <div className="footer_widgets_wrap bg_dark_2">
                    {/*===============spacing==============*/}
                    <div className="pd_top_75" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Our Works</h2>
                                    </div>
                                </div>
                                <div className="gallery_repeater">
                                    <ul className="items_gal">
                                        <li>
                                            <span className="image">
                                                <img src="assets/images/projects/project-6-img.jpg" className="gal" alt="Gallery" />
                                                <Link href="#" target="_blank" ><i className="icon-chevron-right" /></Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src="assets/images/projects/project-5-img.jpg" className="gal" alt="Gallery" />
                                                <Link href="#" target="_blank" ><i className="icon-chevron-right" /></Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src="assets/images/projects/project-4-img.jpg" className="gal" alt="Gallery" />
                                                <Link href="#" target="_blank" ><i className="icon-chevron-right" /></Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src="assets/images/projects/project-3-img.jpg" className="gal" alt="Gallery" />
                                                <Link href="#" target="_blank" ><i className="icon-chevron-right" /></Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src="assets/images/projects/project-2-img.jpg" className="gal" alt="Gallery" />
                                                <Link href="#" target="_blank" ><i className="icon-chevron-right" /></Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src="assets/images/projects/project-1-img.jpg" className="gal" alt="Gallery" />
                                                <Link href="#" target="_blank" ><i className="icon-chevron-right" /></Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="theme_btn_all color_one">
                                    <Link href="#" target="_blank" className="theme-btn five">View All Works<i className="icon-right-arrow" /></Link>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_40" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Informations</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li className="menu-item"><Link href="#">Services</Link></li>
                                                <li className="menu-item"><Link href="#">Infrastructure</Link></li>
                                                <li className="menu-item"><Link href="#">Client Support</Link></li>
                                                <li className="menu-item"><Link href="#">Privacy policy</Link></li>
                                                <li className="menu-item"><Link href="#">Terms of use</Link></li>
                                                <li className="menu-item"><Link href="#">Sitemap</Link></li>
                                                <li className="menu-item"><Link href="#">Careers</Link></li>
                                            </ul>
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
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                                <div className="footer_contact_list light_color type_one">
                                    <div className="same_contact address">
                                        <span className="icon-location2" />
                                        <div className="content">
                                            <h6 className="titles">Address</h6>
                                            <p>280 Granite Run Drive Suite #200 Lancaster</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer_contact_list light_color type_one">
                                    <div className="same_contact mail">
                                        <span className="icon-mail" />
                                        <div className="content">
                                            <h6 className="titles">Mail Us</h6>
                                            <Link href="/mailto:sendmail@creote.com">sendmail@creote.com</Link>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="footer_contact_list light_color type_one">
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
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
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
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_40" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_35" />
                    {/*===============spacing==============*/}
                </div>
                <div className="footer-copyright bg_dark_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_15" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="footer_copy_right">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <ul className="list_items_new_box type_one  display_inline">
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className="fa fa-check-circle icon color_white" />
                                                Terms of use
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className="fa fa-check-circle icon color_white" />
                                                Sitemap
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="color_white">
                                                <span className="fa fa-check-circle icon color_white" />
                                                Careers
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
                                    <div className="footer_copy_content color_white">© {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes" className="color_white">Steelthemes.</Link> All Rights Reserved.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_5" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
