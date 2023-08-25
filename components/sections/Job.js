import Link from "next/link"
export default function Job() {
    return (
        <>
            <section className="job-section position-relative">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="large-container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">For Your Business</div>
                                    <div className="title">Work with us! We have openings for the following positions.</div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-8 col-md-12">
                            <div className="position-relative z_99">
                                <img src="/assets/images/cal-img.png" className="img-fluid" alt="image" />
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12">
                            <div className="job_grid_box">
                                <Link href="#">
                                    <div className="inner_bx has_images">
                                        <div className="logo_bx">
                                            <img className="company_logo" src="/assets/images/job/logo-one.png" alt="Weimann Ltd" />
                                        </div>
                                        <div className="content_bx">
                                            <div className="position">
                                                <h3>Junior Graphic Designer (Web)</h3>
                                                <div className="company">
                                                    <strong>Weimann Ltd</strong><span className="tagline">It is a long established
                                                        fact that a reader will be distracted by the readable content of a page
                                                        when looking at its layout.</span>
                                                </div>
                                            </div>
                                            <ul className="meta">
                                                <li>New York</li>
                                                <li className="job-type full-time">Full Time</li>
                                                <li className="date"><time dateTime="{new Date().getFullYear()}-04-18">Posted 6 months ago</time></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link >
                            </div>
                            <div className="job_grid_box">
                                <Link href="#">
                                    <div className="inner_bx has_images">
                                        <div className="logo_bx">
                                            <img className="company_logo" src="/assets/images/job/logo-two.png" alt="Weimann Ltd" />
                                        </div>
                                        <div className="content_bx">
                                            <div className="position">
                                                <h3>Finance Manager &amp; Health</h3>
                                                <div className="company">
                                                    <strong>Weimann Ltd</strong>
                                                    <span className="tagline">It is a long established fact that a reader will be
                                                        distracted by the readable content of a page when looking at its
                                                        layout.</span>
                                                </div>
                                            </div>
                                            <ul className="meta">
                                                <li>New York</li>
                                                <li className="job-type full-time">Full Time</li>
                                                <li className="date"><time dateTime="{new Date().getFullYear()}-04-18">Posted 6 months ago</time></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link >
                            </div>
                            <div className="job_grid_box">
                                <Link href="#">
                                    <div className="inner_bx has_images">
                                        <div className="logo_bx">
                                            <img className="company_logo" src="/assets/images/job/logo-three.png" alt="Weimann Ltd" />
                                        </div>
                                        <div className="content_bx">
                                            <div className="position">
                                                <h3>Assistant / Store Keeper</h3>
                                                <div className="company">
                                                    <strong>Weimann Ltd</strong><span className="tagline">It is a long established
                                                        fact that a reader will be distracted by the readable content of a page
                                                        when looking at its layout.</span>
                                                </div>
                                            </div>
                                            <ul className="meta">
                                                <li>New York</li>
                                                <li className="job-type full-time">Full Time</li>
                                                <li className="date"><time dateTime="{new Date().getFullYear()}-04-18">Posted 6 months ago</time></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link >
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_80" />
                    {/*===============spacing==============*/}
                </div>
                <div className="shape_bg_area position_absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="shape_bg_light" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" />
                    </svg>
                </div>
            </section>

        </>
    )
}
