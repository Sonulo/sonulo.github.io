import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function About7() {
    return (
        <>
            <section className="about-section">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="image_boxes style_seven">
                                <div className="image_box">
                                    <img src="/assets/images/about/about-3.jpg" className="img-fluid object-fit-cover height_560" alt="about" />
                                    <div className="video_inner type_seven">
                                        <VideoBox />
                                    </div>
                                    <div className="experience">
                                        <div className="experience_inner">
                                            <h2> 25+ Years Of Experience </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="pattern_imag">
                                    <img src="/assets/images/pattern-n1.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections left">
                                    <div className="before_title">Transform Workplace</div>
                                    <h2 className="title">Experts analysed, cost effective software</h2>
                                    <p>Equip your business with the right tool to achieve peaking levels of people
                                        performance. Adrenalin HRMS Software is designed to align human capital with company
                                        goals</p>
                                </div>
                            </div>
                            <div className="list_item_box style_two style_list">
                                <ul className="list-inline">
                                    <li className="list_items pd_bottom_10">
                                        <small className="d-flex align-items-center">
                                            <span className="icon_bx">
                                                <i className=" icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                End to end visibility of time metrics for the hybrid workforce </Link>
                                        </small></li>
                                    <li className="list_items pd_bottom_10">
                                        <small className="d-flex align-items-center">
                                            <span className="icon_bx">
                                                <i className=" icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                Workload Balancing between individuals and teams </Link>
                                        </small></li>
                                    <li className="list_items pd_bottom_10">
                                        <small className="d-flex align-items-center">
                                            <span className="icon_bx">
                                                <i className=" icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                Create Automated timesheets concentrated facilities </Link>
                                        </small></li>
                                    <li className="list_items pd_bottom_10">
                                        <small className="d-flex align-items-center">
                                            <span className="icon_bx">
                                                <i className=" icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                Integrate ProHance data within payroll systems </Link>
                                        </small></li>
                                    <li className="list_items pd_bottom_10">
                                        <small className="d-flex align-items-center">
                                            <span className="icon_bx">
                                                <i className=" icon-checked" />
                                            </span>
                                            <Link className="nav_link" href="#">
                                                Transform processes based on work patterns </Link>
                                        </small></li>
                                </ul>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="theme_btn_all color_one">
                                <Link href="#" className="theme-btn one">Start 14 Day Trial Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_100" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
