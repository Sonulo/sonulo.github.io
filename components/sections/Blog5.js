import Link from "next/link"
export default function Blog5() {
    return (
        <>
            <section className="blog-section">
                {/*===============spacing==============*/}
                <div className="pd_top_75" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row gutter_20px">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">
                                    <div className="before_title">Find Out Our</div>
                                    <h2>Insights &amp; Intelligence</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_35" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row gutter_30px">
                        <div className="col-lg-12">
                            <div className="blog_post_section  three_column  style_seven">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-11.jpg" className="img-fluid" alt="img" />
                                                <div className="date">October 8, {new Date().getFullYear()}</div>
                                            </div>
                                            <div className="content_box ">
                                                <ul>
                                                    <li><Link href="#"><span className="fa fa-user " />Evan Thomas</Link ></li>
                                                    <li>
                                                        <div className="comments">
                                                            <i className="icon-text" />
                                                            <Link href="/blog-single" className="Comments are Closed">Post
                                                                Comment</Link >
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h2 className="title"><Link href="/blog-single" >Workplace
                                                    problems in your business?</Link ></h2>
                                                <p className="short_desc">Banter! Could “workplace banter” cause problems in
                                                    your business? The short answer? Yes.</p>
                                                <Link href="/blog-single" className="read_more ">Read more<i className="icon-right-arrow-long" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-3.jpg" className="img-fluid" alt="img" />
                                                <div className="date">October 8, {new Date().getFullYear()}</div>
                                            </div>
                                            <div className="content_box ">
                                                <ul>
                                                    <li><Link href="#"><span className="fa fa-user " />Evan Thomas</Link ></li>
                                                    <li>
                                                        <div className="comments">
                                                            <i className="icon-text" />
                                                            <Link href="/blog-single" className="Comments are Closed">Post
                                                                Comment</Link >
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h2 className="title"><Link href="/blog-single" >Workforce
                                                    Challenges &amp; Opportunities</Link ></h2>
                                                <p className="short_desc">How well this mistaken ideas off denouncing pleasure
                                                    &amp; praisings will give you…</p>
                                                <Link href="#" className="read_more ">Read more<i className="icon-right-arrow-long" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" />
                                                <div className="date">October 8, {new Date().getFullYear()}</div>
                                            </div>
                                            <div className="content_box ">
                                                <ul>
                                                    <li><Link href="#"><span className="fa fa-user " />Evan Thomas</Link ></li>
                                                    <li>
                                                        <div className="comments">
                                                            <i className="icon-text" />
                                                            <Link href="/blog-single" className="Comments are Closed">Post
                                                                Comment</Link >
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h2 className="title"><Link href="/blog-single" >Why Should
                                                    Business Payroll Outsourcing?</Link ></h2>
                                                <p className="short_desc">How well this mistaken ideas off denouncing pleasure
                                                    &amp; praisings will give you…</p>
                                                <Link href="#" className="read_more ">Read more<i className="icon-right-arrow-long" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_65" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
