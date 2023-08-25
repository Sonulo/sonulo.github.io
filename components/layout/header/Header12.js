import Link from "next/link"
import Navbar from "../Navbar"
export default function Header12({ handleSearch, handleContactPopup, handleMobileMenu }) {
    return (
        <>
            <div className="header_area " id="header_contents">
                <div className="top_bar style_three bg_op_1 pd_top_20 pd_bottom_5 d_md_none" style={{ background: 'url(/assets/images/home-11-patter-1.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 m-auto">
                                <div className="top_inner">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="footer_contact_list light_color type_one">
                                                <div className="same_contact phone">
                                                    <span className="icon-telephone" />
                                                    <div className="content">
                                                        <h6 className="titles"> Phone</h6>
                                                        <Link href="tel:+98 060 712 34 ">+98 060 712 34 </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="footer_contact_list light_color type_one">
                                                <div className="same_contact mail">
                                                    <span className="icon-mail" />
                                                    <div className="content">
                                                        <h6 className="titles"> Mail Us</h6>
                                                        <Link href="mailto:sendmail@creote.com">sendmail@creote.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="footer_contact_list light_color type_one">
                                                <div className="same_contact address">
                                                    <span className="icon-location2" />
                                                    <div className="content">
                                                        <h6 className="titles"> Address</h6>
                                                        <p>61W Business Str Hobert, LA </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    <header className="header header_default style_nine  head_absolute transparent-bg get_sticky_header">
                        <div className="medium-container">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                    <div className="header_logo_box">
                                        <Link href="/" className="logo navbar-brand">
                                            <img src="assets/images/logo-white-1.png" alt="Creote Elementor" className="logo_default" />
                                            <img src="assets/images/logo-default.png" alt="Creote Elementor" className="logo__sticky" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                                    <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                        <span className="line" />
                                        <span className="line" />
                                        <span className="line" />
                                    </div>
                                    <div className="header_content_collapse">
                                        <div className="header_menu_box">
                                            <div className="navigation_menu">
                                                <Navbar />
                                            </div>
                                        </div>
                                        <div className="header_right_content">
                                            <ul>
                                                <li>
                                                    <button type="button" className="search-toggler" onClick={handleSearch}><i className="icon-search" /></button>
                                                </li>
                                                <li className="header-button">
                                                    <Link href="#" className="theme-btn one color_white_1"> Get a
                                                        Quote </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                {/* end of the loop */}
            </div>

        </>
    )
}
