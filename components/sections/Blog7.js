import Link from "next/link"
export default function Blog7() {
    return (
        <>
            <section className="blog-post">
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
                                <div className="pd_top_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog_post_section  three_column news_wrapper_grid style_nine ">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box style_nine">
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">08</span>
                                                    <span className="date_in_month">Oct</span>
                                                </div>
                                                <div className="content_bx_in">
                                                    <div className="category">
                                                        <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link >
                                                    </div>
                                                    <h2 className="title"><Link href="/blog-single" >Workplace problems
                                                        in
                                                        your business?</Link ></h2>
                                                </div>
                                            </div>
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-11.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_nine">
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">08</span>
                                                    <span className="date_in_month">Oct</span>
                                                </div>
                                                <div className="content_bx_in">
                                                    <div className="category">
                                                        <Link href="#" className="categories"><i className="icon-folder" />Employee
                                                            Relations</Link >
                                                    </div>
                                                    <h2 className="title"><Link href="/blog-single" >Workforce
                                                        Challenges
                                                        &amp; Opportunities</Link ></h2>
                                                </div>
                                            </div>
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-3.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_nine">
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">08</span>
                                                    <span className="date_in_month">Oct</span>
                                                </div>
                                                <div className="content_bx_in">
                                                    <div className="category">
                                                        <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link >
                                                    </div>
                                                    <h2 className="title"><Link href="/blog-single" >Why Should
                                                        Business
                                                        Payroll Outsourcing?</Link ></h2>
                                                </div>
                                            </div>
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" loading="lazy" />
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

