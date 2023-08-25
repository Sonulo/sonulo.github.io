import Isotope from "isotope-layout"
import Link from 'next/link'
import { useEffect, useRef } from "react"

export default function BlogMetroGrid() {
    const isotope = useRef()
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid_show_case", {
                itemSelector: ".grid_box",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid_box",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])

    return (
        <>
            <div className="grid_show_case grid_layout clearfix">
                <div className="grid_box _card style_man">
                    <div className="news_box style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-11.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Oct</span>
                            <span className="date_in_number">08</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Workplace problems
                                in your business?</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Evan Thomas </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box  style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-3.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Oct</span>
                            <span className="date_in_number">08</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Employee
                                    Relations</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Workforce Challenges
                                &amp; Opportunities</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Evan Thomas </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-9.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Oct</span>
                            <span className="date_in_number">08</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Why Should Business
                                Payroll Outsourcing?</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Evan Thomas </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box  style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-5.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Oct</span>
                            <span className="date_in_number">08</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Compliance
                                    Audits</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Understanding
                                Executive Coaching</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Evan Thomas </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box  style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-10.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Oct</span>
                            <span className="date_in_number">08</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Employee
                                    Relations</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Supporting Employees
                                Through The Menopause Guidance For Employers</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Evan Thomas </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box  style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-13.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Jul</span>
                            <span className="date_in_number">07</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Lights</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Shining a New Light
                                on Marsha P. Jonson</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-2.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Roman Brayden </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box  style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-6.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Oct</span>
                            <span className="date_in_number">08</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Retaining Good
                                Employees &amp; Motivated</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-2.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Roman Brayden </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box  style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-2.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Oct</span>
                            <span className="date_in_number">06</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Policies &amp;
                                Procedures for Startups</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-2.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Roman Brayden </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-1.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Oct</span>
                            <span className="date_in_number">06</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="#" className="categories"><i className="icon-folder" />Compliance
                                    Audits</Link>
                            </div>
                            <h2 className="title"><Link href="/" >Outsource Accounting
                                &amp; HR Functions</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Evan Thomas</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid_box _card style_man">
                    <div className="news_box  style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-12.jpg")' }}>
                        <div className="overlay"> </div>
                        <div className="date">
                            <span className="date_in_month">Jul</span>
                            <span className="date_in_number">07</span>
                        </div>
                        <div className="content_box">
                            <div className="category">
                                <Link href="index/category/furnitures/" className="categories"><i className="icon-folder" />Furnitures</Link>
                            </div>
                            <h2 className="title"><Link href="/" >My Bedside Table:
                                The Fashion Designer</Link></h2>
                        </div>
                        <div className="auhtour_box">
                            <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                            <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4> Evan Thomas </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
