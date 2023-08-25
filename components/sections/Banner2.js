import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function Banner2() {
    return (
        <>
            <section className="single_banner style_one bg_op_1" style={{ backgroundImage: 'url(/assets/images/sliders/banner-10.jpg)' }}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <div className="slider_content light_color">
                                <h6>Our Vision to Grow Better</h6>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_10" />
                                {/*===============spacing==============*/}
                                <h1 className="color_white">Performance and Productivity to The Next Frontier</h1>
                                <p className="description color_white">Duty obligations of business it will frequently occur that
                                    pleasures have to be repudiated and annoyances accepted.</p>
                                <ul className="d_inline_block">
                                    <li>
                                        <div className="theme_btn_all color_two">
                                            <Link href="#" className="theme-btn one primary-color-two">Contact Us</Link>
                                        </div>
                                    </li>
                                    <li className="vd_bx">
                                        <div className="video_box">
                                            <VideoBox />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_80" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-lg-4 hidden-md image_column">
                            <div className="slider_image margin_extra">
                                <img src="/assets/images/cal-img.png" className="img-fluid" alt="slider image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
