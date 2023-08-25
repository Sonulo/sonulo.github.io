import Link from "next/link"
import Navbar from "../Navbar"
export default function Header4({ handleSearch, handleContactPopup, handleMobileMenu }) {
    return (
        <>
            <div className="header_area" id="header_contents">
                <header className="header header_default style_three">
                    <div className="header_mid">
                        <div className="medium-container">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-2 col-md-12">
                                    <div className="logo mid_logo_icon">
                                        <Link href="/" className="logo_mid">
                                            <img src="assets/images/logo-default.png" alt="Creote Elementor" className="logo_default" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-10 col-md-12 hidden-sm">
                                    <div className="row">
                                        <div className="col-lg-4 same_column">
                                            <div className="mid_content one">
                                                <span className=" icon-deadline mid_icon" />
                                                <div className="text">
                                                    <h4> 8:00AM - 6:00PM</h4>
                                                    <p>Monday to Saturday</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 same_column">
                                            <div className="mid_content one">
                                                <span className=" icon-24-hours mid_icon" />
                                                <div className="text">
                                                    <h4> Online Services 24/7</h4>
                                                    <p>+1221234567</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 same_column">
                                            <div className="mid_content one">
                                                <span className=" icon-location mid_icon" />
                                                <div className="text">
                                                    <h4> 219 Amara Fort Apt. 394</h4>
                                                    <p>New York, NY 941</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar_outer mod_btn_enable get_sticky_header">
                        <div className="medium-container">
                            <div className="row align-items-center">
                                <div className="col-lg-12 menu_column">
                                    <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                        <span className="line" />
                                        <span className="line" />
                                        <span className="line" />
                                    </div>
                                    <div className="header_content_collapse">
                                        <div className="header_menu_box">
                                            <div className="modal_box_buttom">
                                                <button type="button" onClick={handleContactPopup} className="contact-toggler"><i className="icon-bar" /></button>
                                            </div>
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
                                                    <Link href="/" className="theme-btn five"> Get
                                                        In Touch </Link>
                                                </li>
                                            </ul>
                                        </div>
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
