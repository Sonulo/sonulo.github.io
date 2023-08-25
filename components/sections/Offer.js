
import Countdown from "@/components/elements/Countdown";
import Link from "next/link"

export default function Offer() {
    const currentTime = new Date();
    return (
        <>
            <section className="offer-section bg_op_1" style={{ backgroundImage: 'url(/assets/images/blue-abstract-gradient-wave.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="offer style_one">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 col-md-12">
                                <div className="left_content">
                                    <div className="main_content">
                                        <h6>Hurry up!</h6>
                                        <h1>
                                            Make Your Winter
                                            70% Off
                                        </h1>
                                        <div className="counter_section">
                                            <div className="Countdown-timer">
                                                <div className="countdown text-left">
                                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom_content">
                                            <div className="button_content">
                                                <Link href="#" className="theme-btn one">Shop Now</Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 hidden-lg">
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
