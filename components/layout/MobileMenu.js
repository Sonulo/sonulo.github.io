import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="crt_mobile_menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}><i className="icon-close" /></div>
                    <div className="menu-outer">
                        <ul id="myNavbar" className="navbar_nav">
                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/" className="dropdown-toggle nav-link">
                                    <span>Home</span>
                                    <span className="fa fa-angle-down" /></Link>
                            </li>
                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/service-classic" className="dropdown-toggle nav-link">
                                    <span>Services</span>
                                    <span className="fa fa-angle-down" /></Link>
                            </li>
                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/about-us" className="dropdown-toggle nav-link">
                                    <span>About Us</span>
                                    <span className="fa fa-angle-down" /></Link>
                            </li>
                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/contact" className="dropdown-toggle nav-link">
                                    <span>Contact</span>
                                    <span className="fa fa-angle-down" /></Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </>
    )
}
