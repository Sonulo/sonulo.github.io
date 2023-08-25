import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const ShopGrid = dynamic(() => import('@/components/elements/ShopGrid'), {
    ssr: false,
})

export default function Shop() {
    return (
        <>
            <Layout breadcrumbTitle="Shop">
                <div>
                    <main id="main" className="site-main" role="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <section className="product_shop_section four_column product_wrapper_grid style_one">
                                        {/*===============default spacing==============*/}
                                        <div className="pd_top_90" />
                                        {/*===============default spacing==============*/}
                                        <ShopGrid />
                                        {/*===============default spacing==============*/}
                                        <div className="pd_bottom_50" />
                                        {/*===============default spacing==============*/}
                                    </section>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/*-newsteller-*/}
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

            </Layout>
        </>
    )
}