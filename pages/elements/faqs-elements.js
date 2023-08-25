import Layout from '@/components/layout/Layout';
import { useState } from 'react';

export default function ElementFaq() {
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
            <Layout breadcrumbTitle="Faq">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_70" />
                            {/*===============spacing==============*/}
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                    <section className="faq_section type_one">
                                        <div className="block_faq">
                                            <div className="accordion">
                                                <dl>
                                                    <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                                        <span className="icon-play" /> What is the comunity benefit?
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>
                                                        <span className="icon-play" /> How do I make a yearly payment?
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                                        <span className="icon-play" /> How this technology works?
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 4 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(4)}>
                                                        <span className="icon-play" /> How this technology works?
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 5 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(5)}>
                                                        <span className="icon-play" /> What is the comunity benefit?
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 6 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(6)}>
                                                        <span className="icon-play" /> What is the comunity benefit?
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <section className="faq_section type_two">
                                        <div className="block_faq">
                                            <div className="accordion">
                                                <dl>
                                                    <dt className={isActive.key == 7 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(7)}>
                                                        How do I make a yearly payment?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 8 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(8)}>
                                                        How this technology works?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 9 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(9)}>
                                                        What is the comunity benefit?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 10 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(10)}>
                                                        What is the comunity benefit?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                        <p>
                                                            Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
