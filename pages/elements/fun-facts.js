// import CounterUp from '@/components/elements/CounterUp';
import Layout from '@/components/layout/Layout';
import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function ElementFunfact() {
    return (
        <>
            <Layout breadcrumbTitle="Fun Fact">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <section className="section__counter four_column">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="counter-block style_two count-box">
                                            <div className="coun_ter">
                                                <span className="count-text" />
                                                <CounterUp count={85.45} time={1} />
                                                <small>%</small>
                                            </div>
                                            <div className="content_box">
                                                <h6>Accuracy rate</h6>
                                            </div>
                                            <div className="icon_box   icon_yes ">
                                                <div className="icon">
                                                    <span className="fa fa-file-powerpoint-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="counter-block style_two count-box">
                                            <div className="coun_ter">
                                                <span className="count-text" />
                                                <CounterUp count={12.5} time={1} />
                                                <small>M</small>
                                            </div>
                                            <div className="content_box">
                                                <h6>On the Inc. 5000</h6>
                                            </div>
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className=" icon-truck1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="counter-block style_two count-box">
                                            <div className="coun_ter">
                                                <span className="count-text" />
                                                <CounterUp count={3200} time={1} />
                                                <small>+</small>
                                            </div>
                                            <div className="content_box">
                                                <h6>Ecommerce businesses</h6>
                                            </div>
                                            <div className="icon_box   icon_yes ">
                                                <div className="icon">
                                                    <span className="fa fa-500px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="counter-block style_two count-box">
                                            <div className="coun_ter">
                                                <span className="count-text" />
                                                <CounterUp count={3200} time={1} />
                                                <small>R</small>
                                            </div>
                                            <div className="content_box">
                                                <h6>World class</h6>
                                            </div>
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className=" icon-world" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <section className="section__counter three_column">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="grid_box _card">
                                        <div className="counter-block style_one count-box">
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className=" icon-calendar1" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text" />
                                                    <CounterUp count={85.4} time={1} />
                                                    <small>%</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>Accuracy rate</h6>
                                                <p>in fulfilling orders</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="counter-block style_one count-box">
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className=" icon-trash1" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text" />
                                                    <CounterUp count={12.5} time={1} />
                                                    <small>M</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>On the Inc. 5000</h6>
                                                <p>Business Deals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card">
                                        <div className="counter-block style_one count-box">
                                            <div className="icon_box   icon_yes ">
                                                <div className="icon">
                                                    <span className=" icon-wallet" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text" />
                                                    <CounterUp count={3200} time={1} />
                                                    <small>R</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>World class</h6>
                                                <p>Service provider</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <section className="creote-icon-box">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-4 mb-xl-0">
                                        <div className="counter-block style_one count-box">
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="fa fa-empire" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text" />
                                                    <CounterUp count={4536} time={1} />
                                                    <small>+</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>Ecommerce businesses</h6>
                                                <p>Ecommerce businesses</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-4 mb-xl-0">
                                        <div className="counter-block style_one count-box">
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="icon-trash1" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text" />
                                                    <CounterUp count={4536} time={1} />
                                                    <small>+</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>Ecommerce businesses</h6>
                                                <p>Ecommerce businesses</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                        <div className="counter-block style_one count-box">
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="icon-vynil" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text" />
                                                    <CounterUp count={4536} time={1} />
                                                    <small>+</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>Ecommerce businesses</h6>
                                                <p>Ecommerce businesses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <section className="creote-icon-box">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                        <div className="counter-block style_two count-box">
                                            <div className="coun_ter">
                                                <span className="count-text" />
                                                <CounterUp count={4536} time={1} />
                                                <small>+</small>
                                            </div>
                                            <div className="content_box">
                                                <h6>Ecommerce businesses</h6>
                                            </div>
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="fa fa-envelope-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                        <div className="counter-block style_two count-box">
                                            <div className="coun_ter">
                                                <span className="count-text" />
                                                <CounterUp count={4536} time={1} />
                                                <small>+</small>
                                            </div>
                                            <div className="content_box">
                                                <h6>Ecommerce businesses</h6>
                                            </div>
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="fa fa-eye-slash" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                        <div className="counter-block style_two count-box">
                                            <div className="coun_ter">
                                                <span className="count-text" />
                                                <CounterUp count={4536} time={1} />
                                                <small>+</small>
                                            </div>
                                            <div className="content_box">
                                                <h6>Ecommerce businesses</h6>
                                            </div>
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="fa fa-file-archive-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <section className="creote-icon-box">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0">
                                        <div className="counter-block style_three count-box">
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="fa fa-film" />
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <p>Ecommerce businesses</p>
                                                <h6>
                                                    <div className="coun_ter">
                                                        <span className="count-text" />
                                                        <CounterUp count={4536} time={1} />
                                                        <small>+</small>
                                                    </div>
                                                    Ecommerce businesses
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0">
                                        <div className="counter-block style_three count-box">
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="fa fa-firefox" />
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <p>Ecommerce businesses</p>
                                                <h6>
                                                    <div className="coun_ter">
                                                        <span className="count-text" />
                                                        <CounterUp count={4536} time={1} />
                                                        <small>+</small>
                                                    </div>
                                                    Ecommerce businesses
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                        <div className="counter-block style_three count-box">
                                            <div className="icon_box icon_yes">
                                                <div className="icon">
                                                    <span className="fa fa-git" />
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <p>Ecommerce businesses</p>
                                                <h6>
                                                    <div className="coun_ter">
                                                        <span className="count-text" />
                                                        <CounterUp count={4536} time={1} />
                                                        <small>+</small>
                                                    </div>
                                                    Ecommerce businesses
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
