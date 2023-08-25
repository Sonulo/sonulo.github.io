
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1Col() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".project_container", {
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "current" : "")

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="fliter_group" style={{ textAlign: 'center!important' }}>
                        <ul className="project_filter dark clearfix">
                            <li className={activeBtn("project_category-coaching")} onClick={handleFilterKeyChange("project_category-coaching")}>Coaching</li>
                            <li className={activeBtn("project_category-human-resources")} onClick={handleFilterKeyChange("project_category-human-resources")}>Human Resources
                            </li>
                            <li className={activeBtn("project_category-leadership")} onClick={handleFilterKeyChange("project_category-leadership")}>Leadership</li>
                            <li className={activeBtn("project_category-pre-sale")} onClick={handleFilterKeyChange("project_category-pre-sale")}>Pre sale</li>
                            <li className={activeBtn("project_category-recruiting")} onClick={handleFilterKeyChange("project_category-recruiting")}>Recruiting</li>
                            <li className={activeBtn("project_category-values")} onClick={handleFilterKeyChange("project_category-values")}>Values</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project_container clearfix">
                <div className="row clearfix">
                    <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12 project_category-coaching">
                        <div className="project_box style_three clearfix">
                            <div className="content_inner">
                                <div><Link href="#">coaching</Link></div>
                                <h2><Link href="project-details">Complex Dismissal for a Small Company</Link></h2>
                                <p className="short_desc">Beguiled and demoralized charms of pleasure of the moment
                                    so blinded.</p>
                                <Link href="project-details" className="read_more">Read More <span className="icon-right-arrow-long" /></Link>
                                <div className="share_me">
                                    <div className="share_socail">
                                        <div className="title">Share</div>
                                        <button className="m_icon" title="facebook" data-sharer="facebook" data-title="Complex Dismissal for a Small Company" data-url="project-details">
                                            <i className="fa fa-facebook" />
                                        </button>
                                        <button className="m_icon" title="twitter" data-sharer="twitter" data-title="Complex Dismissal for a Small Company" data-url="project-details">
                                            <i className="fa fa-twitter" />
                                        </button>
                                        <button className="m_icon" title="whatsapp" data-sharer="whatsapp" data-title="Complex Dismissal for a Small Company" data-url="project-details">
                                            <i className="fa fa-whatsapp" />
                                        </button>
                                        <button className="m_icon" title="telegram" data-sharer="telegram" data-title="Complex Dismissal for a Small Company" data-url="project-details" data-to="+44555-03564">
                                            <i className="fa fa-telegram" />
                                        </button>
                                        <button className="m_icon" title="skype" data-sharer="skype" data-url="project-details" data-title="Complex Dismissal for a Small Company">
                                            <i className="fa fa-skype" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img loading="lazy" width={370} height={247} src="/assets/images/projects/project-2-img.jpg" className="wp-post-image" alt="img" />
                                <Link href="project-details" className="pro-link" />
                                <div className="overlay"> </div>
                                <div className="text">
                                    <ul>
                                        <li>Date : <span>March 08, {new Date().getFullYear()}</span></li>
                                        <li>Client :<span>The Infotech Solutions</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12  project_category-human-resources">
                        <div className="project_box style_three clearfix">
                            <div className="content_inner">
                                <div><Link href="#">human-resources</Link></div>
                                <h2><Link href="project-details">Essential Steps to Writing Job Description</Link>
                                </h2>
                                <p className="short_desc">Power of choice untrammelled when nothing prevents our
                                    being able to do.</p>
                                <Link href="project-details" className="read_more">Read More <span className="icon-right-arrow-long" /></Link>
                                <div className="share_me">
                                    <div className="share_socail">
                                        <div className="title">Share</div>
                                        <button className="m_icon" title="facebook" data-sharer="facebook" data-title="Essential Steps to Writing Job Description" data-url="project-details">
                                            <i className="fa fa-facebook" />
                                        </button>
                                        <button className="m_icon" title="twitter" data-sharer="twitter" data-title="Essential Steps to Writing Job Description" data-url="project-details">
                                            <i className="fa fa-twitter" />
                                        </button>
                                        <button className="m_icon" title="whatsapp" data-sharer="whatsapp" data-title="Essential Steps to Writing Job Description" data-url="project-details">
                                            <i className="fa fa-whatsapp" />
                                        </button>
                                        <button className="m_icon" title="telegram" data-sharer="telegram" data-title="Essential Steps to Writing Job Description" data-url="project-details" data-to="+44555-03564">
                                            <i className="fa fa-telegram" />
                                        </button>
                                        <button className="m_icon" title="skype" data-sharer="skype" data-url="project-details" data-title="Essential Steps to Writing Job Description">
                                            <i className="fa fa-skype" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img width={370} height={247} src="/assets/images/projects/project-3-img.jpg" className="wp-post-image" alt="img" />
                                <Link href="project-details" className="pro-link" />
                                <div className="overlay"> </div>
                                <div className="text">
                                    <ul>
                                        <li>Date : <span>February 05, {new Date().getFullYear()}</span></li>
                                        <li>Client :<span>Jalkan Sisters Group</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item    col-lg-12 col-md-12 col-sm-12 col-xs-12  project_category-leadership">
                        <div className="project_box style_three clearfix">
                            <div className="content_inner">
                                <div><Link href="#">leadership</Link></div>
                                <h2><Link href="project-details">Company Values &amp; The Relationship</Link></h2>
                                <p className="short_desc">To take a trivial example which of undertakes laborious
                                    physical exercise.</p>
                                <Link href="project-details" className="read_more">Read More <span className="icon-right-arrow-long" /></Link>
                                <div className="share_me">
                                    <div className="share_socail">
                                        <div className="title">Share</div>
                                        <button className="m_icon" title="facebook" data-sharer="facebook" data-title="Company Values & The Relationship" data-url="project-details">
                                            <i className="fa fa-facebook" />
                                        </button>
                                        <button className="m_icon" title="twitter" data-sharer="twitter" data-title="Company Values & The Relationship" data-url="project-details">
                                            <i className="fa fa-twitter" />
                                        </button>
                                        <button className="m_icon" title="whatsapp" data-sharer="whatsapp" data-title="Company Values & The Relationship" data-url="project-details">
                                            <i className="fa fa-whatsapp" />
                                        </button>
                                        <button className="m_icon" title="telegram" data-sharer="telegram" data-title="Company Values & The Relationship" data-url="project-details" data-to="+44555-03564">
                                            <i className="fa fa-telegram" />
                                        </button>
                                        <button className="m_icon" title="skype" data-sharer="skype" data-url="project-details" data-title="Company Values & The Relationship">
                                            <i className="fa fa-skype" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img width={370} height={246} src="/assets/images/projects/project-1-img.jpg" className="wp-post-image" alt="img" />
                                <Link href="project-details" className="pro-link" />
                                <div className="overlay"> </div>
                                <div className="text">
                                    <ul>
                                        <li>Date : <span>April 14, {new Date().getFullYear()}</span></li>
                                        <li>Client :<span>The Sixmothers Group</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item    col-lg-12 col-md-12 col-sm-12 col-xs-12  project_category-pre-sale">
                        <div className="project_box style_three clearfix">
                            <div className="content_inner">
                                <div><Link href="#">pre-sale</Link></div>
                                <h2><Link href="project-details">Time HR Prepares Plastic Contract
                                    Manufacturer</Link></h2>
                                <p className="short_desc">STHRM, Inc. was hired to evaluate the company’s human
                                    resources department and…</p>
                                <Link href="project-details" className="read_more">Read More <span className="icon-right-arrow-long" /></Link>
                                <div className="share_me">
                                    <div className="share_socail">
                                        <div className="title">Share</div>
                                        <button className="m_icon" title="facebook" data-sharer="facebook" data-title="Time HR Prepares Plastic Contract Manufacturer" data-url="project-details">
                                            <i className="fa fa-facebook" />
                                        </button>
                                        <button className="m_icon" title="twitter" data-sharer="twitter" data-title="Time HR Prepares Plastic Contract Manufacturer" data-url="project-details">
                                            <i className="fa fa-twitter" />
                                        </button>
                                        <button className="m_icon" title="whatsapp" data-sharer="whatsapp" data-title="Time HR Prepares Plastic Contract Manufacturer" data-url="project-details">
                                            <i className="fa fa-whatsapp" />
                                        </button>
                                        <button className="m_icon" title="telegram" data-sharer="telegram" data-title="Time HR Prepares Plastic Contract Manufacturer" data-url="project-details" data-to="+44555-03564">
                                            <i className="fa fa-telegram" />
                                        </button>
                                        <button className="m_icon" title="skype" data-sharer="skype" data-url="project-details" data-title="Time HR Prepares Plastic Contract Manufacturer">
                                            <i className="fa fa-skype" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img width={370} height={208} src="/assets/images/projects/project-4-img.jpg" className="wp-post-image" alt="img" />
                                <Link href="project-details" className="pro-link" />
                                <div className="overlay"> </div>
                                <div className="text">
                                    <ul>
                                        <li>Date : <span>January 22, {new Date().getFullYear()}</span></li>
                                        <li>Client :<span>The Sixmothers Group</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12  project_category-recruiting">
                        <div className="project_box style_three clearfix">
                            <div className="content_inner">
                                <div><Link href="#">recruiting</Link></div>
                                <h2><Link href="project-details">Shared Time Human Resources Management</Link>
                                </h2>
                                <p className="short_desc">Shared Time Human Resources Management, Inc. is a
                                    value-oriented resource for companies…</p>
                                <Link href="project-details" className="read_more">Read More <span className="icon-right-arrow-long" /></Link>
                                <div className="share_me">
                                    <div className="share_socail">
                                        <div className="title">Share</div>
                                        <button className="m_icon" title="facebook" data-sharer="facebook" data-title="Shared Time Human Resources Management" data-url="project-details">
                                            <i className="fa fa-facebook" />
                                        </button>
                                        <button className="m_icon" title="twitter" data-sharer="twitter" data-title="Shared Time Human Resources Management" data-url="project-details">
                                            <i className="fa fa-twitter" />
                                        </button>
                                        <button className="m_icon" title="whatsapp" data-sharer="whatsapp" data-title="Shared Time Human Resources Management" data-url="project-details">
                                            <i className="fa fa-whatsapp" />
                                        </button>
                                        <button className="m_icon" title="telegram" data-sharer="telegram" data-title="Shared Time Human Resources Management" data-url="project-details" data-to="+44555-03564">
                                            <i className="fa fa-telegram" />
                                        </button>
                                        <button className="m_icon" title="skype" data-sharer="skype" data-url="project-details" data-title="Shared Time Human Resources Management">
                                            <i className="fa fa-skype" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img width={370} height={247} src="/assets/images/projects/project-6-img.jpg" className="wp-post-image" alt="img" />
                                <Link href="project-details" className="pro-link" />
                                <div className="overlay"> </div>
                                <div className="text">
                                    <ul>
                                        <li>Date : <span>February 05, {new Date().getFullYear()}</span></li>
                                        <li>Client :<span>Jalkan Sisters Group</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item    col-lg-12 col-md-12 col-sm-12 col-xs-12  project_category-values">
                        <div className="project_box style_three clearfix">
                            <div className="content_inner">
                                <div><Link href="#">values</Link></div>
                                <h2><Link href="project-details">Six Essential Steps To Writing Successful
                                    Job</Link></h2>
                                <p className="short_desc">In its purest form, a position description indicates the
                                    work to be…</p>
                                <Link href="project-details" className="read_more">Read More <span className="icon-right-arrow-long" /></Link>
                                <div className="share_me">
                                    <div className="share_socail">
                                        <div className="title">Share</div>
                                        <button className="m_icon" title="facebook" data-sharer="facebook" data-title="Six Essential Steps To Writing Successful Job" data-url="project-details">
                                            <i className="fa fa-facebook" />
                                        </button>
                                        <button className="m_icon" title="twitter" data-sharer="twitter" data-title="Six Essential Steps To Writing Successful Job" data-url="project-details">
                                            <i className="fa fa-twitter" />
                                        </button>
                                        <button className="m_icon" title="whatsapp" data-sharer="whatsapp" data-title="Six Essential Steps To Writing Successful Job" data-url="project-details">
                                            <i className="fa fa-whatsapp" />
                                        </button>
                                        <button className="m_icon" title="telegram" data-sharer="telegram" data-title="Six Essential Steps To Writing Successful Job" data-url="project-details" data-to="+44555-03564">
                                            <i className="fa fa-telegram" />
                                        </button>
                                        <button className="m_icon" title="skype" data-sharer="skype" data-url="project-details" data-title="Six Essential Steps To Writing Successful Job">
                                            <i className="fa fa-skype" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img width={370} height={247} src="/assets/images/projects/project-5-img.jpg" className="wp-post-image" alt="img" />
                                <Link href="project-details" className="pro-link" />
                                <div className="overlay"> </div>
                                <div className="text">
                                    <ul>
                                        <li>Date : <span>December 08, 2020</span></li>
                                        <li>Client :<span>James Studio</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
