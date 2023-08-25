import Link from "next/link"
export default function Price3() {
    return (
        <>
            <section className="pricing-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-12">
                            <div className="title_all_box style_six dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        <span className="icon-briefcase icon" />
                                        CHOOSE YOUR PLAN
                                    </div>
                                    <div className="title">Adaptable Pricing</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <p>
                                Which is the same as saying through shrinking from toil and pain. These cases are perfectly
                                simple and easy to distinguish.
                            </p>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_20" />
                    {/*===============spacing==============*/}
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing_plan_box type_one">
                                <div className="tags">Recommended</div>
                                <div className="pricing_plan_box_inner">
                                    <div className="upper_content">
                                        <div className="title_s">
                                            <h2>Basic Pack</h2>
                                        </div>
                                        <div className="price_rs">
                                            <h6><small>22$</small> / <span>Year</span></h6>
                                        </div>
                                        <p>Power of choice is untrammelled and do what we like best.</p>
                                    </div>
                                    <div className="lower_content">
                                        <ul>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                4-5 Weeks from to finish </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Organisational Strategy
                                            </li>
                                            <li>
                                                <span className="no_ico fa fa-times-circle-o" />
                                                20 Days of support
                                            </li>
                                            <li>
                                                <span className="no_ico fa fa-times-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                            <li>
                                                <span className="no_ico fa fa-times-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                        </ul>
                                    </div>
                                    <div className="get_start_button theme_btn_all">
                                        <Link href="#" className="theme-btn one">Get
                                            Started<span className="icon-arrow-right" /></Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing_plan_box type_one">
                                <div className="tags">Most Recommended</div>
                                <div className="pricing_plan_box_inner">
                                    <div className="upper_content">
                                        <div className="title_s">
                                            <h2>Standard Pack</h2>
                                        </div>
                                        <div className="price_rs">
                                            <h6><small>59$</small> / <span>Year</span></h6>
                                        </div>
                                        <p>Matters to principle of selection our pleasures to secure.</p>
                                    </div>
                                    <div className="lower_content">
                                        <ul>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                4-5 Weeks from to finish </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Organisational Strategy
                                            </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                20 Days of support
                                            </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                            <li>
                                                <span className="no_ico fa fa-times-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                        </ul>
                                    </div>
                                    <div className="get_start_button theme_btn_all">
                                        <Link href="#" className="theme-btn one">Get
                                            Started<span className="icon-arrow-right" /></Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing_plan_box type_one">
                                <div className="tags">Popular Pack</div>
                                <div className="pricing_plan_box_inner">
                                    <div className="upper_content">
                                        <div className="title_s">
                                            <h2>Advanced Pack</h2>
                                        </div>
                                        <div className="price_rs">
                                            <h6><small>99$</small> / <span>Year</span></h6>
                                        </div>
                                        <p>These cases are perfectly simple &amp; easy to distinguish.</p>
                                    </div>
                                    <div className="lower_content">
                                        <ul>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                4-5 Weeks from to finish </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Organisational Strategy
                                            </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                20 Days of support
                                            </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                        </ul>
                                    </div>
                                    <div className="get_start_button theme_btn_all">
                                        <Link href="#" className="theme-btn one">Get
                                            Started<span className="icon-arrow-right" /></Link >
                                    </div>
                                </div>
                            </div>
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
