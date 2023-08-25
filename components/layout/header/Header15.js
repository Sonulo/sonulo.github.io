import Link from "next/link"
import Navbar from "../Navbar"
export default function Header15({ handleSearch, handleContactPopup, handleMobileMenu }) {
    return (
        <>
            <div className="header_area" id="header_contents">
                <div className="header_v15">
                    <div className="top">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <p className="infotext">
                                        <span className="icon-checked" />
                                        Welcome to our consulting company Mentor!
                                    </p>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <div className="contact_list type_one pd_right_20">
                                            <div className="same_contact phone">
                                                <Link href="tel:+98 060 712 34 "><span className="icon-phone-call" />+98
                                                    060 712 34 </Link>
                                            </div>
                                        </div>
                                        <div className="contact_list type_one pd_right_20">
                                            <div className="same_contact mail">
                                                <Link href="mailto:sendmail@creote.com"><span className="icon-email" />sendmail@creote.com</Link>
                                            </div>
                                        </div>
                                        <div className="contact_list type_one">
                                            <div className="same_contact address">
                                                <p><span className="icon-placeholder" />61W Business Str Hobert, LA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header className="header header_default get_sticky_header">
                        <div className="large-container">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-2 col-sm-8 col-xs-8">
                                    <div className="header_logo_box">
                                        <Link href="/" className="logo navbar-brand">
                                            <img src="assets/images/logo-white-1.png" alt="Creote Elementor" className="logo_default" />
                                            <img src="assets/images/logo-white-1.png" alt="Creote Elementor" className="logo__sticky" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-4  col-xs-6">
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
                                <div className="col-lg-2 col-md-2 d_md_none">
                                    <div className="header-button">
                                        <Link href="#" className="theme-btn one"> Get In Touch </Link>
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
