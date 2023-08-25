import Link from "next/link"
import { useState } from "react"

export default function MyAccount() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <>
            <div id="page" className="page_wapper hfeed site">
                <div id="wrapper_full" className="content_all_warpper">
                    {/*--page-header---*/}
                    {/*--page-CONTENT---*/}
                    <div id="content" className="site-content ">
                        <div className="no-container">
                            <div className="no-row">
                                <div className="full_width_box">
                                    <div className="whole_login_content">
                                        <div className="register_login">
                                            <div className="simpleParallax"><img decoding="async" src="/assets/images/login-min.jpg" className="cover-parallax" alt="image" style={{ transform: 'translate3d(0px, 37px, 0px) scale(1.3)', willChange: 'transform', transition: 'transform 0.6s cubic-bezier(0, 0, 0, 1) 0s' }} /></div>
                                            <div className="login_left_side">
                                                <div className="login_content_box">
                                                    <Link href="/" className="login_logo"><img decoding="async" src="/assets/images/logo-white.png" className="login_logo" alt="image" /></Link>
                                                    <div className="login_forms_box">
                                                        <h6>Start For Free</h6>
                                                        <h2>Create New Account</h2>
                                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                            <li className="nav-item" role="presentation">
                                                                <button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}>Login</button>
                                                            </li>
                                                            <li className="nav-item mx-3" role="presentation">
                                                                <button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)}>Register</button>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                                <form className="login-register-form login" method="post">
                                                                    <p className="form-row">
                                                                        <label htmlFor="username">Username or email address&nbsp;<span className="required">*</span></label>
                                                                        <input type="text" name="username" id="username" autoComplete="username" />
                                                                    </p>
                                                                    <p className="form-row">
                                                                        <label htmlFor="password">Password&nbsp;<span className="required">*</span></label>
                                                                        <input type="password" name="password" id="password" autoComplete="current-password" />
                                                                    </p>
                                                                    <p className="form-row">
                                                                        <label>
                                                                            <input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> <span>Remember me</span>
                                                                        </label>
                                                                        <button type="submit" name="login" value="Log in">Log in</button>
                                                                    </p>
                                                                    <p className="lost_password">
                                                                        <Link href="#">Lost your password?</Link>
                                                                    </p>
                                                                </form>
                                                            </div>
                                                            <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                                <form method="post" className="login-register-form register">
                                                                    <p className="form-row">
                                                                        <label htmlFor="reg_email">Email address&nbsp;<span className="required">*</span></label>
                                                                        <input type="email" name="email" id="reg_email" autoComplete="email" />
                                                                    </p>
                                                                    <p>A link to set a new password will be sent to your email address.</p>
                                                                    <div className="privacy-policy-text">
                                                                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#" className="woocommerce-privacy-policy-link">privacy policy</Link>.</p>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}