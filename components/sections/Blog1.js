import Link from "next/link"

export default function Blog1() {
    return (
        <>
            <section className="blog-post" id="blog">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center  dark_color">
                                <div className="title_sections">
                                    <div className="before_title"> Find Out Our</div>
                                    <h2>Insights &amp; Intelligence</h2>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <section className="two_column news_wrapper_grid">
                            <div className="grid_show_case grid_layout clearfix">
                                <div className="news_box style_two grid_box _card has_images">
                                    <div className="content_box">
                                        <div className="overlay"> </div>
                                        <img src="/assets/images/blog/blog-image-1.jpg" className="img-fluid" alt="img" />
                                        <div className="category">
                                            <Link href="#" className="categories"><i className="icon-folder" />Compliance
                                                Audits</Link>
                                        </div>
                                        <div className="content_mid">
                                            <span className="date_in_number">Oct 06 , {new Date().getFullYear()}</span>
                                            <h2 className="title"><Link href="/blog-single">Outsource Accounting
                                                &amp; HR Functions</Link></h2>
                                        </div>
                                        <div className="auhtour_box">
                                            <img alt="img" className="img-fluid" src="/assets/images/auth-1.png" height={60} width={60} />
                                            <div className="contnet_a">
                                                <p>POSTED BY</p>
                                                <h4> Evan Thomas </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news_box style_two grid_box _card has_images">
                                    <div className="content_box">
                                        <div className="overlay"> </div>
                                        <img src="/assets/images//blog/blog-image-11.jpg" className="img-fluid" alt="img" />
                                        <div className="category">
                                            <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                        </div>
                                        <div className="content_mid">
                                            <span className="date_in_number">Oct 08 , {new Date().getFullYear()}</span>
                                            <h2 className="title"><Link href="/blog-single">Workplace problems in
                                                your business?</Link></h2>
                                        </div>
                                        <div className="auhtour_box">
                                            <img alt="img" className="img-fluid" src="/assets/images/auth-2.png" height={60} width={60} />
                                            <div className="contnet_a">
                                                <p>POSTED BY</p>
                                                <h4> Roman Brayden </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="four_column news_wrapper_grid">
                            <div className="grid_show_case grid_layout clearfix">
                                <div className="news_box style_six grid_box _card has_images">
                                    <div className="content_box">
                                        <div className="overlay"> </div>
                                        <img width={852} height={812} src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" />
                                        <div className="category">
                                            <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                        </div>
                                        <div className="content_mid">
                                            <span className="date_in_number">Oct 08 , {new Date().getFullYear()}</span>
                                            <h2 className="title"><Link href="/blog-single">Why Should Business
                                                Payroll Outsourcing?</Link></h2>
                                        </div>
                                        <div className="auhtour_box">
                                            <img alt="img" className="img-fluid" src="/assets/images/auth-2.png" height={60} width={60} />
                                            <div className="contnet_a">
                                                <p>POSTED BY</p>
                                                <h4> Evan Thomas </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news_box style_six grid_box _card has_images">
                                    <div className="content_box">
                                        <div className="overlay"> </div>
                                        <img width={1047} height={697} src="/assets/images/blog/blog-image-8.jpg" className="img-fluid" alt="img" />
                                        <div className="category">
                                            <Link href="#" className="categories"><i className="icon-folder" />HR
                                                Consulting</Link>
                                        </div>
                                        <div className="content_mid">
                                            <span className="date_in_number">Oct 08 , {new Date().getFullYear()}</span>
                                            <h2 className="title"><Link href="/blog-single">Workforce Challenges
                                                &amp; Opportunities</Link></h2>
                                        </div>
                                        <div className="auhtour_box">
                                            <img alt="img" className="img-fluid" src="/assets/images/auth-1.png" height={60} width={60} />
                                            <div className="contnet_a">
                                                <p>POSTED BY</p>
                                                <h4> Roman Brayden </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news_box style_six grid_box _card has_images">
                                    <div className="content_box">
                                        <div className="overlay"> </div>
                                        <img width={1557} height={1038} src="/assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" />
                                        <div className="category">
                                            <Link href="#" className="categories"><i className="icon-folder" />Compliance
                                                Audits</Link>
                                        </div>
                                        <div className="content_mid">
                                            <span className="date_in_number">Oct 08 , {new Date().getFullYear()}</span>
                                            <h2 className="title"><Link href="/blog-single">How to Handle Your Good
                                                Employee</Link></h2>
                                        </div>
                                        <div className="auhtour_box">
                                            <img alt="img" className="img-fluid" src="/assets/images/auth-2.png" height={60} width={60} />
                                            <div className="contnet_a">
                                                <p>POSTED BY</p>
                                                <h4> Evan Thomas </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news_box style_six grid_box _card has_images">
                                    <div className="content_box">
                                        <div className="overlay"> </div>
                                        <img width={593} height={396} src="/assets/images/blog/blog-image-6.jpg" className="img-fluid" alt="img" />
                                        <div className="category">
                                            <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                        </div>
                                        <div className="content_mid">
                                            <span className="date_in_number">Oct 08 , {new Date().getFullYear()}</span>
                                            <h2 className="title"><Link href="/blog-single">Retaining Good Employees
                                                &amp; Motivated</Link></h2>
                                        </div>
                                        <div className="auhtour_box">
                                            <img alt="img" className="img-fluid" src="/assets/images/auth-2.png" height={60} width={60} />
                                            <div className="contnet_a">
                                                <p>POSTED BY</p>
                                                <h4> Roman Brayden </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
