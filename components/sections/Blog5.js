import Link from "next/link"
import CheckCircle from "../elements/CheckCircle"
export default function Blog5() {
    return (
        <>
            <section className="blog-section">
                {/*===============spacing==============*/}
                <div className="pd_top_75" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row gutter_20px">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">                                 
                                    <h1>Services</h1>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_55" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row gutter_30px">
                        <div className="col-lg-12">
                            <div className="blog_post_section  three_column  style_seven">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420}  src="/assets/images/service/icon2.png" className="img-fluid" alt="img" />
                                                <div className="date">Full Stack Development</div>
                                            </div>
                                            <div className="content_box ">                                             
                                                <h2 className="title"><Link href="/blog-single" >Full Stack Development</Link ></h2>
                                                <div className="service-list mb-4">
                                                <ul style={{listStyleType: "none"}}>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Front-end</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Back-end</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>UI/UX Design</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Cloud Native</strong>
                                                    </li>
                                                    <div className="pd_bottom_05" />                                           
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/service/icon1.png" className="img-fluid" alt="img" />
                                                <div className="date">Mobile App Development</div>
                                            </div>
                                            <div className="content_box ">                                             
                                                <h2 className="title"><Link href="/blog-single" >Mobile App Development</Link ></h2>
                                                <div className="service-list mb-4">
                                                <ul style={{listStyleType: "none"}}>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Native</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Hybrid</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Cross Platform</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>IOS and Android Apps</strong>
                                                    </li>
                                                    <div className="pd_bottom_05" />                                           
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/service/icon3.png" className="img-fluid" alt="img" />
                                                <div className="date">Machine Learning</div>
                                            </div>
                                            <div className="content_box ">                                             
                                                <h2 className="title"><Link href="/blog-single" >Machine Learning</Link ></h2>
                                                <div className="service-list mb-4">
                                                <ul style={{listStyleType: "none"}}>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Deep Learning</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Natural Language Processing</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Video Processing & Tracking</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Time Series Analysis</strong>
                                                    </li>
                                                    <div className="pd_bottom_05" />                                           
                                                </ul>
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
                <div className="pd_bottom_40" />
                {/*===============spacing==============*/}
            </section>
            <br></br>
            <div className="container">                  
                    <div className="row gutter_30px">
                        <div className="col-lg-12">
                            <div className="blog_post_section  three_column  style_seven">
                                <div className="grid_show_case grid_layout clearfix">
                                <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/service/icon4.png" className="img-fluid" alt="img" />
                                                <div className="date">AI Related Services</div>
                                            </div>
                                            <div className="content_box ">                                             
                                                <h2 className="title"><Link href="/blog-single" >AI Related Services</Link ></h2>
                                                <div className="service-list mb-4">
                                                <ul style={{listStyleType: "none"}}>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>AI Based Solutions</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Interactive Chatbots</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Speech Recognition</strong>
                                                    </li>
                                                    <div className="pd_bottom_30" />                                           
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/service/icon7.png" className="img-fluid" alt="img" />
                                                <div className="date">Data Analytics</div>
                                            </div>
                                            <div className="content_box ">                                             
                                                <h2 className="title"><Link href="/blog-single" >Data Analytics</Link ></h2>
                                                <div className="service-list mb-4">
                                                <ul style={{listStyleType: "none"}}>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Data Intelligence Analytics</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong> Realtime analytics solutions</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Enterprise data analytics</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Data Warehouse Design</strong>
                                                    </li>
                                                    <div className="pd_bottom_05" />                                           
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="news_box style_seven">
                                            <div className="image_box ">
                                                <img width={750} height={420} src="/assets/images/service/icon6.png" className="img-fluid" alt="img" />
                                                <div className="date">Web Hosting</div>
                                            </div>
                                            <div className="content_box ">                                             
                                                <h2 className="title"><Link href="/blog-single" >Web Hosting</Link ></h2>
                                                <div className="service-list mb-4">
                                                <ul style={{listStyleType: "none"}}>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Cloud Hosting</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Dedicated Server Hosting</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Shared Hosting</strong>
                                                    </li>
                                                    <li style={{display: "flex", gap: "5px", alignItems: "center"}}>
                                                        <CheckCircle/>
                                                        <strong>Micro Services</strong>
                                                    </li>
                                                    <div className="pd_bottom_05" />                                           
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

        </>
    )
}
