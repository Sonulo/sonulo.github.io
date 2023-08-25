import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About5"
import Blog6 from "@/components/sections/Blog6"
import Client2 from "@/components/sections/Client2"
import Contact2 from "@/components/sections/Contact2"
import HeroSlider6 from "@/components/sections/HeroSlider6"
import Project5 from "@/components/sections/Project5"
import Service7 from "@/components/sections/Service7"
import Timeline from "@/components/sections/Timeline"

export default function Home6() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <HeroSlider6 />
                <Service7 />
                <About5 />
                <Timeline />
                <Project5 />
                <Contact2 />
                <Blog6 />
                <Client2 />
            </Layout>
        </>
    )
}