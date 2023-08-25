import Link from "next/link"
export default function Contact5() {
    return (
        <>
            <section className="contact-section bg_op_1" style={{ background: 'url(/assets/images/bg-grading-getus.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_100" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="title_all_box style_one text-center light_color">
                            <div className="title_sections">
                                <div className="before_title">Start Here</div>
                                <h2>Career Opportunities <br /> in Creote</h2>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="theme_btn_all color_one">
                                <Link href="#" className="theme-btn one">Contact</Link >
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_110" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
