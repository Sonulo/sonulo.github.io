import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"

export default function ServiceDetails() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <Layout breadcrumbTitle="Service Details">
                <div>
                    <div className="auto-container">
                        <div className="row default_row">
                            <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <main id="main" className="site-main" role="main">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_85" />
                                    {/*===============spacing==============*/}
                                    <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
                                        <div className="title_all_box style_one dark_color">
                                            <div className="title_sections left">
                                                <div className="before_title">HR Employee</div>
                                                <div className="title">Recruitment Process</div>
                                                <p>Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row no-space">
                                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
                                                <div className="description_box">
                                                    <p>Our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty.</p>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content ">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon png" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#" >Background Checks</Link>
                                                            </h3>
                                                            <p>These cases are perfectly simple and easy to distinguish. In a free hour when our power.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="simple_image_boxes">
                                                    <img src="/assets/images/blog/single-post-gal-1.jpg" className="object-fit-cover-center height_570px" alt="image" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-0 ps-lg-0 pe-0 pe-lg-0 ps-xl-3">
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content ">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon png" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#" >Profile Assessments</Link>
                                                            </h3>
                                                            <p>Indignation and men who are so beguiled and demoralized by the charms blinded.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content ">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon png" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#" >Position Description</Link>
                                                            </h3>
                                                            <p>Trouble that are bound to ensue and equal blame belongs those who fail in their duty.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <h3>HR Functions</h3>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_15" />
                                                {/*===============spacing==============*/}
                                                <div className="description_box">
                                                    <p>Nothing prevents our being able to do what we like best every pleasure is to be welcomed &amp; every pain avoided certain circumstances.</p>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="content_box_cn style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Open Communication</Link>
                                                        </h3>
                                                        <p>Equal blame belongs to those who fail in their duty through weakness same duty.</p>
                                                    </div>
                                                </div>
                                                <div className="content_box_cn  style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Sharing a Vision</Link>
                                                        </h3>
                                                        <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                                    </div>
                                                </div>
                                                <div className="content_box_cn  style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Recognizing Employee</Link>
                                                        </h3>
                                                        <p>Holds in these matter to this principle selection he rejects pleasures to secure.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_25" />
                                        {/*===============spacing==============*/}
                                        <h3>Service Benefits</h3>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_25" />
                                        {/*===============spacing==============*/}
                                        <div className="faq_section type_two">
                                            <div className="block_faq">
                                                <div className="accordion">
                                                    <dl>
                                                        <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                                            Who is Qetus?<span className="icon-play" />
                                                        </dt>
                                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                            <p>
                                                                Nor again is there anyone who loves or pursues or desires to obtain
                                                                pain itself because it is pains but because occasionally circumstances
                                                                occurs great pleasure take a trivial of us.
                                                            </p>
                                                        </dd>
                                                        <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>
                                                            What recruitment services do you offer?<span className="icon-play" />
                                                        </dt>
                                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                            <p>
                                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                            </p>
                                                        </dd>
                                                        <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                                            How can I register a job?<span className="icon-play" />
                                                        </dt>
                                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                            <p>
                                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_65" />
                                    {/*===============spacing==============*/}
                                </main>
                            </div>
                            <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                                <div className="service_siderbar side_bar">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_85" />
                                    {/*===============spacing==============*/}
                                    <div className="widgets_grid_box">
                                        <div className="widget creote_widget_service_list">
                                            <h4 className="widget-title">Our Services</h4>
                                            <ul className="service_list_box">
                                                <li><Link href="#">Talent Management</Link> </li>
                                                <li><Link href="#">Health Care Benefits</Link> </li>
                                                <li><Link href="#">Risk Management</Link> </li>
                                                <li><Link href="#">Compliance Audits</Link> </li>
                                                <li><Link href="#">Employee Relations</Link> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widgets_grid_box">
                                        <div className="brouchure_box_widget">
                                            <div className="widget_content">
                                                <h3>A Complete Guide to Employee Engagement</h3>
                                                <div className="color_white_1 clearfix">
                                                    <Link href="#" className="theme-btn color_white_1 one">Download</Link>
                                                </div>
                                                <img src="/assets/images/broucher-img.jpg" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widgets_grid_box">
                                        <div id="creote-contactus-3" className="widget widget_contactus">
                                            <div className="contact_box_widget widget_box">
                                                <div className="widget_content">
                                                    <img src="/assets/images/service-sidebar-contact-bg.jpg" alt="backgroundimage" />
                                                    <div className="top_section">
                                                        <h3>Have Questions?</h3>
                                                        <p>Nothing prevents our being to what we like. </p>
                                                    </div>
                                                    <div className="bottom_section">
                                                        <Link href="#" className="phone_number">+98 060 712 34</Link>
                                                        <Link href="#" className="mailid">sendmail@qetus.com</Link>
                                                    </div>
                                                </div>
                                                <Link href="#" className="theme-btn one">Appointment</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_65" />
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
                </div>

            </Layout>
        </>
    )
}