import Layout from '@/components/layout/Layout';

export default function ElementSimpleImage() {
    return (
        <>
            <Layout breadcrumbTitle="Simple Image">
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_70" />
                            {/*===============spacing==============*/}
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                    <div className="simple_image_boxes">
                                        <img src="../assets/images/expertise-bg-1.jpg" className="simp_img img-fluid height_400" alt="image" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                    <div className="simple_image_boxes">
                                        <img src="../assets/images/cal-to-action-2.jpg" className="simp_img img-fluid height_400" alt="image" />
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                    <div className="simple_image_boxes">
                                        <img src="../assets/images/cal-to-action.jpg" className="simp_img img-fluid height_400" alt="image" />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                    <div className="simple_image_boxes">
                                        <img src="../assets/images/sliders/slider-3-3.jpg" className="simp_img img-fluid height_400" alt="image" />
                                    </div>
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
