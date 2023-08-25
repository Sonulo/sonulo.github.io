import Link from "next/link"

export default function Blog2() {
    return (
        <>
            <section className="blog-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="large-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title"> Find Out Our</div>
                                    <h2>Insights &amp; Intelligence</h2>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog_post_section  two_column news_wrapper_grid style_two ">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box default_style list_view has_images">
                                            <div className="image img_hover-1">
                                                <img loading="lazy" width={750} height={420} src="/assets/images/blog/blog-image-11.jpg" className="img-fluid" alt="img" />
                                                <Link href="#" className="categories">
                                                    <i className="icon-folder" />Coaching
                                                </Link>
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/blog-single" >Workplace problems in
                                                        your business?</Link></h2>
                                                    <p className="short_desc">Banter! Could “workplace banter” cause problems in your
                                                        business? The short answer? Yes.</p>
                                                    <Link href="/blog-single" className="link__go">Read more</Link>
                                                </div>
                                                <div className="auhtour_box">
                                                    <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                                                    <div className="contnet_a">
                                                        <p>POSTED BY</p>
                                                        <h4>
                                                            Evan Thomas
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box default_style list_view has_images">
                                            <div className="image img_hover-1">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-3.jpg" className="img-fluid" alt="img" />
                                                <Link href="#" className="categories">
                                                    <i className="icon-folder" />Employee Relations
                                                </Link>
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/blog-single" >Workforce Challenges
                                                        &amp; Opportunities</Link></h2>
                                                    <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp;
                                                        praisings will give you complete.</p>
                                                    <Link href="#" className="link__go">Read more</Link>
                                                </div>
                                                <div className="auhtour_box">
                                                    <img alt="img" src="/assets/images/auth-2.png" height={60} width={60} className="img-fluid" />
                                                    <div className="contnet_a">
                                                        <p>POSTED BY</p>
                                                        <h4>
                                                            Evan Thomas
                                                        </h4>
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
                {/*===============spacing==============*/}
                <div className="pd_bottom_60" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
