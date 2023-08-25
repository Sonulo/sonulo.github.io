import Link from "next/link"
export default function About13() {
    return (
        <>
            <section className="content-section pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                <div className="inner_section bg_light_1 rounded_radius">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="row">
                        <div className="col-lg-6 col-md-12 pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                            {/*===============spacing==============*/}
                            <div className="pd_top_30 d_md_none" />
                            {/*===============spacing==============*/}
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections left">
                                    <div className="before_title">
                                        Leading </div>
                                    <div className="title"> Effective Solutions</div>
                                    <p> We work with your company to identify position requirements, implement
                                        recruitment programs, and initiate employee assessments that maximize
                                        recruitment efforts</p>
                                </div>
                            </div>
                            <div className="list_item_box style_two style_list">
                                <ul className="list-inline">
                                    <li className="list_items">
                                        <small className="d-flex align-items-start">
                                            <span className="icon_bx mr_top_5">
                                                <i className="fa fa-check-circle" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                We’re here to help you step up your HR management, not to step on
                                                your HR department’s toes.
                                            </Link>
                                        </small>
                                    </li>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                    <li className="list_items">
                                        <small className="d-flex align-items-start">
                                            <span className="icon_bx mr_top_5">
                                                <i className="fa fa-check-circle" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                Access to quality healthcare and employee benefits are significant
                                                attractor to quality employees.
                                            </Link>
                                        </small>
                                    </li>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                    <li className="list_items">
                                        <small className="d-flex align-items-center">
                                            <span className="icon_bx">
                                                <i className="fa fa-check-circle" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                The only payroll question you’ll find yourself asking is “Is it
                                                payday already?”
                                            </Link>
                                        </small>
                                    </li>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_10" />
                                    {/*===============spacing==============*/}
                                    <li className="list_items">
                                        <small className="d-flex align-items-center">
                                            <span className="icon_bx">
                                                <i className="fa fa-check-circle" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                From designing a custom plan to implementing it at your business
                                            </Link>
                                        </small>
                                    </li>
                                </ul>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="theme_btn_all color_one">
                                <Link href="#" className="theme-btn one">
                                    Contact us
                                </Link>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-lg-6 col-md-12 pd_zero bg_op_1 overflow-hidden rounded_bottom_left_30 rounded_bottom_left_30" style={{ background: 'url(/assets/images/about/about-11.jpg)' }}>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12" />
                        <div className="col-lg-6 col-md-12">
                            <div className="row no-space">
                                <div className="col-lg-2" />
                                <div className="col-lg-6 bg_dark_2 mr_top_minus_150 mr_md_top_zero pd_top_50  pd_left_70 pd_right_50 rounded_radius pd_bottom_20 bg_op_1" style={{ backgroundImage: 'url(/assets/images/pannern-n3.png)!important' }}>
                                    <div className="title_all_box style_one light_color">
                                        <div className="title_sections left">
                                            <div className="before_title color_white">831,435+</div>
                                            <p className="color_white">Trusted, Happy &amp; Satisfied Businesses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-24" />
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_60" />
                    {/*===============spacing==============*/}
                </div>
            </section>

        </>
    )
}
