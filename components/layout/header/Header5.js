import Link from "next/link"
import Navbar from "../Navbar"
export default function Header5({ handleSearch, handleContactPopup, handleMobileMenu }) {
    return (
        <>
            <div className="header_area " id="header_contents">
                <div className="header_boxed style_four">
                    <div className="row">
                        <div className="auto-container">
                            <div className="top_bar style_one">
                                <div className="col-lg-12">
                                    <div className="top_inner">
                                        <div className="left_side common_css">
                                            <div className="contntent address">
                                                <i className="icon-placeholder" />
                                                <div className="text">
                                                    <span>61W Business Str Hobert, LA </span>
                                                </div>
                                            </div>
                                            <div className="contntent email">
                                                <i className="icon-email" />
                                                <div className="text">
                                                    <Link href="mailto:sendmail@creote.com">sendmail@creote.com</Link>
                                                </div>
                                            </div>
                                            <div className="contntent phone">
                                                <i className="icon-phone-call" />
                                                <div className="text">
                                                    <Link href="tel:+9806071234">+9806071234</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right_side common_css">
                                            <div className="contntent media">
                                                <div className="text">
                                                    <Link href="#" >
                                                        <i className="fa fa-facebook" />
                                                    </Link>
                                                    <Link href="#" >
                                                        <i className="fa fa-twitter" />
                                                    </Link>
                                                    <Link href="#" >
                                                        <i className="fa fa-skype" />
                                                    </Link>
                                                    <Link href="#" >
                                                        <i className="fa fa-telegram" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="contntent button">
                                                <Link href="#" className="theme-btn one"> Get In Touch <i className="icon-right-arrow-1" /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <header className="header header_default style_four get_sticky_header">
                                <div className="auto-container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                            <div className="header_logo_box">
                                                <Link href="/" className="logo navbar-brand">
                                                    <img src="assets/images/logo-default.png" alt="Creote Elementor" className="logo_default" />
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
                                                        <li>
                                                            <button type="button" onClick={handleContactPopup} className="contact-toggler"><i className="icon-bar" /></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
