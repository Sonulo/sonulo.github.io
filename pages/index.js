import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Cta from "@/components/sections/Cta"
import HeroSlider3 from "@/components/sections/HeroSlider3"
import Service4 from "@/components/sections/Service4"
import { useState } from "react"
import Head from 'next/head'

export default function Home1() {
    // Floating
    const [isFloating, setFloating] = useState(false);
    const handleFloating = () => setFloating(!isFloating);

    return (
        <>
            <Head>
                <title>Sonulo - Software Development Company</title>
            </Head>
            <Layout headerStyle={3} footerStyle={3}>
                <HeroSlider3 />
                <Service4 />
                <About2 />
                <Cta />
            </Layout>
        </>
    )
}