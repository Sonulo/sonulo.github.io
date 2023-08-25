import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ProjectDetails() {
    return (
        <>
            <Layout breadcrumbTitle="Project Details">
                <div>
                    <section className="project-detail-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                                    <div className="title_all_box style_one dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">Leadership / Values</div>
                                            <h2>Company Values &amp; The Relationship</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue equal blame belongs.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Denounce with righteous indignation and dislike men who are so beguiled and demoralized.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_25" />
                                    {/*===============spacing==============*/}
                                    <div className="row gutter_30px">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0 mb-xl-0">
                                            <div className="simple_image_boxes">
                                                <img src="/assets/images/projects/project-detail-img-1.jpg" className="simp_img cover-parallax" alt="image" />
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_25" />
                                            {/*===============spacing==============*/}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="simple_image_boxes">
                                                <img src="/assets/images/projects/project-detail-img-2.jpg" className="simp_img cover-parallax" alt="image" />
                                            </div>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_25" />
                                            {/*===============spacing==============*/}
                                        </div>
                                    </div>
                                    <h3>Challenge &amp; Solution</h3>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Indignation dislike men who are so beguiled demoralized by the charms of pleasure of the moment blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from these cases are perfectly simple and easy to distinguish.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-3 col-lg-12">
                                    <div className="project_information">
                                        <h2>Project Information</h2>
                                        <div className="project_information_bo">
                                            <div className="repeat_informtion">
                                                <h6>Client: </h6>
                                                <p>The Sixmothers Group</p>
                                            </div>
                                            <div className="repeat_informtion">
                                                <h6>Location: </h6>
                                                <p>Philadelphia, United States</p>
                                            </div>
                                            <div className="repeat_informtion">
                                                <h6>Date: </h6>
                                                <p> February 14, {new Date().getFullYear()}</p>
                                            </div>
                                            <div className="repeat_informtion">
                                                <h6>Website: </h6>
                                                <p>www.clientwebsite.com</p>
                                            </div>
                                            <div className="social_medias">
                                                <Link href="#">
                                                    <span className="fa fa-facebook" />
                                                </Link>
                                                <Link href="#">
                                                    <span className="fa fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <span className="fa fa-skype" />
                                                </Link>
                                                <Link href="#">
                                                    <span className="fa fa-instagram" />
                                                </Link>
                                            </div>
                                            <Link href="#" className="theme-btn two">Interested</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </section>
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