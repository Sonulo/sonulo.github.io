import Link from "next/link"
import Navbar from "../Navbar"
export default function Header11({ handleSearch, handleContactPopup, handleMobileMenu }) {
    return (
        <>
            <div className="header_area" id="header_contents">
                <header className="header header_default style_nine header_eleven head_absolute pd_top_20 transparent-bg get_sticky_header">
                    <div className="large-container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-9 col-sm-12 col-xs-9 logo_column">
                                <div className="header_logo_box">
                                    <Link href="/" className="logo navbar-brand">
                                        <img src="assets/images/logo-white-1.png" alt="Creote Elementor" className="logo_default" />
                                        <img src="assets/images/logo-default.png" alt="Creote Elementor" className="logo__sticky" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-3 col-sm-3 col-xs-3 menu_column">
                                <div className="navbar_togglers hamburger_menu color_white" onClick={handleMobileMenu}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                                <div className="header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu text-center">
                                            <Navbar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3  d-none d-lg-block">
                                <div className="header_right_content">
                                    <ul>
                                        <li>
                                            <button type="button" className="search-toggler" onClick={handleSearch}><i className="icon-search" /></button>
                                        </li>
                                        <li className="header-button">
                                            <Link href="#" className="theme-btn one"> Get a Quote </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end of the loop */}
            </div>

        </>
    )
}
