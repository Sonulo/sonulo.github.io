import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogListView() {

    return (
        <>
            <Layout breadcrumbTitle="Blog List View">
                <div className="auto-container right-sidebar">
                    <div className="row default_row">
                        <div id="primary" className="content-area  col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <section className="blog_post_section one_column style_two">
                                {/*===============spacing==============*/}
                                <div className="pd_top_90" />
                                {/*===============spacing==============*/}
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box default_style list_view has_images">
                                            <div className="image img_hover-1">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" />
                                                <Link href="#" className="categories">
                                                    <i className="icon-folder" />Coaching
                                                </Link>
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/" >Why Should Business Payroll Outsourcing?</Link></h2>
                                                    <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                                    <Link href="#" className="link__go">Read More</Link>
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
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-8.jpg" className="img-fluid" alt="img" />
                                                <Link href="#" className="categories">
                                                    <i className="icon-folder" />HR Consulting
                                                </Link>
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/" >Most Employees Support Measures</Link></h2>
                                                    <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                                    <Link href="#" className="link__go">Read More</Link>
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
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" />
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/" >How to Handle Employee</Link></h2>
                                                    <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                                    <Link href="#" className="link__go">Read More</Link>
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
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-6.jpg" className="img-fluid" alt="img" />
                                                <Link href="#" className="categories">
                                                    <i className="icon-folder" />Coaching
                                                </Link>
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/" >Retaining Good Employees &amp; Motivated</Link></h2>
                                                    <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                                    <Link href="#" className="link__go">Read More</Link>
                                                </div>
                                                <div className="auhtour_box">
                                                    <img alt="img" src="/assets/images/auth-1.png" height={60} width={60} className="img-fluid" />
                                                    <div className="contnet_a">
                                                        <p>POSTED BY</p>
                                                        <h4>
                                                            Roman Brayden
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box default_style list_view has_images">
                                            <div className="image img_hover-1">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-5.jpg" className="img-fluid" alt="img" />
                                                <Link href="#" className="categories"><i className="icon-folder" />Compliance Audits</Link>
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/" >Understanding Executive Coaching</Link></h2>
                                                    <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                                    <Link href="#" className="link__go">Read More</Link>
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
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-4.jpg" className="img-fluid" alt="img" />
                                                <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/" >How to Handle Your Good Employee</Link></h2>
                                                    <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                                    <Link href="#" className="link__go">Read More</Link>
                                                </div>
                                                <div className="auhtour_box">
                                                    <img alt="img" src="/assets/images/auth-2.png" height={60} width={60} className="img-fluid" />
                                                    <div className="contnet_a">
                                                        <p>POSTED BY</p>
                                                        <h4>
                                                            Roman Brayden
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
                                                <Link href="#" className="categories"><i className="icon-folder" />Employee Relations</Link>
                                            </div>
                                            <div className="content_box">
                                                <div className="date">
                                                    <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                </div>
                                                <div className="source">
                                                    <h2 className="title"><Link href="/" >Workforce Challenges &amp; Opportunities</Link></h2>
                                                    <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                                    <Link href="#" className="link__go">Read More</Link>
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
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination text-center">
                                                <li className="active">
                                                    <Link href="blog-simple">1</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-simple">2</Link>
                                                </li>
                                                <li className="next_link">
                                                    <Link href="blog-simple">
                                                        <div className="nav-next"><i className="fas fa-angle-right" /></div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_70" />
                                {/*===============spacing==============*/}
                            </section>
                        </div>
                        <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                            <div className="side_bar">
                                {/*===============spacing==============*/}
                                <div className="pd_top_90" />
                                {/*===============spacing==============*/}
                                <div className="widgets_grid_box">
                                    <form role="search" method="get" action="index/">
                                        <div className="wp-block-search__inside-wrapper">
                                            <input type="search" name="s" placeholder="Key Words here" required />
                                            <i className="fa fa-search" />
                                        </div>
                                    </form>
                                </div>
                                <div className="widgets_grid_box">
                                    <h2 className="widget-title">About Authour</h2>
                                    <div className="about_authour_widget">
                                        <h3>Hi! I’m Jacob Leonado</h3>
                                        <img src="/assets/images/authour-image-wdts.jpg" alt="authourimage" />
                                        <p>Obligations of business will frequently occur that pleasure have too repudiated.</p>
                                        <Link href="#">All My Post</Link>
                                    </div>
                                </div>
                                <div className="widgets_grid_box">
                                    <h2 className="widget-title">Post Categories</h2>
                                    <ul className="wp-block-categories">
                                        <li><Link href="#">Beds</Link> (1)</li>
                                        <li><Link href="#">Coaching</Link> (5)</li>
                                        <li><Link href="#">Compliance Audits</Link> (5)</li>
                                        <li><Link href="#">Employee Relations</Link> (8)</li>
                                        <li><Link href="#">Furnitures</Link> (1)</li>
                                        <li><Link href="#">HR Consulting</Link> (7)</li>
                                        <li><Link href="#">Lights</Link> (1)</li>
                                        <li><Link href="#">Recruiting</Link> (6)</li>
                                        <li><Link href="#">Small Business HR</Link> (7)</li>
                                        <li><Link href="#">Tables</Link> (1)</li>
                                    </ul>
                                </div>
                                <div className="widgets_grid_box">
                                    <h2 className="widget-title">Recent Posts</h2>
                                    <div className="widget_post_box">
                                        <div className="blog_in clearfix image_in">
                                            <div className="image">
                                                <img decoding="async" src="/assets/images/blog/blog-image-9.jpg" alt="img" />
                                            </div>
                                            <div className="content_inner">
                                                <p className="post-date"><span className="icon-calendar" />October 8, {new Date().getFullYear()}</p>
                                                <h3><Link href="/">Why Should Business Payroll Outsourcing?</Link></h3>
                                            </div>
                                        </div>
                                        <div className="blog_in clearfix image_in">
                                            <div className="image">
                                                <img decoding="async" src="/assets/images/blog/blog-image-8.jpg" alt="img" />
                                            </div>
                                            <div className="content_inner">
                                                <p className="post-date"><span className="icon-calendar" />October 8, {new Date().getFullYear()}</p>
                                                <h3><Link href="/">Most Employees Support Measures</Link></h3>
                                            </div>
                                        </div>
                                        <div className="blog_in clearfix image_in">
                                            <div className="image">
                                                <img decoding="async" src="/assets/images/blog/blog-image-7.jpg" alt="img" />
                                            </div>
                                            <div className="content_inner">
                                                <p className="post-date"><span className="icon-calendar" />October 8, {new Date().getFullYear()}</p>
                                                <h3><Link href="/">How to Handle Employee</Link></h3>
                                            </div>
                                        </div>
                                        <div className="blog_in clearfix image_in">
                                            <div className="image">
                                                <img decoding="async" src="/assets/images/blog/blog-image-6.jpg" alt="img" />
                                            </div>
                                            <div className="content_inner">
                                                <p className="post-date"><span className="icon-calendar" />October 8, {new Date().getFullYear()}</p>
                                                <h3><Link href="/">Retaining Good Employees &amp; Motivated</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widgets_grid_box">
                                    <h2 className="widget-title">Tag Clouds</h2>
                                    <div className="wp-block-tag-cloud">
                                        <Link href="#">Appraisal</Link>
                                        <Link href="#">Business</Link>
                                        <Link href="#">Contract</Link>
                                        <Link href="#">Data</Link>
                                        <Link href="#">Efficiency</Link>
                                        <Link href="#">Employment</Link>
                                        <Link href="#">HR Procedures</Link>
                                        <Link href="#">Legal</Link>
                                        <Link href="#">Management</Link>
                                        <Link href="#">Obligations</Link>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_70" />
                                {/*===============spacing==============*/}
                            </div>
                        </aside>
                    </div>
                </div>

                <section className="newsteller style_one bg_dark_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_40" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h2>Join Our Mailing List</h2>
                                    <p>For receiving our news and updates in your inbox directly. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="item_scubscribe">
                                    <div className="input_group">
                                        <form className="mc4wp-form" method="post" data-name="Subscibe">
                                            <div className="mc4wp-form-fields">
                                                <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                <input type="submit" defaultValue="Sign up" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </section>


            </Layout>
        </>
    )
}