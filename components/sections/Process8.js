import Link from "next/link"
export default function Process8() {
    return (
        <>
            <section className="process-section">
                {/*===============spacing==============*/}
                <div className="pd_top_60" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row gutter_30px">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pd_right_30">
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections ">
                                    <div className="title"> Create Meaningful Experiences for employees</div>
                                    <p> Focus people by understanding employees’ emotions and<br /> perspectives at
                                        all touch points, so you can take action and focus<br /> experiences on what
                                        matters to the people.</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="icon_box_all  style_five">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className=" icon-support" />
                                    </div>
                                    <small>01</small>
                                    <div className="text_box">
                                        <h2> 24/7 Customer support</h2>
                                        <p> The less water you use, the less runoff and wastewater that eventually
                                            end up in the ocean.</p>
                                    </div>
                                    <div className="hover_content">
                                        <div className="content">
                                            <div className="inner">
                                                <p> The less water you use, the less runoff and wastewater that
                                                    eventually end up in the ocean.</p>
                                                <Link href="#" className="read_more"> Read More <span className="icon-right-arrow-long" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pd_left_30">
                            <div className="icon_box_all  style_five">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className=" icon-united" />
                                    </div>
                                    <small>02</small>
                                    <div className="text_box">
                                        <h2> Experience Team</h2>
                                        <p> The less water you use, the less runoff and wastewater that eventually
                                            end up in the ocean.</p>
                                    </div>
                                    <div className="hover_content">
                                        <div className="content">
                                            <div className="inner">
                                                <p> The less water you use, the less runoff and wastewater that
                                                    eventually end up in the ocean.</p>
                                                <Link href="#" className="read_more"> Read More <span className="icon-right-arrow-long" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_50" />
                            {/*===============spacing==============*/}
                            <div className="icon_box_all  style_five">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className=" icon-solution" />
                                    </div>
                                    <small>03</small>
                                    <div className="text_box">
                                        <h2> Smart solutions</h2>
                                        <p> The less water you use, the less runoff and wastewater that eventually
                                            end up in the ocean.</p>
                                    </div>
                                    <div className="hover_content">
                                        <div className="content">
                                            <div className="inner">
                                                <p> The less water you use, the less runoff and wastewater that
                                                    eventually end up in the ocean.</p>
                                                <Link href="#" className="read_more"> Read More <span className="icon-right-arrow-long" /></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
