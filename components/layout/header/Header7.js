import Link from "next/link"
import Navbar from "../Navbar"
export default function Header7({ handleSearch, handleCart, handleMobileMenu }) {
    return (
        <>
            <div className="header_area " id="header_contents">
                <header className="header header_default style_seven style_eight head_absolute transparent-bg get_sticky_header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-4 col-lg-2 col-md-8 col-sm-8 col-xs-8 logo_column">
                                <div className="header_logo_box">
                                    <Link href="/" className="logo navbar-brand" >
                                        <img src="assets/images/logo-default.png" alt="Creote Elementor" className="logo_default" />
                                        <img src="assets/images/logo-default.png" alt="Creote Elementor" className="logo__sticky" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-8 col-lg-6 col-md-1 col-sm-1 col-xs-1 menu_column">
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
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-3 col-xs-3 right_column">
                                <div className="header_right_content">
                                    <ul>
                                        <li>
                                            <button type="button" className="search-toggler" onClick={handleSearch}><i className="icon-search" /></button>
                                        </li>
                                        <li>
                                            <div className="mini_cart_togglers header_side_cart" onClick={handleCart}>
                                                <div className="mini-cart-count">
                                                    0
                                                </div>
                                                <i className="icon-shopping-bag1" />
                                            </div>
                                        </li>
                                        <li className="last">
                                            <Link href="#" className="login"> <i className="icon-keyhole" />
                                                Login </Link>
                                        </li>
                                        <li>
                                            <div className="med_rg_side">
                                                <ul className="social_media_head">
                                                    <li> <Link href="#" >
                                                        <i className="fa fa-facebook" />
                                                    </Link>
                                                    </li>
                                                    <li> <Link href="#" >
                                                        <i className="fa fa-twitter" />
                                                    </Link>
                                                    </li>
                                                    <li> <Link href="#" >
                                                        <i className="fa fa-skype" />
                                                    </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}
