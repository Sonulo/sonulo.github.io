import Link from "next/link"
import Navbar from "../Navbar"
export default function Header13({ handleSearch, handleContactPopup, handleMobileMenu, handleCart }) {
    return (
        <>
            <div className="header_area" id="header_contents">
                <header className="main-header header header_v13">
                    <section className="header_top">
                        <div className="medium-container">
                            <div className="header_top_inner">
                                <div className="top_left">
                                    <ul className="top-links clearfix">
                                        <li>
                                            <Link href="#" className="get_a_quote">Get a quote </Link>
                                        </li><li>
                                        </li><li>Welcome to our consulting company.</li>
                                    </ul>
                                </div>
                                <div className="top_right text-right">
                                    <ul className="contact_info_two">
                                        <li className="single">
                                            <p> <span className="icon-telephone" /> <Link href="tel:+98 060 712 34">+98 060 712
                                                34</Link>
                                            </p>
                                        </li>
                                        <li className="single">
                                            <p><span className="icon-mail" /><Link href="mailto:sendmail@creote.com">sendmail@creote.com</Link>
                                            </p>
                                        </li>
                                        <li className="single">
                                            <p> <span className="icon-location2" />
                                                61W Business Str Hobert, LA </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="navbar_outer get_sticky_header">
                        <div className="medium-container">
                            <nav className="inner_box">
                                <div className="header_logo_box">
                                    <Link href="/" className="logo navbar-brand">
                                        <img src="assets/images/logo-default.png" alt="Creote" className="logo_default" />
                                        <img src="assets/images/logo-default.png" alt="Creote" className="logo__sticky" />
                                    </Link>
                                </div>
                                <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                                <div className="header_content header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu">
                                            <Navbar />
                                        </div>
                                    </div>
                                    <ul className="navbar_right navbar_nav ">
                                        <li>
                                            <button type="button" className="search-toggler" onClick={handleSearch}><i className="icon-search" /></button>
                                        </li>
                                        <li>
                                            <div className="mini_cart_togglers header_side_cart" onClick={handleCart}>
                                                <div className="mini-cart-count">
                                                    0 </div>
                                                <i className="icon-shopping-bag1" />
                                            </div>
                                        </li>
                                        <li>
                                            <button type="button" className="contact-toggler" onClick={handleContactPopup}><i className="icon-menu1" /></button>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </section>
                </header>
                {/* end of the loop */}
            </div>

        </>
    )
}
