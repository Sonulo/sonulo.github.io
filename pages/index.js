import FloatingMenu from "@/components/layout/FloatingMenu"
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Expertise from "@/components/sections/Expertise"
import HeroSlider1 from "@/components/sections/HeroSlider1"
import Newsteller1 from "@/components/sections/Newsteller1"
import Process1 from "@/components/sections/Process1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import { useState } from "react"
import Head from 'next/head'

export default function Home1() {
    // Floating
    const [isFloating, setFloating] = useState(false);
    const handleFloating = () => setFloating(!isFloating);

    return (
        <>
            <Head>
                <title>Creote - Corporate & Consulting Business NextJS Template</title>
            </Head>
            <Layout headerStyle={1} footerStyle={1}>
                <HeroSlider1 />
                <About1 />
                <Service1 />
                <Expertise />
                <Process1 />
                <Team1 />
                <Project1 />
                <Testimonial1 />
                <Blog1 />
                <Newsteller1 />
                <FloatingMenu handleFloating={handleFloating} isFloating={isFloating} />
            </Layout>
        </>
    )
}