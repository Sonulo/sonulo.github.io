import Link from "next/link"
export default function Blog13() {
    return (
        <>
            <section className="blog-post" id="blog">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="title_all_box style_six text-center  dark_color">
                                <div className="title_sections">
                                    <div className="before_title"> <span className="icon-briefcase icon" /> NEWS &amp; UPDATES</div>
                                    <h2>Featured News and Updates</h2>
                                    <p>We work with your company to identify position requirements, implement recruitment
                                        programs, and initiate employee assessments that maximize recruitment efforts</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_10" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                    <div className="blog_all_styles grid ">
                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">
                                <div className="news_box type_one clearfix">
                                    <div className="news_inner">
                                        <div className="image_box">
                                            <img src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" />
                                            <div className="overlay" />
                                            <div className="post-category">
                                                <Link href="/blog-single" className="categories">
                                                    <i className="icon-folder" />
                                                    Compliance Audits
                                                </Link >
                                            </div>
                                        </div>
                                        <div className="content_box">
                                            <ul className="post-info clearfix">
                                                <li className="authour_name">
                                                    <i className="far fa-user" />
                                                    <Link href="#"> Evan Thomas </Link >
                                                </li>
                                                <li className="date">
                                                    <Link href="/blog-single">
                                                        <i className="far  fa-calendar" />
                                                        8 Oct , {new Date().getFullYear()}
                                                    </Link >
                                                </li>
                                            </ul>
                                            <h2 className="entry-title"><Link href="/blog-single">Why
                                                Should Business Payroll Outsourcing?</Link ></h2>
                                            <p className="short_desc">How well this mistaken ideas off denouncing
                                                pleasure &amp; praisings will give you complete.</p>
                                            <div className="bottom_content clearfix">
                                                <div className="continure_reading">
                                                    <Link href="/blog-single" className="read_more type_one">
                                                        Read More <span className="icon-arrow-right" /></Link >
                                                </div>
                                                <div className="comments">
                                                    <i className="icon-text" />
                                                    <Link href="/blog-single#respond" className="Comments are Closed">Post
                                                        Comment</Link >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* /.col-lg-3 */}
                            <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">
                                <div className="news_box type_one clearfix">
                                    <div className="news_inner">
                                        <div className="image_box">
                                            <img src="/assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" />
                                            <div className="overlay" />
                                            <div className="post-category">
                                                <Link href="/blog-single" className="categories">
                                                    <i className="icon-folder" />
                                                    HR Consulting
                                                </Link >
                                            </div>
                                        </div>
                                        <div className="content_box">
                                            <ul className="post-info clearfix">
                                                <li className="authour_name">
                                                    <i className="far fa-user" />
                                                    <Link href="/blog-single">
                                                        Evan Thomas
                                                    </Link >
                                                </li>
                                                <li className="date">
                                                    <Link href="/blog-single"><i className="far  fa-calendar" />
                                                        8 Oct , {new Date().getFullYear()}
                                                    </Link >
                                                </li>
                                            </ul>
                                            <h2 className="entry-title">
                                                <Link href="/blog-single">
                                                    How to Handle Employee With Works
                                                </Link >
                                            </h2>
                                            <p className="short_desc">How well this mistaken ideas off denouncing
                                                pleasure &amp; praisings will give you complete.</p>
                                            <div className="bottom_content clearfix">
                                                <div className="continure_reading">
                                                    <Link href="/blog-single" className="read_more type_one">
                                                        Read More <span className="icon-arrow-right" /></Link >
                                                </div>
                                                <div className="comments">
                                                    <i className="icon-text" />
                                                    <span className="Comments are Closed">Comments Off<span className="screen-reader-text"> on How to Handle Employee
                                                        With Works</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* /.col-lg-3 */}
                            <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">
                                <div className="news_box type_one clearfix">
                                    <div className="news_inner">
                                        <div className="image_box">
                                            <img width={750} height={420} src="/assets/images/blog/blog-image-6.jpg" className="img-fluid" alt="" decoding="async" loading="lazy" srcSet="assets/images/blog/blog-image-6.jpg 750w, assets/images/blog/blog-image-6-600x336.jpg 600w, assets/images/blog/blog-image-6-300x168.jpg 300w" sizes="(max-width: 750px) 100vw, 750px" />
                                            <div className="overlay" />
                                            <div className="post-category">
                                                <Link href="https://themepanthers.com/wp/creote/v2-new/category/recruiting/" className="categories"><i className="icon-folder" />Recruiting</Link >
                                            </div>
                                        </div>
                                        <div className="content_box">
                                            <ul className="post-info clearfix">
                                                <li className="authour_name"><i className="far fa-user" /><Link href="#">
                                                    Evan Thomas </Link > </li>
                                                <li className="date"> <Link href="https://themepanthers.com/wp/creote/v2-new/{new Date().getFullYear()}/10/08/retaining-good-employees-motivated/"><i className="far  fa-calendar" />8 Oct ,
                                                    {new Date().getFullYear()} </Link > </li>
                                            </ul>
                                            <h2 className="entry-title"><Link href="https://themepanthers.com/wp/creote/v2-new/{new Date().getFullYear()}/10/08/retaining-good-employees-motivated/">Retaining
                                                Good Employees &amp; Motivated</Link ></h2>
                                            <p className="short_desc">How well this mistaken ideas off denouncing
                                                pleasure &amp; praisings will give you complete.</p>
                                            <div className="bottom_content clearfix">
                                                <div className="continure_reading">
                                                    <Link href="https://themepanthers.com/wp/creote/v2-new/{new Date().getFullYear()}/10/08/retaining-good-employees-motivated/" className="read_more type_one">
                                                        Read More <span className="icon-arrow-right" /></Link >
                                                </div>
                                                <div className="comments">
                                                    <i className="icon-text" />
                                                    <span className="Comments are Closed">Comments Off<span className="screen-reader-text"> on Retaining Good
                                                        Employees &amp; Motivated</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* /.col-lg-3 */}
                        </div>
                    </div>{/* /.blog-one */}
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
