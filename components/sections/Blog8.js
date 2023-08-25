import Link from "next/link"
export default function Blog8() {
    return (
        <>
            <section className="blog-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">From Our News</div>
                                    <h2 className="title">Latest Modern Furniture Design.</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row gutter_30px">
                        <div className="col-lg-12">
                            <div className="blog_post_section three_column news_wrapper_grid style_ten">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box style_ten">
                                            <div className="image_box">
                                                <img src="/assets/images/blog/blog-image-12.jpg" className="img-fluid" alt="img" />
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
                                                <img src="/assets/images/blog/blog-image-13.jpg" className="img-fluid" alt="img" />
                                            </div>
                                            <h2 className="title"><Link href="/blog-single" >Shining a New Light on
                                                Marsha P. Jonson</Link ></h2>
                                            <ul>
                                                <li className="cag"><Link href="#" className="categories"><i className="icon-folder" />Lights</Link >
                                                </li>
                                                <li className="dte"><i className="icon-clock" />July 7, {new Date().getFullYear()}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_ten">
                                            <div className="image_box">
                                                <img src="/assets/images/blog/blog-image-14.jpg" className="img-fluid" alt="img" />
                                            </div>
                                            <h2 className="title"><Link href="/blog-single" >Home Tour: Cleo &amp;
                                                McShane Murnane</Link ></h2>
                                            <ul>
                                                <li className="cag"><Link href="#" className="categories"><i className="icon-folder" />Beds</Link >
                                                </li>
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
                <div className="pd_bottom_60" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
