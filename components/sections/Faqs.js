
import { useState } from 'react'
export default function Faqs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
            <section className="faqs-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_two text-center dark_color">
                                <div className="title_sections two">
                                    <div className="before_title">Find Useful</div>
                                    <h2>Question &amp; Answer</h2>
                                    <p>Check our FAQs for quick answers to frequently asked questions we receive.<br /> If you
                                        have
                                        other questions write. </p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                            <div className="simple_image_boxes height_360px parallax_cover">
                                <img src="/assets/images/blog/blog-image-11.jpg" className="simp_img cover-parallax" alt="image" />
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_25" />
                            {/*===============spacing==============*/}
                            <div className="progress_bar">
                                <h2>Our Growth <span>99%</span></h2>
                                <div className="bar">
                                    <div className="bar-inner count-bar counted" data-percent="99%" style={{ width: '99%' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                            <div className="simple_image_boxes height_360px parallax_cover">
                                <img src="/assets/images/blog/blog-image-10.jpg" className="simp_img cover-parallax" alt="image" />
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_25" />
                            {/*===============spacing==============*/}
                            <div className="progress_bar">
                                <h2>Income Statement <span>80%</span></h2>
                                <div className="bar">
                                    <div className="bar-inner count-bar counted" data-percent="80%" style={{ width: '80%' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="faq_section type_one">
                                <div className="block_faq">
                                    <div className="accordion">
                                        <dl>
                                            <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                                <span className="icon-play" /> What sectors or industries do you recruit for?
                                            </dt>
                                            <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <p>
                                                    Blinded by desire, that they cannot foresee the trouble that are bound to
                                                    ensue; and equal blame belongs to those who fail in their duty which is the
                                                    same as saying through shrinking. Nor again is there anyone who loves or
                                                    pursues or desires to obtain pain itself is pains but circumstances great
                                                </p>
                                            </dd>
                                            <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>
                                                <span className="icon-play" /> What recruitment services do you offer?
                                            </dt>
                                            <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <p>
                                                    Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The
                                                    People, Focusing On The Promotion Of Sustainable Living, Renewable Energy
                                                    Production And Smart Energy Grid Utility Services.
                                                </p>
                                            </dd>
                                            <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                                <span className="icon-play" /> Where will you advertise my job vacancy?
                                            </dt>
                                            <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>
                                                    Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The
                                                    People, Focusing On The Promotion Of Sustainable Living, Renewable Energy
                                                    Production And Smart Energy Grid Utility Services.
                                                </p>
                                            </dd>
                                            <dt className={isActive.key == 4 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(4)}>
                                                <span className="icon-play" /> What sectors or industries do you recruit for?
                                            </dt>
                                            <dd className="accordion-content hide" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>
                                                    Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The
                                                    People, Focusing On The Promotion Of Sustainable Living, Renewable Energy
                                                    Production And Smart Energy Grid Utility Services.
                                                </p>
                                            </dd>
                                            <dt className={isActive.key == 5 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(5)}>
                                                <span className="icon-play" /> How can I register a job?
                                            </dt>
                                            <dd className="accordion-content hide" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>
                                                    Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The
                                                    People, Focusing On The Promotion Of Sustainable Living, Renewable Energy
                                                    Production And Smart Energy Grid Utility Services.
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_60" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
