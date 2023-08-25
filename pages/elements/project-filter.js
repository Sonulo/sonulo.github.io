import Layout from '@/components/layout/Layout';
import dynamic from 'next/dynamic';
const PortfolioFilter3Col = dynamic(() => import('@/components/elements/PortfolioFilter3Col'), {
    ssr: false,
})

export default function ElementFilter() {
    return (
        <>
            <Layout breadcrumbTitle="Filter">
                <div className="auto-container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <div className="project_all filt_style_one filter_enabled">
                                <PortfolioFilter3Col />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
