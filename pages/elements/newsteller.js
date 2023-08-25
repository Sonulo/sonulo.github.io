import Layout from '@/components/layout/Layout';

export default function ElementNewsletter() {
    return (
        <>
            <Layout breadcrumbTitle="Newsteller">
                <div className="no-container">
                    <div className="no-row">
                        {/*===============spacing==============*/}
                        <div className="pd_top_80" />
                        {/*===============spacing==============*/}
                        <div className="full_width_box">
                            <div className="creote-subscribe">
                                <section className="newsteller style_one bg_dark_1">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_40" />
                                    {/*===============spacing==============*/}
                                    <div className="auto-container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="content">
                                                    <h2>Join Our Mailing List</h2>
                                                    <p>For receiving our news and updates in your inbox directly. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="item_scubscribe">
                                                    <div className="input_group">
                                                        <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                            <div className="mc4wp-form-fields">
                                                                <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                                <input type="submit" defaultValue="Sign up" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_40" />
                                    {/*===============spacing==============*/}
                                </section>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <div className="creote-subscribe">
                                <div className="container">
                                    <section className="newsteller  style_two" style={{ backgroundImage: 'url(../assets/images/testi-image.jpg)' }}>
                                        <div className="auto-container">
                                            <div className="inner_stell">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="content">
                                                            <h2>Join Our Mailing List</h2>
                                                            <p>For receiving our news and updates in your inbox directly. </p>
                                                        </div>
                                                        <div className="item_scubscribe">
                                                            <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                                <div className="mc4wp-form-fields">
                                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                                    <input type="submit" defaultValue="Sign up" />
                                                                </div>
                                                            </form>
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
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </div>
                </div>
            </Layout>
        </>
    )
}
