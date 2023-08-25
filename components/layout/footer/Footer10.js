
import Link from "next/link"
export default function Footer10({ }) {
    return (
        <>
            <div className="footer_area footer_ten bg_op_1" id="footer_contents">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="footer_widgets_wrap text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                                <div className="contact_box_content style_one text-start">
                                    <div className="contact_box_inner  icon_yes ">
                                        <div className="icon_bx">
                                            <span className=" icon-placeholder" />
                                        </div>
                                        <div className="contnet">
                                            <h3> Post Address </h3>
                                            <p>
                                                280 Granite Run Drive Suite #200 Lancaster, PA 1760
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                                <div className="contact_box_content style_one text-start">
                                    <div className="contact_box_inner  icon_yes ">
                                        <div className="icon_bx">
                                            <span className=" icon-phone-call" />
                                        </div>
                                        <div className="contnet">
                                            <h3> General Enquires </h3>
                                            <p>
                                                Phone: +98 060 712 34 &amp; Email: sendmail@qetus.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="contact_box_content style_one text-start">
                                    <div className="contact_box_inner  icon_yes ">
                                        <div className="icon_bx">
                                            <span className="fa fa-clock-o" />
                                        </div>
                                        <div className="contnet">
                                            <h3> Operation Hours </h3>
                                            <p>
                                                Mon-Satday: 09.00 to 07.00 (Sunday: Closed)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_40" />
                                {/*===============spacing==============*/}
                                <div className="footer_logo">
                                    <Link href="#" target="_blank" >
                                        <img src="assets/images/logo-default.png" alt="logo" />
                                    </Link>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                                <div className="social_media_v_one style_two">
                                    <ul>
                                        <li>
                                            <Link href="#"> <span className="fa fa-facebook" />
                                                <small>facebook</small>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#"> <span className="fa fa-google" />
                                                <small>appstore</small>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#"> <span className="fa fa-instagram" />
                                                <small>instagram</small>
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
                                <div className="list_item_box style_two style_linline">
                                    <ul className="list-inline">
                                        <li className="list_items">
                                            <small className="d-flex align-items-center">
                                                <span className="icon_bx">
                                                    <i className=" icon-checked" />
                                                </span>
                                                <Link className="nav_link" href="#" target="_blank" >
                                                    Careers
                                                </Link>
                                            </small>
                                        </li>
                                        <li className="list_items">
                                            <small className="d-flex align-items-center">
                                                <span className="icon_bx">
                                                    <i className=" icon-checked" />
                                                </span>
                                                <Link className="nav_link" href="#" target="_blank" >
                                                    Client Support
                                                </Link>
                                            </small>
                                        </li>
                                        <li className="list_items">
                                            <small className="d-flex align-items-center">
                                                <span className="icon_bx">
                                                    <i className=" icon-checked" />
                                                </span>
                                                <Link className="nav_link" href="#" target="_blank" >
                                                    Sitemap </Link>
                                            </small>
                                        </li>
                                        <li className="list_items">
                                            <small className="d-flex align-items-center">
                                                <span className="icon_bx">
                                                    <i className=" icon-checked" />
                                                </span>
                                                <Link className="nav_link" href="#" target="_blank" >
                                                    Privacy Policy
                                                </Link>
                                            </small>
                                        </li>
                                    </ul>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="creote-footer-copyright text-center">
                        <div className="auto-container">
                            <div className="rows">
                                <div className="col-l-12">
                                    <div className="footer_copy_content">© {new Date().getFullYear()} <Link href="https://themeforest.net/user/steelthemes">Steelthemes.</Link> All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_60" />
                        {/*===============spacing==============*/}
                    </div>
                </div>
            </div>

        </>
    )
}
