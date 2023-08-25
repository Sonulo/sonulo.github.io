import Link from "next/link"
export default function Breadcrumb({ breadcrumbTitle, blogMetaSingle }) {
    return (
        <>
            <div className={`page_header_default style_one ${blogMetaSingle ? "blog_single_pageheader" : ""}`}>
                <div className="parallax_cover">
                    <div className="simpleParallax"><img src="/assets/images/page-header-default.jpg" alt="bg_image" className="cover-parallax" /></div>
                </div>
                <div className="page_header_content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <div className="title_page">
                                        {breadcrumbTitle}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">{breadcrumbTitle}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {blogMetaSingle &&
                    <div className="meta_blog_single">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="left_side">
                                        <div className="category"><a href="#" className="categors"><i className="icon-folder" />Coaching</a>
                                        </div>
                                        <div className="comments">
                                            <i className="icon-text" />
                                            <a href="#comment" className="Comments are Closed">Post Comment</a>
                                        </div>
                                    </div>
                                    <div className="right_side">
                                        <div className="content_box_auht d-flex">
                                            <div className="authour_content">
                                                <h6>Posted By</h6>
                                                <h4>Evan Thomas</h4>
                                            </div>
                                            <div className="authour_image">
                                                <img alt="img" src="https://secure.gravatar.com/avatar/7ea8dafdb4e8f044dda06278138291dd?s=50&d=mm&r=g" height={50} width={50} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </>
    )
}
