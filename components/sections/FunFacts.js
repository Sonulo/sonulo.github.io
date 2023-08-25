import dynamic from 'next/dynamic' 

const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function FunFacts() {
    return (
        <>
            <section className="funfact-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_two text-center dark_color">
                                <div className="title_sections two">
                                    <div className="before_title">Some Fun Facts</div>
                                    <h2> Structured Our Workflow</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section__counter four_column">
                                <div className="grid_show_case grid_layout clearfix" style={{ position: 'relative', height: '231.219px' }}>
                                    <div className="grid_box _card">
                                        <div className="counter-block style_one count-box counted">
                                            <div className="icon_box  ">
                                                <div className="icon">
                                                    <img src="/assets/images/fun-1.png" className="img-fluid svg_image" alt="icon png" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text">
                                                        <CounterUp count={356} time={1} />
                                                    </span>
                                                    <small>+</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>Cases Done</h6>
                                                <p>It is a long establish fact that a reader distracted</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card" style={{ position: 'absolute', left: '25%', top: 0 }}>
                                        <div className="counter-block style_one count-box counted">
                                            <div className="icon_box  ">
                                                <div className="icon">
                                                    <img src="/assets/images/fun-2.png" className="img-fluid svg_image" alt="icon png" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text">
                                                        <CounterUp count={100} time={1} />
                                                    </span>
                                                    <small>%</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>Satisfied clients</h6>
                                                <p>It is a long establish fact that a reader distracted</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card" style={{ position: 'absolute', left: '50%', top: 0 }}>
                                        <div className="counter-block style_one count-box counted">
                                            <div className="icon_box  ">
                                                <div className="icon">
                                                    <img src="/assets/images/fun-3.png" className="img-fluid svg_image" alt="icon png" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text">
                                                        <CounterUp count={82} time={1} />
                                                    </span>
                                                    <small>+</small>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6>Awards Wins</h6>
                                                <p>It is a long establish fact that a reader distracted</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_box _card" style={{ position: 'absolute', left: '75%', top: 0 }}>
                                        <div className="counter-block style_one count-box counted">
                                            <div className="icon_box  ">
                                                <div className="icon">
                                                    <img src="/assets/images/fun-4.png" className="img-fluid svg_image" alt="icon png" />
                                                </div>
                                                <div className="coun_ter">
                                                    <span className="count-text" data-speed={1500} data-stop={82}>
                                                        <CounterUp count={82} time={1} />
                                                    </span>
                                                    <small />
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h6> Team Members</h6>
                                                <p>It is a long establish fact that a reader distracted</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
