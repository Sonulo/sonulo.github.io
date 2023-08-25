import Link from "next/link"
export default function Contact11() {
    return (
        <>
            <section className="blog-section pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                <div className="inner_section  bg_op_1 rounded_radius" style={{ background: 'url(/assets/images/contact-hm-15.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_120" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-sm-12 m-auto">
                                <div className="title_all_box style_one text-center light_color">
                                    <div className="title_sections">
                                        <div className="before_title">
                                            Start Here </div>
                                        <div className="title"> Career Opportunities <br /> in Creote</div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="theme_btn_all text-center color_one">
                                    <Link href="#" className="theme-btn one">
                                        Contact
                                    </Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_120" />
                    {/*===============spacing==============*/}
                </div>
            </section>

        </>
    )
}
