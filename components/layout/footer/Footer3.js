
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
                        <div className="row" style={{display: "flex", justifyContent: "space-between"}}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets get_in_touch_foo light_color">
                                    <div className="get_intouch_inrfo">
                                        <div className="foo_cont_inner">
                                            <div className="top">
                                                <h6> Location</h6>
                                                <p>
                                                    302/A Hokandara South, Hokandara,
                                                    Thalawathugoda, Colombo, LK 10118
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <h6> Contact</h6>
                                                <div className="con_content">
                                                    <h5> Mail Us: </h5>
                                                    <Link href="/tel:info@sonulo.com">&nbsp;info@sonulo.com</Link>
                                                </div>
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
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
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
                                    © {new Date().getFullYear()} <Link href="https://sonulo.com" className="color_white">Sonulo.</Link>
                                     All Rights
                                    Reserved.
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
