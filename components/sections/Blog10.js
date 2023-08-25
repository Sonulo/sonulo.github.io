import Link from "next/link"
export default function Blog10() {
    return (
        <>
            <section className="blog-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Find Out Our</div>
                                    <h2>Insights &amp; Intelligence</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="blog_post_section three_column news_wrapper_grid style_eight">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box style_eight">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-2.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content_box">
                                                <div className="category">
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                </div>
                                                <h2 className="title"><Link href="/blog-single" >Policies &amp;
                                                    Procedures for Startups</Link></h2>
                                                <Link href="/blog-single" className="link__go">Continue Reading<i className="icon-right-arrow-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_eight">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-11.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content_box">
                                                <div className="category">
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                </div>
                                                <h2 className="title"><Link href="/blog-single" >Workplace problems in
                                                    your business?</Link></h2>
                                                <Link href="/blog-single" className="link__go">Continue Reading<i className="icon-right-arrow-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_eight">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-4.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content_box">
                                                <div className="category">
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                </div>
                                                <h2 className="title"><Link href="/blog-single" >How to Handle Your
                                                    Good
                                                    Employee</Link></h2>
                                                <Link href="/blog-single" className="link__go">Continue Reading<i className="icon-right-arrow-long" /></Link>
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
