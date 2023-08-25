import { useState } from 'react'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="faq-section bg_op_1 position-relative" style={{ background: 'url(/assets/images/footer-bg-two.jpg)' }}>
                <div className="position_absolute top curve_shape_top_2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z">
                        </path>
                        <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z">
                        </path>
                        <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z">
                        </path>
                    </svg>
                </div>
                <div className="container-fluid pd_zero">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-xs-12  pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                            {/*===============spacing==============*/}
                            <div className="pd_top_110" />
                            {/*===============spacing==============*/}
                            <div className="title_all_box style_six light_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        <span className="icon-briefcase icon" />
                                        CHOOSE YOUR PLAN
                                    </div>
                                    <div className="title">Adaptable Pricing</div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="faq_box_all  border_enable">
                                <dl className="accordion faqs_accordion type_one light_color">
                                    <dt className={isActive.key == 1 ? "article-title active" : "article-title"} onClick={() => handleToggle(1)}>
                                        <div className="title_box">
                                            <span className="faq_no">1 </span> How can use content marketing to increase efficient
                                            way?
                                        </div>
                                    </dt>
                                    <dd className="accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        Same as saying through shrinking from toil and pain these cases are perfectly simple
                                        and easy to distinguish.
                                    </dd>
                                    <dt className={isActive.key == 2 ? "article-title active" : "article-title"} onClick={() => handleToggle(2)}>
                                        <div className="title_box">
                                            <span className="faq_no">2 </span> How can content marketing help purchase journey?
                                        </div>
                                    </dt>
                                    <dd className="accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </dd>
                                    <dt className={isActive.key == 3 ? "article-title active" : "article-title"} onClick={() => handleToggle(3)}>
                                        <div className="title_box">
                                            <span className="faq_no">3 </span> How do we measure content’s on sales and revenue?
                                        </div>
                                    </dt>
                                    <dd className="accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </dd>
                                    <dt className={isActive.key == 4 ? "article-title active" : "article-title"} onClick={() => handleToggle(4)}>
                                        <div className="title_box">
                                            <span className="faq_no">4 </span> Pain these cases are perfectly simple and easy to
                                            distinguish. </div>
                                    </dt>
                                    <dd className="accordion-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </dd>
                                </dl>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_110" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-lg-6 col-sm-12 col-xs-12 position-relative z_99" style={{ backgroundImage: 'url(/assets/images/faq-section-min.jpg)' }}>
                        </div>
                    </div>
                </div>
                <div className="position_absolute curve_shape_bottom_2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z">
                        </path>
                        <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z">
                        </path>
                        <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z">
                        </path>
                    </svg> </div>
            </section>

        </>
    )
}
