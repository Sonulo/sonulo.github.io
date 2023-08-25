import Link from "next/link"

export default function Blog4() {
    return (
        <>
            <section className="blog-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row gutter_35px">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">
                                    <div className="before_title">Find Out Our</div>
                                    <h2>Insights &amp; Intelligence</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_25" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="blog_post_section  three_column news_wrapper_grid style_five">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box style_five">
                                            <div className="content_box">
                                                <ul>
                                                    <li>
                                                        <div className="comments">
                                                            <i className="icon-text" />
                                                            <Link href="/blog-single" className="Comments are Closed">Post Comment</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><span className="fa fa-clock-o" />October 6, {new Date().getFullYear()}</Link>
                                                    </li>
                                                </ul>
                                                <h2 className="title"><Link href="/blog-single" >Policies &amp;
                                                    Procedures for Startups</Link></h2>
                                                <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp;
                                                    praisings will give you complete.</p>
                                                <Link href="/blog-single" className="link__go">Read more<i className="icon-right-arrow-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_five">
                                            <div className="content_box">
                                                <ul>
                                                    <li>
                                                        <div className="comments">
                                                            <i className="icon-text" />
                                                            <Link href="/blog-single" className="Comments are Closed">Post Comment</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                                    </li>
                                                </ul>
                                                <h2 className="title"><Link href="/blog-single" >Workplace problems in
                                                    your business?</Link></h2>
                                                <p className="short_desc">Banter! Could “workplace banter” cause problems in your
                                                    business? The short answer? Yes.</p>
                                                <Link href="/blog-single" className="link__go">Read more<i className="icon-right-arrow-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_five">
                                            <div className="content_box">
                                                <ul>
                                                    <li>
                                                        <div className="comments">
                                                            <i className="icon-text" />
                                                            <Link href="/blog-single" className="Comments are Closed">Post Comment</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><span className="fa fa-clock-o" />October 8, {new Date().getFullYear()}</Link>
                                                    </li>
                                                </ul>
                                                <h2 className="title"><Link href="/blog-single" >How to Handle Your Good
                                                    Employee</Link></h2>
                                                <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp;
                                                    praisings will give you complete.</p>
                                                <Link href="#" className="link__go">Read more<i className="icon-right-arrow-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_60" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
