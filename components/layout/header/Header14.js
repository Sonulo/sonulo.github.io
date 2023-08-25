import Link from "next/link"
import Navbar from "../Navbar"
export default function Header14({ handleSearch, handleContactPopup, handleMobileMenu, handleCart }) {
    return (
        <>
            <div className="header_area" id="header_contents">
                <header className="main-header header header_v14">
                    <section className="header_top">
                        <div className="medium-container">
                            <div className="row align-items-center">
                                {/*Top Left*/}
                                <div className="col-lg-9 col-md-12">
                                    <div className="top_left">
                                        <ul className="contact_info_two">
                                            <li> <span className="icon-checked" />
                                                Welcome to our consulting company Mentor! </li>
                                            <li className="single">
                                                <span className="icon-placeholder" />
                                                61W Business Str Hobert, LA </li>
                                            <li className="single">
                                                <span className="icon-clock" /> Mon - Sat: 09.00 to 06.00 (Sun:Closed)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Top Right*/}
                                <div className="col-lg-3 col-md-12">
                                    <div className="top_right text-right">
                                        <ul className="clearfix">
                                            <li>
                                                <Link href="#" className="has-tooltip">
                                                    <span className="fa fa-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="has-tooltip">
                                                    <span className="fa fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="has-tooltip">
                                                    <span className="fa fa-skype" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="has-tooltip">
                                                    <span className="fa fa-telegram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="has-tooltip">
                                                    <span className="fa fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="header_mid">
                        <div className="medium-container">
                            <div className="row align-items-center">
                                {/*Top Left*/}
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                    <div className="logo midbar_left">
                                        <Link href="/" className="logo navbar-brand">
                                            <img src="/assets/images/logo-default.png" alt="Creote " className="logo_default" />
                                        </Link>
                                    </div>
                                </div>
                                {/*Top Right*/}
                                <div className="col-lg-6 d_md_none">
                                    <div className="midbar_mid">
                                        <div className="contact_widget">
                                            <ul className="contact_info">
                                                <li className="single">
                                                    <span className="icon-telephone" />
                                                    <small> Call Us Now: </small>
                                                    <p><Link href="tel:+98 060 712 34 ">+98 060 712 34 </Link></p>
                                                </li>
                                                <li className="single">
                                                    <span className="icon-mail" />
                                                    <small> Send Mail Us: </small>
                                                    <p><Link href="mailto:sendmail@creote.com ">sendmail@creote.com </Link>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 d_md_block text-end ">
                                    <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                        <span className="line" />
                                        <span className="line" />
                                        <span className="line" />
                                    </div>
                                </div>
                                <div className="col-lg-3 dnone">
                                    <div className="text-end midbar_right">
                                        <div className="theme-btn_all">
                                            <Link className="theme-btn one" href="#">
                                                Free Consulting
                                                <span className="flaticon-arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="navbar_outer get_sticky_header">
                        <div className="medium-container">
                            <div className="navbar_inner">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header_content header_content_collapse">
                                            <div className="header_menu_box">
                                                <div className="navigation_menu">
                                                    <Navbar />
                                                </div>
                                            </div>
                                            <ul className="navbar_nav  navbar-mobile navbar_right">
                                                <li>
                                                    <button type="button" className="search-toggler" onClick={handleSearch}>
                                                        <i className="icon-search" />
                                                    </button>
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
                                                    <button type="button" className="contact-toggler" onClick={handleContactPopup}>
                                                        <i className="icon-menu1" />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
                {/* end of the loop */}
            </div>

        </>
    )
}
