import Link from "next/link"

export default function Blog3() {
    return (
        <>
            <section className="blog-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_two text-center dark_color">
                                <div className="title_sections two">
                                    <div className="before_title">
                                        Find Out Our
                                    </div>
                                    <h2>Insights &amp; Intelligence</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row gutter_40px">
                        <div className="col-lg-12">
                            <div className="blog_post_section  three_column news_wrapper_grid style_four ">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card style_man">
                                        <div className="news_box style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-11.jpg")' }}>
                                            <div className="overlay" />
                                            <div className="date">
                                                <span className="date_in_month">Oct</span>
                                                <span className="date_in_number">08</span>
                                            </div>
                                            <div className="content_box">
                                                <div className="category">
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                </div>
                                                <h2 className="title"><Link href="/blog-single" >Workplace problems in
                                                    your business?</Link></h2>
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
                                        <div className="news_box style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-3.jpg")' }}>
                                            <div className="overlay" />
                                            <div className="date">
                                                <span className="date_in_month">Oct</span>
                                                <span className="date_in_number">08</span>
                                            </div>
                                            <div className="content_box">
                                                <div className="category">
                                                    <Link href="#" className="categories"><i className="icon-folder" />Employee
                                                        Relations</Link>
                                                </div>
                                                <h2 className="title"><Link href="/blog-single" >Workforce Challenges
                                                    &amp; Opportunities</Link></h2>
                                            </div>
                                            <div className="auhtour_box">
                                                <img alt="img" src="/assets/images/auth-2.png" height={60} width={60} className="img-fluid" />
                                                <div className="contnet_a">
                                                    <p>POSTED BY</p>
                                                    <h4> Evan Thomas </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card style_man">
                                        <div className="news_box  style_four has_images" style={{ backgroundImage: 'url("assets/images/blog/blog-image-9.jpg")' }}>
                                            <div className="overlay"> </div>
                                            <div className="date">
                                                <span className="date_in_month">Oct</span>
                                                <span className="date_in_number">08</span>
                                            </div>
                                            <div className="content_box">
                                                <div className="category">
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                </div>
                                                <h2 className="title"><Link href="/blog-single" >Why Should Business
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
