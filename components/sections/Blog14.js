import Link from "next/link"
export default function Blog14() {
    return (
        <>
            <section className="blog-post" id="blog">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="title_all_box style_seven text-center">
                                <div className="title_sections">
                                    <div className="before_title"> <span className="icon-briefcase icon" /> NEWS &amp;
                                        UPDATES</div>
                                    <h2>Featured News and Updates</h2>
                                    <div className="small_text_sub">News &amp; Updates</div>
                                    <p>We work with your company to identify position requirements, implement
                                        recruitment programs, and initiate employee assessments that maximize
                                        recruitment efforts</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                    <div className="blog_all_styles grid ">
                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">
                                <div className="news_box type_two">
                                    <div className="image_box clearfix ">
                                        <div className="image_box_inner">
                                            <img src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" />
                                        </div>
                                        <div className="authour_details">
                                            <h6><Link href="#"> Evan Thomas </Link > </h6>
                                            <p> <Link href="/blog-single" >8 Oct , {new Date().getFullYear()} </Link > </p>
                                        </div>
                                    </div>
                                    <div className="content_inner">
                                        <h2 className="entry-title">
                                            <Link href="/blog-single">
                                                Why Should Business Payroll Outsourcing?
                                            </Link >
                                        </h2>
                                        <p className="short_desc">
                                            How well this mistaken ideas off denouncing pleasure
                                            &amp; praisings will give you complete.
                                        </p>
                                    </div>
                                    <div className="overlay">
                                        <div className="text_box">
                                            <div className="authour_details">
                                                <h6><Link href="#"> Evan Thomas </Link > </h6>
                                                <p> <Link href="/blog-single" >8 Oct , {new Date().getFullYear()} </Link ></p>
                                            </div>
                                            <h2 className="entry-title"><Link href="/blog-single">
                                                Why Should Business Payroll Outsourcing?
                                            </Link >
                                            </h2>
                                        </div>
                                        <div className="bottom_content clearfix">
                                            <div className="continure_reading">
                                                <Link href="/blog-single" className="read_more type_two">
                                                    Read More
                                                    <span className="icon-arrow-right" />
                                                </Link >
                                            </div>
                                            <div className="comments">
                                                <i className="icon-text" />
                                                <span className="Comments are Closed">Post Comment</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* /.col-lg-3 */}
                            <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">
                                <div className="news_box type_two">
                                    <div className="image_box clearfix ">
                                        <div className="image_box_inner">
                                            <img src="/assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" />
                                        </div>
                                        <div className="authour_details">
                                            <h6><Link href="/blog-single"> Evan Thomas </Link > </h6>
                                            <p> <Link href="/blog-single" >8 Oct , {new Date().getFullYear()} </Link ></p>
                                        </div>
                                    </div>
                                    <div className="content_inner">
                                        <h2 className="entry-title">
                                            <Link href="/blog-single">
                                                How to Handle Employee With Works
                                            </Link >
                                        </h2>
                                        <p className="short_desc">
                                            How well this mistaken ideas off denouncing pleasure
                                            &amp; praisings will give you complete.
                                        </p>
                                    </div>
                                    <div className="overlay">
                                        <div className="text_box">
                                            <div className="authour_details">
                                                <h6><Link href="/blog-single"> Evan Thomas </Link ></h6>
                                                <p> <Link href="/blog-single" >8 Oct , {new Date().getFullYear()} </Link > </p>
                                            </div>
                                            <h2 className="entry-title">
                                                <Link href="/blog-single">
                                                    How to Handle Employee With Works
                                                </Link >
                                            </h2>
                                        </div>
                                        <div className="bottom_content clearfix">
                                            <div className="continure_reading">
                                                <Link href="/blog-single" className="read_more type_two">
                                                    Read More
                                                    <span className="icon-arrow-right" />
                                                </Link >
                                            </div>
                                            <div className="comments">
                                                <i className="icon-text" />
                                                <span className="Comments are Closed">Comments Off </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* /.col-lg-3 */}
                            <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">
                                <div className="news_box type_two">
                                    <div className="image_box clearfix ">
                                        <div className="image_box_inner">
                                            <img src="/assets/images/blog/blog-image-6.jpg" className="img-fluid" alt="img" />
                                        </div>
                                        <div className="authour_details">
                                            <h6><Link href="#"> Evan Thomas </Link > </h6>
                                            <p> <Link href="#" >8 Oct , {new Date().getFullYear()} </Link > </p>
                                        </div>
                                    </div>
                                    <div className="content_inner">
                                        <h2 className="entry-title">
                                            <Link href="/blog-single">
                                                Retaining Good Employees &amp; Motivated
                                            </Link >
                                        </h2>
                                        <p className="short_desc">
                                            How well this mistaken ideas off denouncing pleasure
                                            &amp; praisings will give you complete.
                                        </p>
                                    </div>
                                    <div className="overlay">
                                        <div className="text_box">
                                            <div className="authour_details">
                                                <h6><Link href="/blog-single"> Evan Thomas </Link > </h6>
                                                <p><Link href="/blog-single" >8 Oct , {new Date().getFullYear()} </Link ></p>
                                            </div>
                                            <h2 className="entry-title">
                                                <Link href="/blog-single">
                                                    Retaining Good Employees &amp; Motivated
                                                </Link >
                                            </h2>
                                        </div>
                                        <div className="bottom_content clearfix">
                                            <div className="continure_reading">
                                                <Link href="/blog-single" className="read_more type_two">
                                                    Read More <span className="icon-arrow-right" />
                                                </Link >
                                            </div>
                                            <div className="comments">
                                                <i className="icon-text" />
                                                <span className="Comments are Closed">Comments Off </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* /.col-lg-3 */}
                        </div>
                    </div>{/* /.blog-one */}
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_40" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
