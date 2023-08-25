import Link from "next/link"
import Navbar from "../Navbar"
export default function Header6({ handleSearch, handleContactPopup, handleMobileMenu }) {
    return (
        <>
            <div className="header_area" id="header_contents">
                <header className="header header_default style_five get_sticky_header">
                    <div className="container-fluid">
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
                                            <li className="contntent phone">
                                                <small> <i className="icon-phone-call" />Phone</small>
                                                <Link href="tel:+9806071234">+9806071234</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="theme-btn one"> Get In
                                                    Touch </Link>
                                            </li>
                                            <li className="round_btn">
                                                <button type="button" className="search-toggler" onClick={handleSearch}><i className="icon-search" /></button>
                                                <button type="button" className="contact-toggler" onClick={handleContactPopup}><i className="icon-setup-dots" /></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}
