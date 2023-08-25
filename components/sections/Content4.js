import Link from "next/link"
export default function Content4() {
    return (
        <>
            <section className="content-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row gutter_15px">
                        <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                            <div className="creote-image-box image-box-overlap">
                                <div className="image_boxes style_eight">
                                    <img src="/assets/images/banner-four-bg.jpg" className="img-fluid image_fit height_500px pd_right_30" alt="img" />
                                    <div className="row no-space">
                                        <div className="col-lg-5" />
                                        <div className="col-lg-7 bg_dark_2 mr_top_minus_150 pd_top_50  pd_left_70 pd_right_50 pd_bottom_20 bg_op_1" style={{ backgroundImage: 'url(/assets/images/pannern-n3.png)!important' }}>
                                            <div className="title_all_box style_one light_color">
                                                <div className="title_sections left">
                                                    <div className="before_title color_white">831,435+</div>
                                                    <p className="color_white">Trusted, Happy &amp; Satisfied Businesses</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 pd_left_35">
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Leading</div>
                                    <h2 className="title"> Effective Solutions</h2>
                                    <p>We work with your company to identify position requirements, implement recruitment
                                        programs, and initiate employee
                                        assessments that maximize recruitment efforts</p>
                                </div>
                            </div>
                            <div className="list_item_box style_two">
                                <ul className="list-inline">
                                    <li className="list_items mr_bottom_15">
                                        <small className="d-flex align-items-start">
                                            <span className="icon_bx mr_top_5">
                                                <i className="icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">We’re here to help you
                                                step up your HR management, not to step on your
                                                HR department’s toes.</Link >
                                        </small>
                                    </li>
                                    <li className="list_items mr_bottom_15">
                                        <small className="d-flex align-items-start">
                                            <span className="icon_bx mr_top_5">
                                                <i className="icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">Access to quality
                                                healthcare and employee benefits are significant
                                                attractor to quality employees.</Link >
                                        </small>
                                    </li>
                                    <li className="list_items mr_bottom_15">
                                        <small className="d-flex align-items-start">
                                            <span className="icon_bx mr_top_5">
                                                <i className="icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">The only payroll
                                                question you’ll find yourself asking is “Is it payday
                                                already?”</Link >
                                        </small>
                                    </li>
                                    <li className="list_items mr_bottom_15">
                                        <small className="d-flex align-items-start">
                                            <span className="icon_bx mr_top_5">
                                                <i className="icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">From designing a custom
                                                plan to implementing it at your business</Link >
                                        </small>
                                    </li>
                                </ul>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="theme_btn_all color_one">
                                <Link href="#" className="theme-btn one">Contact us</Link >
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
