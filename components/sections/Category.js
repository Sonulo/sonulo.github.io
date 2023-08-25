import Link from "next/link"
export default function Category() {
    return (
        <>
            <section className="category-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image_grid_content style_two image_covered main_image_grid">
                                <div className="mg_image_box">
                                    <div className="image_box height_500px">
                                        <img src="/assets/images/shop/shop-cat-one.jpg" className="img" alt="image" />
                                    </div>
                                    <div className="content">
                                        <h3><Link href="#">Interiors</Link ></h3>
                                        <div className="tag">New</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image_grid_content style_two image_covered additional_image_grid">
                                <div className="mg_image_box">
                                    <div className="image_box height_235px">
                                        <img src="/assets/images/shop/shop-cat-three.jpg" className="img" alt="image" />
                                    </div>
                                    <div className="content">
                                        <h3><Link href="#">Beds</Link ></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="image_grid_content style_two  image_covered additional_image_grid">
                                <div className="mg_image_box">
                                    <div className="image_box height_235px">
                                        <img src="/assets/images/shop/shop-cat-two.jpg" className="img" alt="image" />
                                    </div>
                                    <div className="content">
                                        <h3><Link href="#">Furniture</Link ></h3>
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
