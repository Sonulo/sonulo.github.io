import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function BlogSimple() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.related-button-next',
            prevEl: '.related-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    };
    return (
        <>
            <Layout breadcrumbTitle="Blog Single" blogMetaSingle>
                <div className="auto-container left-sidebar">
                    <div className="row default_row">
                        <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <main id="main" className="site-main" role="main">
                                {/*===============spacing==============*/}
                                <div className="pd_top_90" />
                                {/*===============spacing==============*/}
                                <section className="blog_single_details_outer">
                                    <div className="single_content_upper">
                                        <div className="blog_feature_image">
                                            <img src="/assets/images/blog/blog-image-9.jpg" className="wp-post-image" alt="img" />
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_20" />
                                        {/*===============spacing==============*/}
                                        <div className="post_single_content">
                                            <h5>In a free hour, when our power choice is untrammelled and when
                                                nothing&nbsp;prevents our being able to do what we like best.</h5>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="description_box">
                                                <p>On the other hand, we denounce with righteous indignation dislike men who are so
                                                    beguiled demoralized by the charms of pleasure of the moment, so blinded by
                                                    desire, that they cannot foresee the pain and trouble that are bound to ensue;
                                                    and equal blame belongs to those who fail in their duty through weakness of will,
                                                    which is the same as saying through shrinking from toil and pain. These cases are
                                                    perfectly simple and easy to distinguish. In a free hour, when our power of
                                                    choice is untrammelled and when nothing prevents our to do what we like best,
                                                    every pleasure is to be welcomed and every pain avoided.</p>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <h3>Accounting</h3>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="description_box">
                                                <p>Indignation dislike men who are so beguiled demoralized by the charms of pleasure
                                                    of the moment blinded by desire, that they cannot foresee the pain and trouble
                                                    that are bound to ensue; and equal blame belongs to those who fail in their duty
                                                    through weakness of will, which is the same as saying through shrinking from
                                                    these cases are perfectly simple and easy to distinguish.</p>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_25" />
                                            {/*===============spacing==============*/}
                                            <div className="quotes_box style_one">
                                                <div className="icon">
                                                    <img src="/assets/images/quotes.png" className="svg_image" alt="icon png" />
                                                </div>
                                                <div className="content">
                                                    <h6>The key for us, number one, has always been hiring very smart people.</h6>
                                                    <h3>Lamont Shaun</h3>
                                                </div>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_25" />
                                            {/*===============spacing==============*/}
                                            <div className="description_box">
                                                <p>Foresee the pain and trouble that are bound to ensue; and equal blame belongs to
                                                    those who fail in their duty through weakness of will, which is the same as
                                                    saying through shrinking from toil and pain. These cases are perfectly simple and
                                                    easy to distinguish.</p>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <h3>HR Functions</h3>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="description_box">
                                                <p>To take a trivial example, which of us ever undertakes laborious physical
                                                    exercise, except to obtain some advantage from it? But who has any right to find
                                                    fault with a man who chooses to enjoy a pleasure that has no annoying
                                                    consequences, or one who avoids a pain that produces.</p>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="description_box">
                                                <p>Laborious physical exercise, except to obtain some advantage from it? But who has
                                                    any right to find fault with a man who chooses to enjoy a pleasure.</p>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="description_box">
                                                <p>Man who chooses to enjoy a pleasure that has no annoying consequences:</p>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="content_box_cn style_one">
                                                <div className="txt_content">
                                                    <h3>
                                                        <Link href="#" >Reducing Redundancy:</Link>
                                                    </h3>
                                                    <p>
                                                        Equal blame belongs to those who fail in their duty through weakness same
                                                        duty.
                                                    </p>
                                                </div>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="content_box_cn style_one">
                                                <div className="txt_content">
                                                    <h3>
                                                        <Link href="#" >Greater Retension Rates:</Link>
                                                    </h3>
                                                    <p>
                                                        Business it will frequently occur that pleasures have to be repudiated
                                                        annoyances accepted.
                                                    </p>
                                                </div>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="content_box_cn style_one">
                                                <div className="txt_content">
                                                    <h3>
                                                        <Link href="#" >Handling Employement:</Link>
                                                    </h3>
                                                    <p>
                                                        Holds in these matters to this principle of selection: he rejects pleasures to
                                                        secure.
                                                    </p>
                                                </div>
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_15" />
                                            {/*===============spacing==============*/}
                                            <div className="row gutter_30px">
                                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0">
                                                    <div className="simple_image_boxes">
                                                        <img src="/assets/images/blog/single-post-gal-1.jpg" className="simp_img img-fluid height_540px" alt="image" />
                                                    </div>
                                                    {/*===============spacing==============*/}
                                                    <div className="pd_bottom_30" />
                                                    {/*===============spacing==============*/}
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="simple_image_boxes">
                                                        <img src="/assets/images/blog/blog-image-9.jpg" className="simp_img img-fluid height_260" alt="image" />
                                                    </div>
                                                    {/*===============spacing==============*/}
                                                    <div className="pd_bottom_30" />
                                                    {/*===============spacing==============*/}
                                                    <div className="simple_image_boxes ">
                                                        <img src="/assets/images/blog/single-post-gal-2.jpg" className="simp_img img-fluid height_250px" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="invisible_normal_spacing" />
                                            <div className="description_box">
                                                <p>Duty through weakness of will, which is the same as saying through shrinking from
                                                    toil and pain. These cases are perfectly simple and easy to distinguish. In a
                                                    free hour, when our power of choice is untrammelled and when nothing prevents our
                                                    to do what we like best.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_content_lower">
                                        <div className="tags_and_share">
                                            <div className="d-flex">
                                                <div className="tags_content left_one">
                                                    <div className="box_tags_psot">
                                                        <div className="title">Tags</div>
                                                        <Link className="btn" href="#">#Appraisal</Link>
                                                        <Link className="btn" href="#">#Contract</Link>
                                                    </div>
                                                </div>
                                                <div className="share_content right_one">
                                                    <div className="share_socail">
                                                        <div className="title">Share</div>
                                                        <button className="m_icon" title="facebook" data-sharer="facebook" data-title="blog single" data-url="/">
                                                            <i className="fa fa-facebook" />
                                                        </button>
                                                        <button className="m_icon" title="twitter" data-sharer="twitter" data-title="blog single" data-url="/">
                                                            <i className="fa fa-twitter" />
                                                        </button>
                                                        <button className="m_icon" title="whatsapp" data-sharer="whatsapp" data-title="blog single" data-url="/">
                                                            <i className="fa fa-whatsapp" />
                                                        </button>
                                                        <button className="m_icon" title="telegram" data-sharer="telegram" data-title="blog single" data-url="/" data-to="+44555-03564">
                                                            <i className="fa fa-telegram" />
                                                        </button>
                                                        <button className="m_icon" title="skype" data-sharer="skype" data-url="/" data-title="blog single">
                                                            <i className="fa fa-skype" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sec_comments padding-t-8 padding-b-3" id="comment">
                                            <div className="container_no">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-12">
                                                        <div id="respond" className="comment-respond">
                                                            <h3 id="reply-title" className="comment-reply-title">
                                                                Post a comment
                                                            </h3>
                                                            <form action="#" method="post" id="commentform" className="comment-form">
                                                                <p className="title_para">Your email address will not be published.</p>
                                                                <p className="comment-form-comment"><label htmlFor="comment">Leave a
                                                                    Reply</label><textarea placeholder="Write your comment here..." id="comment" name="comment" rows={12} aria-required="true" defaultValue={""} /></p>
                                                                <p className="comment-form-author">
                                                                    <label htmlFor="name">Full Name</label>
                                                                    <input id="author" placeholder="ex. John Doe" name="author" type="text" size={30} aria-required="true" />
                                                                </p>
                                                                <p className="comment-form-email">
                                                                    <label htmlFor="comment">Email address</label>
                                                                    <input id="email" placeholder="ex. john@mail.com" name="email" type="text" size={30} aria-required="true" />
                                                                </p>
                                                                <p className="comment-form-url">
                                                                    <label htmlFor="name">Website Url</label>
                                                                    <input id="url" name="url" placeholder="ex. www.example.com" type="text" size={30} />
                                                                </p>
                                                                <p className="custom-control custom-checkbox">
                                                                    <input id="wp-comment-cookies-consent" className="custom-control-input" name="wp-comment-cookies-consent" type="checkbox" />
                                                                    <label className="custom-control-label pl-1 c-gray" htmlFor="wp-comment-cookies-consent">Save my name, and email in this
                                                                        browser for the next time I comment.</label>
                                                                </p>
                                                                <div className="clearfix" />
                                                                <p className="form-submit">
                                                                    <input name="submit" type="submit" id="submit" className="submit" defaultValue="Post  comment" />
                                                                    <input type="hidden" name="comment_post_ID" defaultValue={350} id="comment_post_ID" />
                                                                    <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                                                                </p>
                                                            </form>
                                                        </div>
                                                        {/* #respond */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="related_post">
                                        <div className="title_sections_inner">
                                            <h2>Related Posts</h2>
                                        </div>
                                        {/* Swiper */}
                                        <div className="swiper-container">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="news_box default_style list_view normal_view clearfix has_images">
                                                        <div className="image img_hover-1">
                                                            <img src="/assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" />
                                                            <Link href="#" className="categories">
                                                                <i className="icon-folder" />Compliance Audits
                                                            </Link>
                                                        </div>
                                                        <div className="content_box">
                                                            <div className="date">
                                                                <span className="date_in_number">October 8, {new Date().getFullYear()}</span>
                                                            </div>
                                                            <div className="source">
                                                                <h2 className="title"><Link href="/" >How to
                                                                    Handle Employee</Link></h2>
                                                                <p className="short_desc">How well this mistaken ideas off denouncing
                                                                    pleasure &amp; praisings will give you complete.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="news_box default_style list_view normal_view clearfix has_images">
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
                                                                <h2 className="title"><Link href="/" >Retaining
                                                                    Good Employees &amp; Motivated</Link></h2>
                                                                <p className="short_desc">How well this mistaken ideas off denouncing
                                                                    pleasure &amp; praisings will give you complete.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="news_box default_style list_view normal_view clearfix has_images">
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
                                                                <h2 className="title"><Link href="/" >Why Should
                                                                    Business Payroll Outsourcing?</Link></h2>
                                                                <p className="short_desc">How well this mistaken ideas off denouncing
                                                                    pleasure &amp; praisings will give you complete.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <div className="arrow_related">
                                            <div className="related-button-prev">
                                                <i className="fa fa-angle-left" />
                                            </div>
                                            <div className="related-button-next">
                                                <i className="fa fa-angle-right" />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_70" />
                                {/*===============spacing==============*/}
                            </main>
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
                {/*-newsteller-*/}
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