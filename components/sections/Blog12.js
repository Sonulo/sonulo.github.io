import Link from "next/link"
export default function Blog12() {
    return (
        <>
            <section className="blog-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_70" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Find Out Our</div>
                                    <div className="title">News &amp; Announcements</div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="blog_post_section three_column style_ten">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box style_ten">
                                            <div className="image_box">
                                                <img loading="lazy" width={750} height={420} src="/assets/images/blog/blog-image-12.jpg" className="img-fluid" alt="img" />
                                            </div>
                                            <h2 className="title"><Link href="/blog-single" >My Bedside Table: The
                                                Fashion Designer</Link ></h2>
                                            <ul>
                                                <li className="cag"><Link href="#" className="categories"><i className="icon-folder" />Furnitures</Link > </li>
                                                <li className="dte"><i className="icon-clock" />July 7, {new Date().getFullYear()}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_ten">
                                            <div className="image_box">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-13.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <h2 className="title"><Link href="/blog-single" >Shining a New Light on
                                                Marsha P. Jonson</Link ></h2>
                                            <ul>
                                                <li className="cag"><Link href="#" className="categories"><i className="icon-folder" />Lights</Link > </li>
                                                <li className="dte"><i className="icon-clock" />July 7, {new Date().getFullYear()}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_ten">
                                            <div className="image_box">
                                                <img width={750} height={420} src="/assets/images/blog/blog-image-14.jpg" className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <h2 className="title"><Link href="/blog-single" >Home Tour: Cleo &amp;
                                                McShane Murnane</Link ></h2>
                                            <ul>
                                                <li className="cag"><Link href="#" className="categories"><i className="icon-folder" />Beds</Link > </li>
                                                <li className="dte"><i className="icon-clock" />July 8, {new Date().getFullYear()}</li>
                                            </ul>
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
