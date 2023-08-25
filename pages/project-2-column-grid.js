import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'

const PortfolioFilter2Col = dynamic(() => import('@/components/elements/PortfolioFilter2Col'), {
    ssr: false,
})

export default function Project2Grid() {

    return (
        <>
            <Layout breadcrumbTitle="2 Column Grid">
                <div>
                    <section className="project_all filt_style_four filter_enabled">
                        <div className="container">
                            {/*===============spacing==============*/}
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <PortfolioFilter2Col />
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                    </section>
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
                    {/*-newsteller end-*/}
                </div>

            </Layout>
        </>
    )
}