import { useState } from "react"
import VideoBox from "../elements/VideoBox"
export default function About14() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="about-section  position-relative">
                <div className="default-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="image_boxes style_one">
                                <div className="image one">
                                    <img src="/assets/images/about/about-12.jpg" className="img-fluid" alt="image" />
                                </div>
                                <div className="image two">
                                    <img src="/assets/images/about/about-2.jpg" className="img-fluid" alt="image" />
                                    <div className="video_box">
                                        <VideoBox />
                                    </div>
                                </div>
                                <div className="year_of_experience">
                                    <div className="year">
                                        25 </div>
                                    <div className="content">
                                        <h2> Year Of Experience We Just Achived</h2>
                                        <span className="icon-thumbs-up" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections left">
                                    <div className="before_title">
                                        For Your Business </div>
                                    <div className="title"> The Growing Trend of Outsourcing HR Services</div>
                                    <p>Our power of choice is untrammelled and when nothing prevents being able to
                                        do what we like best every pleasure.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="progress_bar style_two">
                                <div className="progress_new">
                                    <div className="ProgressBar ProgressBar--animateText" data-progress={70}>
                                        <svg className="ProgressBar-contentCircle" height={170} width={170}>
                                            <circle className="ProgressBar-background" cx={85} cy={85} r={75} />
                                            <circle transform="rotate(-90, 85, 85)" className="ProgressBar-circle" cx={85} cy={85} r={75} style={{ strokeDasharray: 471, strokeDashoffset: '141.3px' }}>
                                            </circle>
                                        </svg>
                                    </div>
                                    <div className="progress-value">
                                        <div>
                                            <h6>Year of 2020 </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="content_box">
                                    <h2>70%</h2>
                                    <h3>Consultion </h3>
                                    <p>Certain circumstances seds owing to the claims duty
                                        righteous indignation and so beguiled. </p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <section className="tabs_all_box  tabs_all_box_start type_three">
                                <div className="tab_over_all_box">
                                    <div className="tabs_header clearfix">
                                        <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                                            <li className="nav-item">
                                                <a className={activeIndex === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(1)}>
                                                    Mission </a >
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(2)}>
                                                    Vision </a >
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(3)}>
                                                    Values </a >
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="s_tab_wrapper">
                                        <div className="s_tabs_content">
                                            <div className={activeIndex === 1 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one">
                                                    <div className="content_bx">
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one">
                                                    <div className="content_bx">
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 3 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one">
                                                    <div className="content_bx">
                                                        <p>Must explain too you how all this mistaken idea of
                                                            denouncing pleasures
                                                            praising pain was born and we will give you complete
                                                            account of the system
                                                            the actual teachings of the great explorer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_50" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
