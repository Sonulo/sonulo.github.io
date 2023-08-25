import Layout from "@/components/layout/Layout"
import Blog8 from "@/components/sections/Blog8"
import Category from "@/components/sections/Category"
import Client4 from "@/components/sections/Client4"
import HeroSlider8 from "@/components/sections/HeroSlider8"
import Information from "@/components/sections/Information"
import Newsteller2 from "@/components/sections/Newsteller2"
import Offer from "@/components/sections/Offer"
import dynamic from 'next/dynamic'
const Product = dynamic(() => import('@/components/sections/Product'), {
  ssr: false,
})

export default function Home8() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={8}>
                <HeroSlider8 />
                <Client4 />
                <Category />
                <Information />
                <Product />
                <Offer />
                <Blog8 />
                <Newsteller2 />
            </Layout>
        </>
    )
}