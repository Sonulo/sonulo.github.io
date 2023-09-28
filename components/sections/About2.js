
import Link from "next/link"

export default function About2() {
    return (
        <>
            <section className="about-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                            <div className="image_boxes style_one">
                                <div className="image one">
                                    <img src="/assets/images/about/about-16.jpg" className="img" alt="image" />
                                </div>
                                <div className="image two">
                                    <img src="/assets/images/about/about-17.jpg" className="img" alt="image" />
                                
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 pd_left_40">
                            <div className="pd_left_20">
                                <div className="title_all_box style_two  dark_color">
                                    <div className="title_sections two">
                                        <div className="before_title">Why should you choose Sonulo ?</div>
                                        <h2>Trailblazing the Future of Software Solutions</h2>
                                        <div className="description_box">
                                            <p>We excel in full-stack development, mobile apps, cloud services, and AI solutions</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="extra_content authour_box_two">
                                    <div className="authour_box_content two">
                                        <div className="image">
                                            <img src="/assets/images/about_badge_1.png" className="img-fluid authour_image" alt="authour Image" />
                                        </div>                                     
                                        <div className="text">
                                            <h4>Experts in IT Field, Ready for You.</h4>  
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                                <div className="description_box">
                                    <p>Our agile approach, creativity, and commitment to quality drive us. We're your partners in the digital age, delivering scalable, secure, and data-driven solutions. Join us on a journey of innovation and transformation. Discover limitless possibilities with Sonulo.</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                                <div className="theme_btn_all color_one">
                                    <Link href="/contact" className="theme-btn three">Contact us</Link>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-5 mb-lg-0 mb-xl-0">
                            <div className="icon_box_all style_one">
                                <div className="icon_content icon_centers">
                                    <div className="icon">
                                    <span className="icon-star" />
                                    </div>
                                    <div className="txt_content">
                                        <h5>
                                        Quality-First Approach
                                        </h5>
                                        <p>We prioritize quality above all else, ensuring excellence in every product and service we deliver to meet and exceed expectations</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="icon_box_all style_one">
                                <div className="icon_content icon_centers ">
                                    <div className="icon">
                                        <span className="icon-users" />
                                    </div>
                                    <div className="txt_content">
                                        <h5>Customer-Centric Philosophy</h5>
                                        <p>Customers are at the heart of everything we do, driving our decisions and actions to ensure their satisfaction and success.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
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
