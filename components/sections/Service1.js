import Link from "next/link"
export default function Service1() {
    return (
        <>
            <section className="service_section bg_light_1" id="service">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="title_all_box style_one text-center dark_color">
                            <div className="title_sections">
                                <div className="before_title">Leading</div>
                                <h2>Effective Solutions</h2>
                                <p>We work with your company to identify position requirements, implement
                                    recruitment
                                    programs, and <br /> initiate employee assessments that maximize recruitment
                                    efforts </p>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_20" />
                        {/*===============spacing==============*/}
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_two dark_color">
                                <div className="service_content_two ">
                                    <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-1.png)' }}>
                                        <div className="content_inner_in">
                                            <div className="icon_image">
                                                <img src="/assets/images/010-job-search.png" className="img-fluid" alt="Service Image" />
                                            </div>
                                            <h2>
                                                <Link href="#">Recruitment Process</Link >
                                            </h2>
                                            <p>These cases are perfectly simple and easy to distinguish.</p>
                                            <ul>
                                                <li>Reducing Redundancy</li>
                                                <li>Uncovering Hidden Resources</li>
                                                <li>Increasing Company’s Agility</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ovarlay_link">
                                        <Link href="#">
                                            <i className="icon-right-arrow" />
                                        </Link >
                                    </div>
                                    <div className="overlay_content">
                                        <h2>
                                            <Link href="#">Recruitment Process</Link >
                                        </h2>
                                        <p>These cases are perfectly simple and easy to distinguish.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_two dark_color">
                                <div className="service_content_two  active_ser">
                                    <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-2.png)' }}>
                                        <div className="content_inner_in">
                                            <div className="icon_image">
                                                <img src="/assets/images/service-ico-1.png" className="img-fluid" alt="Service Image" />
                                            </div>
                                            <h2>
                                                <Link href="#">Employee Relations</Link >
                                            </h2>
                                            <p>Indignation sed dislike men who are beguiled and demoralized.</p>
                                            <ul>
                                                <li>
                                                    Improving Communication
                                                </li>
                                                <li>
                                                    Employee issue resolution
                                                </li>
                                                <li>
                                                    Proper Documentation Process
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ovarlay_link">
                                        <Link href="#">
                                            <i className="icon-right-arrow" />
                                        </Link >
                                    </div>
                                    <div className="overlay_content">
                                        <h2>
                                            <Link href="#">Employee Relations</Link >
                                        </h2>
                                        <p>Indignation sed dislike men who are beguiled and demoralized.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_two dark_color">
                                <div className="service_content_two ">
                                    <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                        <div className="content_inner_in">
                                            <div className="icon_image">
                                                <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                            </div>
                                            <h2>
                                                <Link href="#">Compliance Audits</Link >
                                            </h2>
                                            <p>Prevents our being able too what get like best every pleasure.</p>
                                            <ul>
                                                <li>
                                                    Handling of employment
                                                </li>
                                                <li>
                                                    Greater retention rates
                                                </li>
                                                <li>
                                                    A fully engaged workforce
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ovarlay_link">
                                        <Link href="#">
                                            <i className="icon-right-arrow" />
                                        </Link >
                                    </div>
                                    <div className="overlay_content">
                                        <h2>
                                            <Link href="#">Compliance Audits</Link >
                                        </h2>
                                        <p>Prevents our being able too what get like best every pleasure.</p>
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
