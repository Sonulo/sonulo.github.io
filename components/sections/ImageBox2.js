import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function ImageBox2() {
    return (
        <>
            <section className="image-box-section mr_bottom_minus_150 z_99 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="image_box_new type_three" style={{ background: 'url(/assets/images/home-3-who-we-are-1.jpg)' }}>
                                <div className="content_box">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="content_box_inner">
                                                <h1>Who We Are?
                                                </h1>
                                                <p>Explain to you how all this mistaken idea of denouncing pleasure
                                                    and praising pain was born and I will give you a complete
                                                    account of the system.</p>
                                                <Link href="#" className="read_more type_two">
                                                    Free Consultation <span className="icon-right-arrow" />
                                                </Link >
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="video_box video-inner text-center">
                                                <VideoBox />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
