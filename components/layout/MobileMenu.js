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
                    <form role="search" method="get" action="#">
                        <input type="search" className="search" placeholder="Search..." name="s" title="Search" />
                        <button type="submit" className="sch_btn"> <i className="icon-search" /></button>
                    </form>
                    <div className="menu-outer">
                        <ul id="myNavbar" className="navbar_nav">
                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/" className="dropdown-toggle nav-link">
                                    <span>Home</span>
                                    <span className="fa fa-angle-down" /></Link>
                                <ul className="dropdown-menu width_60_percentage" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <li>
                                        <div className="row">
                                            <div className="col-lg-3 m_column">
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/">Home Page -
                                                                    01</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-2">Home Page -
                                                                    02</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-3">Home Page -
                                                                    03</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-4">Home Page -
                                                                    04</Link>
                                                            </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 m_column">
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-5">Home Page -
                                                                    05</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-6">Home Page -
                                                                    06</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-7">Home Page -
                                                                    07</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-8">Home Page -
                                                                    08</Link>
                                                            </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 m_column">
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-9">Home Page -
                                                                    09</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-10">Home Page -
                                                                    10</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-11">Home Page -
                                                                    11</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-12">Home Page -
                                                                    12</Link>
                                                            </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 m_column">
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-13">Home Page -
                                                                    13</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-14">Home Page -
                                                                    14</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-15">Home Page -
                                                                    15</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/home-16">Home Page -
                                                                    16</Link>
                                                            </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fa fa-angle-down" /></div>
                            </li>
                            <li className="menu-item menu-item-has-children dropdown nav-item">
                                <Link href="#" className="dropdown-toggle nav-link">
                                    <span>Pages</span>
                                </Link>
                                <ul className="dropdown-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li className="menu-item  nav-item">
                                        <Link href="/about-us" className="dropdown-item nav-link">
                                            <span>About Us</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item menu-item-has-children dropdown nav-item">
                                        <Link href="/service-default" className="dropdown-item nav-link"><span>Service</span></Link>
                                        <ul className="dropdown-menu">
                                            <li className="menu-item  nav-item">
                                                <Link href="/service-classic" className="dropdown-item nav-link">
                                                    <span>Service Classic</span>
                                                </Link>
                                            </li>
                                            <li className="menu-item  nav-item">
                                                <Link href="/service-default" className="dropdown-item nav-link">
                                                    <span>Service Default</span>
                                                </Link>
                                            </li>
                                            <li className="menu-item nav-item">
                                                <Link href="/service-details" className="dropdown-item nav-link">
                                                    <span>Service Details</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fa fa-angle-down" /></div></li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/pricing-packages" className="dropdown-item nav-link">
                                            <span>Pricing Packages</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/our-team" className="dropdown-item nav-link">
                                            <span>Our Team</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/faqs" className="dropdown-item nav-link">
                                            <span>Faq’s</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/contact" className="dropdown-item nav-link">
                                            <span>Contact</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/coming-soon" className="dropdown-item nav-link">
                                            <span>Coming Soon</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fa fa-angle-down" /></div></li>
                            <li className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="#" className="dropdown-toggle nav-link"><span>Elements</span><span className="fa fa-angle-down" /></Link>
                                <ul className="dropdown-menu width_60_percentage" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <li>
                                        <div className="row">
                                            <div className="col-lg-2 m_column">
                                                <h5>Content 01</h5>
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li><Link href="/elements/testimonial">Testimonial</Link>
                                                        </li>
                                                        <li><Link href="/elements/call-to-action">Contact
                                                            List</Link>
                                                        </li>
                                                        <li><Link href="/elements/video-button">Video
                                                            Button</Link></li>
                                                        <li><Link href="/elements/newsteller">Newsteller</Link>
                                                        </li>
                                                        <li><Link href="/elements/blog-posts">Blog
                                                            Posts</Link></li>
                                                        <li><Link href="/elements/team">Team</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 m_column">
                                                <h5>Content 02</h5>
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li><Link href="/elements/process">Process</Link>
                                                        </li>
                                                        <li><Link href="/elements/project-carousel">Project
                                                            Carousel</Link></li>
                                                        <li><Link href="/elements/project-filter">Project
                                                            Filter</Link>
                                                        </li>
                                                        <li><Link href="/elements/progress-bar">Progress
                                                            Bar</Link></li>
                                                        <li><Link href="/elements/content-box">Content
                                                            Box</Link></li>
                                                        <li><Link href="/elements/faqs-elements">Faq’s</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 m_column">
                                                <h5>Presentational</h5>
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li><Link href="/elements/button">Button</Link>
                                                        </li>
                                                        <li><Link href="/elements/list-items">List
                                                            Items</Link></li>
                                                        <li><Link href="/elements/contact-form">Contact
                                                            Form</Link></li>
                                                        <li><Link href="/elements/service-post">Service
                                                            Post</Link></li>
                                                        <li><Link href="/elements/sliders">Sliders</Link>
                                                        </li>
                                                        <li><Link href="/elements/tabs">Tabs</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 m_column">
                                                <h5>Typography</h5>
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li><Link href="/elements/call-to-action">Call
                                                            to Action</Link>
                                                        </li>
                                                        <li><Link href="/elements/extra-content">Extra
                                                            Content</Link>
                                                        </li>
                                                        <li><Link href="/elements/simple-image">Simple
                                                            Image</Link></li>
                                                        <li><Link href="/elements/client-image">Client
                                                            Image</Link></li>
                                                        <li><Link href="/elements/price-plan">Price
                                                            Plan</Link></li>
                                                        <li><Link href="/elements/title">Title</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 m_column">
                                                <h5>Basic</h5>
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li><Link href="/elements/service-box">Service
                                                            Box</Link></li>
                                                        <li><Link href="/elements/count-down">Count
                                                            Down</Link></li>
                                                        <li><Link href="/elements/timeline">Time
                                                            Line</Link></li>
                                                        <li><Link href="/elements/contact-box">Contact
                                                            Box</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 m_column">
                                                <h5>Infographic</h5>
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li><Link href="/elements/image-box">Image
                                                            Box</Link></li>
                                                        <li><Link href="/elements/icon-box">Icon
                                                            Box</Link></li>
                                                        <li><Link href="/elements/fun-facts">Fun
                                                            Facts</Link></li>
                                                        <li><Link href="/elements/quotes">Quotes</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(3)}><span className="fa fa-angle-down" /></div>
                            </li>
                            <li className="menu-item menu-item-has-children dropdown nav-item">
                                <Link href="/blog" className="dropdown-toggle nav-link">
                                    <span>Blog</span>
                                </Link>
                                <ul className="dropdown-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <li className="menu-item nav-item">
                                        <Link href="/blog" className="dropdown-item nav-link">
                                            <span>Blog Classic</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/blog-modern" className="dropdown-item nav-link">
                                            <span>Blog Modern</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/blog-simple" className="dropdown-item nav-link">
                                            <span>Blog Simple</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/blog-list-view" className="dropdown-item nav-link">
                                            <span>Blog List View</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/blog-metro-fullwidth" className="dropdown-item nav-link">
                                            <span>Metro Fullwidth</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link href="/blog-single" className="dropdown-item nav-link">
                                            <span>Single Post</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(4)}><span className="fa fa-angle-down" /></div>
                            </li>
                            <li className="menu-item menu-item-has-children dropdown nav-item">
                                <Link href="/project-1-column-grid" className="dropdown-toggle nav-link">
                                    <span>Projects</span>
                                </Link>
                                <ul className="dropdown-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                    <li className="menu-item  nav-item">
                                        <Link href="/project-1-column-grid" className="dropdown-item nav-link">
                                            <span>1 Column Grid</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/project-1-column-with-sidebar" className="dropdown-item nav-link">
                                            <span>1 Column With Sidebar</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/project-2-column-grid" className="dropdown-item nav-link">
                                            <span>2 Columns Grid</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/project-3-column-grid" className="dropdown-item nav-link">
                                            <span>3 Columns Grid</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/project-3-column-overlay" className="dropdown-item nav-link">
                                            <span>3 Columns Overlay</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link href="/project-details" className="dropdown-item nav-link">
                                            <span>Project Details</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(5)}><span className="fa fa-angle-down" /></div></li>
                            <li className="menu-item  menu-item-has-children dropdown nav-item">
                                <Link href="/shop" className="dropdown-toggle nav-link">
                                    <span>Shop</span>
                                </Link>
                                <ul className="dropdown-menu" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                    <li className="menu-item  nav-item">
                                        <Link href="/shop" className="dropdown-item nav-link">
                                            <span>Products</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link href="/shop-details" className="dropdown-item nav-link">
                                            <span>Product Details</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link href="/shop-with-sidebar" className="dropdown-item nav-link">
                                            <span>Product With Sidebar</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/my-account" className="dropdown-item nav-link">
                                            <span>My account</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/checkout" className="dropdown-item nav-link">
                                            <span>Checkout</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/cart" className="dropdown-item nav-link">
                                            <span>Cart</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(6)}><span className="fa fa-angle-down" /></div></li>
                        </ul>

                    </div>
                </nav>
            </div>
        </>
    )
}
