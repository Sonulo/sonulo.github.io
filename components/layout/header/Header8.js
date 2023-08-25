import Link from "next/link"
import Navbar from "../Navbar"
export default function Header8({ handleSearch, handleContactPopup, handleMobileMenu, handleCart }) {
    return (
        <>
            <div className="header_area " id="header_contents">
                <div className="header_style_six_nw">
                    <header className="header header_default style_six dark_color transparent-bg get_sticky_header">
                        <div className="full-container">
                            <div className="row">
                                <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                    <div className="header_logo_box">
                                        <Link href="/" className="logo navbar-brand" >
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
                                                    <button type="button" className="search-toggler" onClick={handleSearch}><i className="icon-search3" /></button>
                                                </li>
                                                <li>
                                                    <div className="mini_cart_togglers header_side_cart" onClick={handleCart}>
                                                        <div className="mini-cart-count">
                                                            0
                                                        </div>
                                                        <i className="icon-shopping-bag1" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <button type="button" className="contact-toggler" onClick={handleContactPopup}><i className="icon-menu1" /></button>
                                                </li>
                                                <li className="last">
                                                    <Link href="#" className="login"> <i className="icon-keyhole" /> Login </Link>
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

        </>
    )
}
