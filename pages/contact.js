import Layout from "@/components/layout/Layout"
import { useState } from "react"
import emailjs from 'emailjs-com';
import Link from "next/link"
import Head from 'next/head'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = async (e) => {
        try {
            e.preventDefault();

            const templateParams = {
                to_email: "me@pethumjeewantha.com", // Replace with the recipient's email address
                from_name: name,
                email,
                subject,
                message,
              };
      
            await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
            alert("Mail Sent Successfully")
            
        } catch (error) {
            console.error(error);
            alert("Something went wrong")
        }
      };

    return (
        <>
            <Head>
                <title>Sonulo - Contact</title>
            </Head>
            <Layout breadcrumbTitle="Contact" headerStyle={3} footerStyle={3}>
                <div>
                    <section className="contact-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                                    <div className="contact_form_box_all type_one">
                                        <div className="contact_form_box_inner">
                                            <div className="contact_form_shortcode">
                                                <form id="contact-form" onSubmit={sendEmail}>
                                                    <div className="messages" />
                                                    <div className="controls">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Name<br /></label>
                                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Your Name *" required="required" data-error="Enter Your Name" />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Email<br /></label>
                                                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required="required" placeholder="Email *" data-error="Enter Your Email Id" />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Subject<br /></label>
                                                                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} name="subject" required="required" placeholder=" Subject  (Optional)" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Message<br /></label>
                                                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Additional Information... (Optional) " rows={3} required="required" data-error="Please, leave us a message." defaultValue={""} />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group mg_top apbtn">
                                                                    <button className="theme_btn" type="submit">Appointment</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pd_left_30">
                                    <div className="title_all_box style_one dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">Contact Info to</div>
                                            <h2>Reach Our Expert Team</h2>
                                            <p>Send a message through given form, If your enquiry is time sensitive please use below
                                                contact details.</p>
                                        </div>
                                    </div>
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className=" icon-placeholder" />
                                            </div>
                                            <div className="contnet">
                                                <h3> Post Address </h3>
                                                <p>
                                                    280 Granite Run Drive Suite #200 Lancaster, PA 1760
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className="icon-phone-call" />
                                            </div>
                                            <div className="contnet">
                                                <h3> General Enquires </h3>
                                                <p>
                                                    Phone: +98 060 712 34 &amp; Email: sendmail@qetus.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className="fa fa-clock-o" />
                                            </div>
                                            <div className="contnet">
                                                <h3> Operation Hours </h3>
                                                <p>
                                                    Mon-Satday: 09.00 to 07.00 (Sunday: Closed)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="contact-map-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <section className="map-section">
                                        {/*Map Outer*/}
                                        <div className="map-outer">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                    </section>
                </div>

            </Layout>
        </>
    )
}